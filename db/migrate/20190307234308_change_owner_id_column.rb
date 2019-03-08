class ChangeOwnerIdColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :tagged_notes, :owner_id, :note_id
  end
end
