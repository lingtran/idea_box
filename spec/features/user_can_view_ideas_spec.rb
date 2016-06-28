require 'rails_helper'

RSpec.describe "User can view ideas", type: :feature do
  scenario "user can view all existing ideas", :js => true do
    swill_idea = create(:idea)
    genius_idea = create(:idea, :genius_idea)

    visit root_path

    within(".ideas-index-headers") do
      expect(page).to have_content("Title")
      expect(page).to have_content("Body")
      expect(page).to have_content("Quality")
      expect(page).to have_content("Delete")
    end

    within(".ideas-list") do
      expect(page).to have_content(swill_idea.title)
      expect(page).to have_content(swill_idea.body)
      expect(page).to have_content(swill_idea.quality)
      expect(page).to have_content(genius_idea.title)
      expect(page).to have_content(genius_idea.body)
      expect(page).to have_content(genius_idea.quality)
    end
  end
end
