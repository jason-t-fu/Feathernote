# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 

  User.destroy_all
  admin = User.create!(email: "admin@feathernote.com", password: "password")
  user1 = User.create!(email: "user1@user.com", password: "password")
  user2 = User.create!(email: "user2@user.com", password: "password")

  Notebook.destroy_all
  notebook1 = Notebook.create!(title: "Notebook1", owner_id: admin.id)
  notebook2 = Notebook.create!(title: "Notebook2", owner_id: admin.id)
  notebook3 = Notebook.create!(title: "Notebook3", owner_id: user1.id)
  notebook4 = Notebook.create!(title: "Notebook4", owner_id: user2.id)

  Note.destroy_all
  note1 = Note.create!(title: "Note1", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}', notebook_id: notebook1.id)
  note2 = Note.create!(title: "Note2", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}', notebook_id: notebook2.id)
  note3 = Note.create!(title: "Note3", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}', notebook_id: notebook3.id)
  note4 = Note.create!(title: "Note4", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook4.id)
  note5 = Note.create!(title: "Note5", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook4.id)
  note6 = Note.create!(title: "Note6", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook1.id)
  note7 = Note.create!(title: "Note7", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook1.id)
  note8 = Note.create!(title: "Note8", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook1.id)
  note9 = Note.create!(title: "Note9", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook1.id)
  note10 = Note.create!(title: "Note10", body: '{"ops":[{"insert":"\n"}]}', notebook_id: notebook1.id)
  
end