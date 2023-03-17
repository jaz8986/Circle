class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments, through: :posts
    has_many :followees, foreign_key: :followee_id, class_name: "Follower"
    has_many :followers, through: :followees
end
