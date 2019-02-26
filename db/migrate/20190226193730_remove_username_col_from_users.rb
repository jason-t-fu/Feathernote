class RemoveUsernameColFromUsers < ActiveRecord::Migration[5.2]
  def up
    remove_column :users, :username
  end

  def down
    add_column :users, :username, :string, null: false
    add_index :users, :username, unique: true
  end
end
