class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_img, :username, :name, :pronouns, :bio, :private_location, :longitude, :latitude

  has_many :followers
  has_many :followees
  has_many :posts

end
