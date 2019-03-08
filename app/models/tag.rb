# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  validates :name, :owner_id, null: false
  validates :owner_id, uniqueness: { scope: [:name] }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :tagged,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :TaggedNote

  has_many :notes,
    through: :tagged,
    source: :note
end
