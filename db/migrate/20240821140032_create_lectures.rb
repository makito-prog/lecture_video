class CreateLectures < ActiveRecord::Migration[6.1]
  def change
    create_table :lectures do |t|
      t.string :title
      t.string :video_url
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
