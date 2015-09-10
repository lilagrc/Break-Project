require 'rails_helper'

RSpec.describe AnaController, type: :controller do
  describe 'bronze' do
    it "displays Ana's bronze sculpture page" do
       get :index

       expect(response).to render_template("index")
    end
  end
end
