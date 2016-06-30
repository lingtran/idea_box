class Seed
  def self.start
    generate_ideas
  end

  def self.generate_ideas
    Seed.ideas.each do |idea|
      Idea.create(title: idea[:title], body: idea[:body], quality: idea[:quality] )
    end
  end

  def self.ideas
    [
      { title: "Cupcake ipsum", body: "Toffee jelly beans bonbon ice cream. Fruitcake gummi bears sweet pastry brownie chocolate cake cake. Macaroon cupcake muffin. Jujubes cake biscuit bear claw halvah. Sugar plum muffin pastry gummi bears marshmallow sweet gummies toffee biscuit. Candy topping chocolate bar cookie tiramisu. Tiramisu chupa chups sugar plum sweet pie cupcake candy canes cake cake. Pudding fruitcake fruitcake. Candy canes marshmallow chocolate bar pastry marshmallow chocolate cake liquorice toffee candy canes. Apple pie biscuit pastry powder sweet apple pie. Liquorice fruitcake sweet roll pastry jelly muffin. Sugar plum chupa chups apple pie brownie fruitcake bonbon bear claw tart. Pudding sweet roll chocolate.", quality: 1 },
      { title: "Another cupcake ipsum", body: "Topping wafer marzipan gingerbread. Ice cream gingerbread gummi bears muffin. Donut cookie cheesecake cheesecake cheesecake jujubes candy. Bonbon sesame snaps muffin cake macaroon biscuit cupcake cotton candy. Topping cake bonbon marshmallow liquorice. Tart liquorice cake donut jujubes liquorice pie. Gingerbread wafer jelly beans caramels jelly cotton candy chupa chups icing. Sweet carrot cake cotton candy bear claw. Sesame snaps soufflé chupa chups croissant muffin jelly beans chocolate chupa chups. Cheesecake sweet roll sesame snaps sesame snaps. Danish croissant sweet roll jelly gummi bears marzipan. Oat cake cookie donut.", quality: 0 },
      { title: "Yet another cupcake ipsum", body: "Tart bonbon bear claw toffee pudding tart. Brownie ice cream oat cake macaroon. Marshmallow toffee wafer. Gummies cupcake topping sweet roll carrot cake jujubes cake. Apple pie croissant macaroon gummies cupcake pastry. Biscuit sesame snaps brownie cheesecake dragée jelly-o biscuit. Marzipan dragée danish sesame snaps. Carrot cake jujubes muffin gingerbread chupa chups bear claw pastry candy tootsie roll. Bonbon marzipan dragée icing. Sweet roll danish toffee jelly ice cream donut ice cream. Tootsie roll liquorice soufflé dragée cotton candy carrot cake. Brownie toffee marshmallow biscuit tart sesame snaps cake. Carrot cake candy chocolate bar jujubes candy toffee tootsie roll. Brownie apple pie oat cake cake jelly-o cookie toffee sweet.", quality: 2 },
      { title: "Harry Potter ipsum", body: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last. \n Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.", quality: 1 },
      { title: "More Harry Potter ipsum", body: "Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.", quality: 2 },
      { title: "Hodor", body: "Hodor hodor... hodor hodor, hodor, hodor hodor. Hodor, HODOR hodor, hodor HODOR hodor, hodor hodor, hodor. Hodor. Hodor. Hodor hodor; hodor hodor; hodor hodor hodor?", quality: 1 },
      { title: "Alice in Wonderland", body: "'Speak English!' said the Eaglet. 'I don't know the meaning of half those long words, and, what's more, I don't believe you do either!' And the Eaglet bent down its head to hide a smile: some of the other birds tittered audibly. 'What I was going to say,' said the Dodo in an offended tone, 'was, that the best thing to get us dry would be a Caucus-race.' 'What IS a Caucus-race?' said Alice; not that she wanted much to know, but the Dodo had paused as if it thought that SOMEBODY ought to speak, and no one else seemed inclined to say anything.", quality: 0 },
      { title: "Samuel L. ipsum", body: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.", quality: 2 }
    ]
  end
end

Seed.start
