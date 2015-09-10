require 'csv'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

CSV.foreach("db/art.csv", headers: true) do |row|
  Artwork.create(
  artist: row[0],
  medium: row[1],
  name: row[2],
  image: row[3]
  )
end


# artwork =[

#   {artist: "Ana", medium: "Bronze", name: "Big Boy", image: "big_boy.jpg",
#   },

#   {artist: "Ana", medium: "Bronze", name: "Don't Shoot Me", image: "don't_shoot_me",
#   },

#   {artist: "Ana", medium: "Bronze", name: "The Great One", image: "great_one",
#   },

#   {artist: "Ana", medium: "Bronze", name: "Grizzly", image: "grizzly.jpg",
#   },

#   {artist: "Ana", medium: "Bronze", name: "Happy Camper", image: "happy_camper.jpg",
#   },

#   {artist: "Ana", medium: "Bronze", name: "Hummers", image: "hummingbirds.jpg",
#   },

#   {artist: "Ana", medium: "Bronze", name: "Pelican", image: "pelican.png",
#   },

#   {artist: "Ana", medium: "Bronze", name: "LookOut Post II", image: "look_out_post.png",
#   }
# ]

# artwork.each do |art|
#   Artwork.create art
# end


