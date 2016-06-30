require 'rails_helper'

RSpec.describe "User can view ideas", type: :feature do
  scenario "user can view all existing ideas", :js => true do
    swill_idea = create(:idea)
    genius_idea = create(:idea, :genius_idea)

    visit root_path
    wait_for_ajax

    within(".ideas-index-headers") do
      expect(page).to have_content("Title")
      expect(page).to have_content("Body")
      expect(page).to have_content("Quality")
      expect(page).to have_content("Delete")
    end

    within(".ideas-table") do
      expect(page).to have_css('.ideas-list')
      expect(page).to have_css('.idea-title')
      expect(page).to have_css('.idea-body')
      expect(page).to have_css('.idea-quality')
      expect(page).to have_css('#thumbs-up')
      expect(page).to have_css('#thumbs-down')
      expect(page).to have_content(swill_idea.quality)
      expect(page).to have_content(genius_idea.quality)
    end
  end
end
