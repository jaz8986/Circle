class CreateFollowers < ActiveRecord::Migration[7.0]
  def change
    create_table :followers do |t|
      t.integer :followee_id, foreign_key: true
      t.integer :follower_id, foreign_key: true

      t.timestamps
    end
  end
end
