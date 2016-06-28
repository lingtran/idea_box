require 'rails_helper'

RSpec.describe "User can change quality of idea", type: :feature do
  xscenario "they can thumbs up an idea" do
    idea_one, idea_two = create_list(:idea, 2)
    new_quality = "plausible"

    visit root_path

    within(page.all['.ideas-list'].first) do
      click_button('thumbs down')

      expect(page).to have_content("plausible")
      expect(idea_one.quality).to eq("plausible")
    end

  end
end
