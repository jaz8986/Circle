class FollowersController < ApplicationController
    def index
        follows = Follower.all
        render json: follows, status: :ok
    end

    def create
        followee = User.find params[:followee_id]
        follower = User.find params[:follower_id]
        follow = Follower.create!(followee: followee, follower: follower)
        render json: follow, status: :created
    end

    def destroy 
        follow = Follower.find_by!({follower_id: session[:user_id], followee_id: params[:id]})
        follow.destroy
        head :no_content
    end

    private

    def follower_params
        params.permit(:followee, :follower)
    end
end
