require 'rails_helper'

RSpec.describe RobertController, type: :controller do
  describe 'bronze' do
    it "displays Robert's bronzse gallery page" do
       get :bronze

       expect(response).to be_success
    end
  end
end
