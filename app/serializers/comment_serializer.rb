class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :description, :created_at
  has_one :user
end
