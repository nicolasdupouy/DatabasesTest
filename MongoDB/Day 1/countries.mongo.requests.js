db.countries.insert({
  _id: 'us',
  name: 'United States',
  exports: {
    foods: [
      {name: 'bacon', tasty: true},
      {name: 'burgers'}
    ]
  }
})

db.countries.insert({
  _id: 'ca',
  name: 'Canada',
  exports: {
    foods: [
      {name: 'bacon', tasty: false},
      {name: 'syrup', tasty: true}
    ]
  }
})

db.countries.insert({
  _id: 'mx',
  name: 'Mexico',
  exports: {
    foods: [
      {name: 'salsa', tasty: true, condiment: true}
    ]
  }
})

db.countries.find(
  //{'exports.foods.name': 'bacon', 'exports.foods.tasty': true},
  {
    'exports.foods': {
      $elemMatch: {
        name: 'bacon',
        tasty: true
      }
    }
  },
  {_id: false, name: true}
)

db.countries.find(
  {
    'exports.foods': {
      $elemMatch: {
        tasty: true,
        condiment: {$exists: true}
      }
    }
  },
  {_id: false, name: true}
)

db.countries.find(
  {
    $or: [
      {_id: 'mx'},
      {name: 'United States'}
    ]
  },
  {_id: true}
)

