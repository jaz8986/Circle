class FollowersController < ApplicationController
    def index
        follows = Follower.all
        render json: follows, status: :ok
    end
end
