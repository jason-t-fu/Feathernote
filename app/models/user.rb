# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  after_initialize :ensure_session_token

  validates :email, :session_token, presence: true, uniqueness: true
  validate :email_must_be_valid
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  has_many :notebooks,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Notebook,
    dependent: :destroy

  has_many :notes,
    through: :notebooks,
    source: :notes

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def create_initial_notebook!
    regex = /^(.*)\@/
    notebook_title = self.email.match(regex)[1]
    Notebook.create!({ title: notebook_title, owner_id: self.id })
  end

  private
  def email_must_be_valid
    if !(email =~ URI::MailTo::EMAIL_REGEXP) && errors.messages.empty?
      errors.add(:email, "address is not valid");
    end
  end
end
