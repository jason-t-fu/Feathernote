class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :notebooks, [:owner_id, :title], unique: true
    add_index :notebooks, :title
  end
end
