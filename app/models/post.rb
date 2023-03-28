class Post < ApplicationRecord
    belongs_to :user
    has_many :comments

    validates :img, :user_id, presence: true
    # validates :description, length: { maximum: 250 }
end
