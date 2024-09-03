class AddVideoUrlToLectures < ActiveRecord::Migration[7.0]
  def change
    unless column_exists?(:lectures, :video_url)
      add_column :lectures, :video_url, :string
    end
  end
end
