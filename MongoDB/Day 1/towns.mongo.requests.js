db.towns.insert({
  name: "New York",
  population: 22200000,
  last_census: ISODate("2009-07-31"),
  famous_for: ["statue of liberty", "food"],
  mayor: {
    name: "Michael Bloomberg",
    party: "I"
  }
})

db.towns.find()

insertCity("New York", 22200000,'2009-07-31', ["statue of liberty", "food"], {name: "Michael Bloomberg", party: "I"})
insertCity("Punxsutawney", 6200, '2008-01-31', ["Phil the groundhog"], {name: 'Jim Wehrle'})
insertCity("Portland", 582000, '2007-09-20', ["beer", "food"], {name: "Sam Adams", party: "D"})

db.towns.find(
  { name: /^P/, population: { $lt: 10000}},
  { name: 1, population: 1}
)

var population_range = {}
population_range['$lt'] = 1000000
population_range['$gt'] = 10000
db.towns.find(
  { name: /^P/, population: population_range},
  { _id: false, name: true }
)

db.towns.find(
  { last_census: { $lte: ISODate('2008-01-31')}},
  { _id: 0, name: 1}
)

db.towns.find(
  { famous_for : 'food'},
  { _id: false, name: true, famous_for: true}
)

// Mathing partial value
db.towns.find(
  { famous_for : /statue/},
  { _id: false, name: true, famous_for: true}
)

// Matching all values
db.towns.find(
  { famous_for : {$all: ['food', 'beer']}},
  { _id: false, name: true, famous_for: true}
)

// Or not in values
db.towns.find(
  { famous_for : {$nin: ['food', 'beer']}},
  { _id: false, name: true, famous_for: true}
)

db.towns.find(
  {'mayor.party': 'I'},
  { _id: false, name: true, mayor: true}
)

db.towns.find(
  {'mayor.party': {$exists: false}},
  { _id: false, name: true, mayor: true}
)

// $unset to remove the field
db.towns.update(
  {name: 'Portland'},
  {$set: {state: 'OR'}} // just {state: 'OR'} would replace the whole object
)

// Increment a field value
db.towns.update(
  {name: 'Portland'},
  {$inc: {population: 1000}} // just {state: 'OR'} would replace the whole object
)

db.towns.update(
  { name: 'Portland'},
  { $set: {country: { $ref: 'countries', $id: 'us'}}}
)

// Find Portland country document
var portland = db.towns.findOne({name: 'Portland'})
db.countries.findOne({_id: portland.country.$id})

