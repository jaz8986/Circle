class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :img
      t.integer :user_id, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
