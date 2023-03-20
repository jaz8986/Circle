class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts, include: ['user', 'user.username'], status: :ok
    end

end
