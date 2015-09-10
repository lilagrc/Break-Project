class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.string :artist
      t.string :medium
      t.string :name
      t.string :image

      t.timestamps null: false
    end
  end
end
