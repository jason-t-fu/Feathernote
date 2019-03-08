# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :text
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord

  validates :title, :notebook_id, presence: true

  belongs_to :notebook

  has_many :tagged,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: :TaggedNote

  has_many :tags,
    through: :tagged,
    source: :tag

end
