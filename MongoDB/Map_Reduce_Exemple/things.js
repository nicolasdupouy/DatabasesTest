use map_reduce_example;

db.things.insert({"x": 1, "tags": ["dog", "cat"]});
db.things.insert({"x": 2, "tags": ["cat"]});
db.things.insert({"x": 3, "tags": ["mouse", "cat", "dog"]});
db.things.insert({"x": 4, "tags": []});

db.things.find();

let map = function () {
    this.tags.forEach(function (z) {
        emit(z, 1);
    });
};

let reduce = function (key, values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
    //return Array.sum(values)
};

let result = db.things.mapReduce(map, reduce, "myResults");
result.find();