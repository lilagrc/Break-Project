require 'rails_helper'

RSpec.describe RobertController, type: :controller do
  describe 'bronze' do
    it "displays Robert's bronzse gallery page" do
       get :index

       expect(response).to render_template("index")
    end
  end
end
