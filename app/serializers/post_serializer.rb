class PostSerializer < ActiveModel::Serializer
  attributes :id, :img, :description
  has_one :user
end
