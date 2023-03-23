class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments, through: :posts

    has_many :followed_users, foreign_key: :follower_id, class_name: "Follower"
    has_many :followees, through: :followed_users

    has_many :following_users, foreign_key: :followee_id, class_name: "Follower"
    has_many :followers, through: :following_users


    validates :username, uniqueness: true
    validates :password, length: { minimum: 8, maximum: 20 }, on: :create
    validates :bio, length: { maximum: 300 }


end
