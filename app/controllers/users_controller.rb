class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    
    def show
        render json: @user 
    end

    def index # disable this during deployment so it doesn't show all users
        all_user = User.all
        render json: all_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def find_user
        find_user = User.find_by(id: session[:user_id]) 
        render json: find_user, status: :ok
    end
    
    private 

    def user_params
        params.permit(:profile_img, :username, :password, :name, :pronouns, :bio, :location)
    end
end
