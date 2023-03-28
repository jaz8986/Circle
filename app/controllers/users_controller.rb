class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    
    def show
        user = User.find_by(username: params[:id])
        render json: user, status: :ok
    end

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def find_user
        find_user = User.find_by(id: session[:user_id]) 
        render json: find_user, status: :ok
    end

    def patch_location
        user = User.find_by(id: session[:user_id])
        user.update!(user_params)
        render json: user, status: :accepted
    end
    
    private 

    def user_params
        params.permit(:profile_img, :username, :password, :name, :pronouns, :bio, :private_location, :longitude, :latitude)
    end
end
