class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments, through: :posts
    has_many :followees, foreign_key: :followee_id, class_name: "Follower"
    has_many :followers, through: :followees

    validates :username, :password, :name, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 8, maximum: 20 }
    validates :bio, length: { maximum: 300 }
end
