class CreateTaggedNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :tagged_notes do |t|
      t.integer :tag_id, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :tagged_notes, [:tag_id, :owner_id], unique: true
    add_index :tagged_notes, :owner_id
  end
end
