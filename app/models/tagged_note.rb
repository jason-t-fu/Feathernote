# == Schema Information
#
# Table name: tagged_notes
#
#  id         :bigint(8)        not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TaggedNote < ApplicationRecord

  validates :tag_id, :note_id, presence: true
  validates :tag_id, uniqueness: { scope: [:note_id] }

  belongs_to :tag
  
  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: :Note
end
