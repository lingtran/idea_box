class Seed
  def self.start
    generate_ideas
  end

  def self.generate_ideas
    3.times do |i|
      Idea.create(title: "Idea #{i}", body: "Idea #{i} body content", quality: i )
    end
  end
end

Seed.start
