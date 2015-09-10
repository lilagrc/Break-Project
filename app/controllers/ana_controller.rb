class AnaController < ApplicationController

  def bronze
    @ana_bronze = Artwork.ana_bronze
  end

end
