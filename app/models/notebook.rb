# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :owner_id, uniqueness: { scope: [:title] }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :notes,
    dependent: :destroy
end
