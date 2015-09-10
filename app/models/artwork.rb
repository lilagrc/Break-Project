class Artwork < ActiveRecord::Base

 scope :ana_bronze, -> { where(artist: "ana")}
 scope :roberto_bronze, -> { where(artist: "roberto")}

end
