class RobertController < ApplicationController

  def bronze
    @roberto_bronze = Artwork.roberto_bronze
  end

end
