use("cruddb")

db.createCollection("collection1")

db.collection1.insertOne({
    name: "ajay yadav",
    age: 21,
    status: "working"
})

db.collection1.insertMany([{
    name: "ajay yadav 1",
    age: 26,
    status: "working"
},
{
    name: "ajay yadav 2",
    age: 31,
    status: "working"
},
{
    name: "ajay yadav 3",
    age: 51,
    status: "working"
},
{
    name: "ajay yadav 4",
    age: 71,
    status: "working"
}])

let a = db.collection1.find({ age: 21 })
console.log(a);
console.log(a.count());
console.log(a.toArray());

let b = db.collection1.findOne({ status: "working" })
console.log(b);

// UPDATE

db.collection1.updateMany({status: "working"}, {$set:{status: "working continuously"}})

db.collection1.updateOne({age: 21}, {$set:{age: 1000}})

// delete

db.collection1.deleteOne({age: 21})

db.collection1.deleteMany({name: "ajay yadav 100"})