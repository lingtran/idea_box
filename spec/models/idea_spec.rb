require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "validations" do
    it { should validate_presence_of :title }
    it { should validate_presence_of :body }
    it { should validate_presence_of :quality }
  end

  context "check default of quality" do
    it "should be swill" do
      idea_one = create(:idea)
      idea_two = create(:idea, quality: 1)

      expect(idea_one.quality).to eq("swill")
      expect(idea_two.quality).to eq("plausible")
      expect(idea_one.quality).not_to eq(idea_two.quality)
    end
  end

end
