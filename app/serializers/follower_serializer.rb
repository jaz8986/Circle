class FollowerSerializer < ActiveModel::Serializer
  attributes :id, :followee_id, :follower_id
end
