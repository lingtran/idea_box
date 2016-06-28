FactoryGirl.define do
  factory :idea do
    sequence(:title) { |n| "Idea Title #{n}" }
    sequence(:body) { |n| "Body of idea #{n}"}
    quality 0

    trait :genius_idea do
      quality 2
    end

    trait :plausible_idea do
      quality 1
    end
  end
end
