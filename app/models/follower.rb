class Follower < ApplicationRecord
    belongs_to :followee, class_name: "User"
    belongs_to :follower, class_name: "User"

    validates :followee, uniqueness: { scope: [:follower] }
end
