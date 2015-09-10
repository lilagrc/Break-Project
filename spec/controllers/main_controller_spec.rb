require 'rails_helper'

RSpec.describe MainController, type: :controller do
   describe 'contact' do
    it "displays contact page" do
       get :contact

       expect(response).to render_template("contact")
    end
  end

  describe "commissions" do
    it 'displays commissions page' do
      get :commissions

      expect(response).to render_template('commissions')
    end
  end

  describe "about" do
    it 'displays about page' do
      get :about

      expect(response).to render_template('about')
    end
  end
end
