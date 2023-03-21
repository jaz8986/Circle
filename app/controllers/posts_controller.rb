class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def create
        find_user = User.find_by(id: session[:user_id])
        new_post = Post.create!(img: params[:img], description: params[:description], user_id: find_user.id)
        render json: new_post, status: :created
    end

    def show
        post = Post.find params[:id]
        render json: post, status: :ok
    end

end
