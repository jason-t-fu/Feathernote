# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :text
#  notebook_id :integer          default(1), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord

  validates :title, :notebook_id, presence: true

  belongs_to :notebook

end
