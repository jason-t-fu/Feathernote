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

require 'test_helper'

class TaggedNoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
