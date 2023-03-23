class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :profile_img
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :pronouns
      t.string :bio
      t.string :latitude
      t.string :longitude
      t.boolean :private_location      

      t.timestamps
    end
  end
end
