require 'rails_helper'

RSpec.describe RobertController, type: :controller do
  describe 'index' do
    it "displays Robert's main gallery page" do
       get :index

       expect(response).to render_template("index")
    end
  end
end
