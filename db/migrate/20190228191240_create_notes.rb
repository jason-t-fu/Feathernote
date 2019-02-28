class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :notebookId, null: false, default: 1

      t.timestamps
    end

    add_index :notes, :title
    add_index :notes, :notebookId
  end
end
