class PostSerializer < ActiveModel::Serializer
  attributes :id, :img, :user_id, :description
end
