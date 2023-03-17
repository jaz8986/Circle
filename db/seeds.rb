# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Follower.destroy_all
Post.destroy_all
Comment.destroy_all

puts "users are being created"
sally = User.create(
    profile_img: "myjpg.jpg",
    username: "sally",
    password: "12345",
    name: "Sally Jones",
    pronouns: "she/her",
    bio: "hello world!",
    location: "Sactown"
)

bob = User.create(
    profile_img: "myjpg.jpg",
    username: "bob",
    password: "12345",
    name: "Bob Jones",
    pronouns: "he/him",
    bio: "hello world!",
    location: "Sactown"
)

john = User.create(
    profile_img: "myjpg.jpg",
    username: "john",
    password: "12345",
    name: "John Doe",
    pronouns: "he/him",
    bio: "hello world!",
    location: "Sactown"
)

jane = User.create(
    profile_img: "myjpg.jpg",
    username: "jane",
    password: "12345",
    name: "Jane Doe",
    pronouns: "she/her",
    bio: "hello world!",
    location: "Sactown"
)

puts "users are following other users" 
Follower.create(followee: bob, follower: sally)
Follower.create(followee: bob, follower: john)
Follower.create(followee: bob, follower: jane)

Follower.create(followee: sally, follower: bob)
Follower.create(followee: sally, follower: john)
Follower.create(followee: sally, follower: jane)

Follower.create(followee: john, follower: jane)
Follower.create(followee: john, follower: sally)
Follower.create(followee: john, follower: bob)

Follower.create(followee: jane, follower: sally)
Follower.create(followee: jane, follower: john)
Follower.create(followee: jane, follower: bob)

puts "creating posts"
20.times do
    Post.create(
        img: "myjpg.jpg",
        user_id: jane.id,
        description: "hello"
    )
end

20.times do
    Post.create(
        img: "myjpg.jpg",
        user_id: john.id,
        description: "hello"
    )
end

20.times do
    Post.create(
        img: "myjpg.jpg",
        user_id: sally.id,
        description: "hello"
    )
end

20.times do
    Post.create(
        img: "myjpg.jpg",
        user_id: bob.id,
        description: "hello"
    )
end

puts "creating comments...."
100.times do
    Comment.create(
        post_id: Post.all.sample.id,
        user_id: User.all.sample.id,
        description: "cooooool"
    )
end

puts "seeding done"