# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create!(name: "Luke", movie: movies.first)

User.destroy_all
Follower.destroy_all
Post.destroy_all
Comment.destroy_all

puts "users are being created"
sally = User.create!(
    profile_img: "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
    username: "sally",
    password: "12345678",
    name: "Sally Jones",
    pronouns: "she/her",
    bio: "hello world!",
    longitude: "-121.3626923",
    latitude: "38.4511814",
    private_location: false
)

bob = User.create!(
    profile_img: "https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
    username: "bob",
    password: "12345678",
    name: "Bob Jones",
    pronouns: "he/him",
    bio: "hello world!",
    longitude: "-122",
    latitude: "39",
    private_location: false
)

john = User.create!(
    profile_img: "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
    username: "john",
    password: "12345678",
    name: "John Doe",
    pronouns: "he/him",
    bio: "hello world!",
    longitude: "-123",
    latitude: "40",
    private_location: false
)

jane = User.create!(
    profile_img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg",
    username: "jane",
    password: "12345678",
    name: "Jane Doe",
    pronouns: "she/her",
    bio: "hello world!",
    longitude: "-124",
    latitude: "41",
    private_location: false
)

max = User.create!(
    profile_img: "https://img.nbc.com/sites/nbcunbc/files/images/2021/3/22/NewAmsterdam-RyanEggold-bio-1455x1455.jpg",
    username: "max",
    password: "12345678",
    name: "Max Goodwin",
    pronouns: "he/him",
    bio: "hello world!",
    longitude: "-124.5",
    latitude: "41.5",
    private_location: false
)

helen = User.create!(
    profile_img: "https://static.wikia.nocookie.net/new-amsterdam/images/f/f2/2CastPoster4.jpg/revision/latest?cb=20220112113308",
    username: "helen",
    password: "12345678",
    name: "Helen Sharpe",
    pronouns: "she/her",
    bio: "hello world!",
    longitude: "-124.7",
    latitude: "41.7",
    private_location: false
)

lauren = User.create!(
    profile_img: "https://tv-fanatic-res.cloudinary.com/iu/s--2HFQqAU5--/f_auto,q_auto/v1537311763/dr-lauren-bloom-new-amsterdam",
    username: "lauren",
    password: "12345678",
    name: "Laurn Bloom",
    pronouns: "she/her",
    bio: "hello world!",
    longitude: "-125",
    latitude: "41.9",
    private_location: false
)


puts "users are following other users" 
Follower.create!(followee: bob, follower: sally)
Follower.create!(followee: bob, follower: john)
Follower.create!(followee: bob, follower: jane)

Follower.create!(followee: sally, follower: bob)
Follower.create!(followee: sally, follower: john)
Follower.create!(followee: sally, follower: jane)

Follower.create!(followee: john, follower: jane)
Follower.create!(followee: john, follower: sally)
Follower.create!(followee: john, follower: bob)

Follower.create!(followee: jane, follower: sally)
Follower.create!(followee: jane, follower: john)
Follower.create!(followee: jane, follower: bob)

puts "creating posts"
20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: jane.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: john.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: sally.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: bob.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: max.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: helen.id,
        description: "hello"
    )
end

20.times do
    Post.create!(
        img: "https://www.palmtreesandpellegrino.com/wp-content/uploads/2019/04/IMG_7078-1440x1920.jpg",
        user_id: lauren.id,
        description: "hello"
    )
end

puts "creating comments...."
100.times do
    Comment.create!(
        post_id: Post.all.sample.id,
        user_id: User.all.sample.id,
        description: "cooooool"
    )
end

puts "seeding done"