require 'rails_helper'

RSpec.describe AnaController, type: :controller do
  describe 'bronze' do
    it "displays Ana's bronze sculpture page" do
       get :bronze

       expect(response).to be_success
    end
  end
end
