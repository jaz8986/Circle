class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :post_id, foreign_key: true
      t.integer :user_id, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
