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

  describe "POST idea" do
    before(:each) do
      @swill_idea = create(:idea)
      @genius_idea = create(:idea, :genius_idea)
      @plausible_idea = create(:idea, :plausible_idea)
      @new_idea = { title: "New Idea", body: "Body of new idea" }

      post "/api/v1/ideas?title=#{@new_idea[:title]}&body=#{@new_idea[:body]}"
    end

    it "returns a response with for creating idea" do
      expect(response).to have_http_status(201)
      expect(response).to be_success
    end

    it "creates the idea" do
      expect(@swill_idea[:title]).not_to eq(@new_idea[:title])
      expect(Idea.last.title).to eq(@new_idea[:title])
      expect(response_body[:title]).to eq(@new_idea[:title])
    end
  end

  describe "DELETE idea" do
    before(:each) do
      @ideas = create_list(:idea, 2)

      delete "/api/v1/ideas/#{@ideas.first.id}"
    end

    it "provides a response for deleted idea" do
      expect(response).to have_http_status(204)
      expect(response).to be_success
    end

    it "removes the idea" do
      expect(Idea.all).not_to include(@ideas.first)
    end
  end

end
