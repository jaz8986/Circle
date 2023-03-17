class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user

    validates :description, length: { minimum: 1, maximum: 150 }
end
