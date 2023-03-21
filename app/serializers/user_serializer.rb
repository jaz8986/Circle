class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_img, :username, :name, :pronouns, :bio, :location

  has_many :followers
  has_many :posts

end
