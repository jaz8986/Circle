class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_img, :username, :name, :pronouns, :bio, :location
end
