class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show # by post
        post = Post.find params[:id]
        comments = post.comments
        render json: comments, status: :ok
    end

    def create
        find_user = User.find_by(id: session[:user_id])
        new_comment = Comment.create!(post_id: params[:post_id], user_id: find_user.id, description: params[:description])
        render json: new_comment, status: :created
    end

    def destroy
        comment = Comment.find params[:id]
        comment.destroy
        head :no_content
    end


end
