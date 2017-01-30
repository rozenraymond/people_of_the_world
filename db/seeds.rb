# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Person.destroy_all

require 'httparty'

request = HTTParty.get "http://pplapi.com/batch/500/sample.json"

request.each do |person|
  # puts person.to_json
  p1 = Person.create(
    :country => person["country_name"],
    :latitude => person["latitude"],
    :longitude => person["longitude"],
    :language => person["language"],
    :income => person["income"],
    :sex => person["sex"],
    :religion => person["religion"],
    :dob => person["date_of_birth"],
    :internet => person["internet"],
    :age => person["age"],
    :openness => person["openness"],
    :conscientiousness => person["conscientiousness"],
    :extraversion => person["extraversion"],
    :agreeableness => person["agreeableness"],
    :neurotism => person["neuroticism"],
    )

end

puts Person.count

# p1 = Person.create :country => "australia", :sex=>"female"
