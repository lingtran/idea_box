require 'rails_helper'

RSpec.describe "Api::V1::IdeasController", type: :request do
  describe "GET index" do
    before(:each) do
      @swill_idea = create(:idea)
      @genius_idea = create(:idea, :genius_idea)

      get '/api/v1/ideas'
    end

    it "returns a response with all ideas" do
      expect(response).to have_http_status(200)
      expect(response).to be_success
    end

    it "returns a list of all ideas" do
      expect(response_body.count).to eq(2)
      expect(response_body.first[:title]).to eq(@swill_idea.title)
      expect(response_body.first[:body]).to eq(@swill_idea.body)
      expect(response_body.first[:quality]).to eq(@swill_idea.quality)
      expect(response_body.last[:title]).to eq(@genius_idea.title)
      expect(response_body.last[:body]).to eq(@genius_idea.body)
      expect(response_body.last[:quality]).to eq(@genius_idea.quality)
    end
  end
end
