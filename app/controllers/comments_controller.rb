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


end
