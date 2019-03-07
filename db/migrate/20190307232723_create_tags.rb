class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    
    add_index :tags, [:owner_id, :name], unique: true
    add_index :tags, :name
  end
end
