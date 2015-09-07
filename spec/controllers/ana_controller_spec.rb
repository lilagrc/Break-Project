require 'rails_helper'

RSpec.describe AnaController, type: :controller do
  describe 'index' do
    it "displays Ana's main gallery page" do
       get :index

       expect(response).to render_template("index")
    end
  end
end
