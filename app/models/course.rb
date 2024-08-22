class Course < ApplicationRecord
  has_many :lectures, dependent: :destroy
end
