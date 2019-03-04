# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 

  User.destroy_all
  admin = User.create!(email: "admin@feathernote.com", password: "password");


  Note.destroy_all
  note1 = Note.create!(title: "Note1", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}')
  note2 = Note.create!(title: "Note2", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}')
  note3 = Note.create!(title: "Note3", body: '{"ops":[{"attributes":{"bold":true},"insert":"bold"},{"insert":"\n"},{"attributes":{"italic":true},"insert":"italic"},{"insert":"\n"},{"attributes":{"link":"asdf"},"insert":"lin"},{"insert":"k\nh1"},{"attributes":{"header":1},"insert":"\n"},{"insert":"h2"},{"attributes":{"header":2},"insert":"\n"}]}')
  note4 = Note.create!(title: "Note4", body: '{"ops":[{"insert":"\n"}]}')
  note5 = Note.create!(title: "Note5", body: '{"ops":[{"insert":"\n"}]}')
  note6 = Note.create!(title: "Note6", body: '{"ops":[{"insert":"\n"}]}')
  note7 = Note.create!(title: "Note7", body: '{"ops":[{"insert":"\n"}]}')
  note8 = Note.create!(title: "Note8", body: '{"ops":[{"insert":"\n"}]}')
  note9 = Note.create!(title: "Note9", body: '{"ops":[{"insert":"\n"}]}')
  note10 = Note.create!(title: "Note10", body: '{"ops":[{"insert":"\n"}]}')
  
end