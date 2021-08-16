const mongoose = require('mongoose');

//<<<<<<<<<<<<<<connecting the the local host>>>>>>>>>>>>>>>>>>>
mongoose.connect("mongodb://localhost:27017/dataBase1" ,  {useNewUrlParser: true, useUnifiedTopology: true});



const fruitSchema = new mongoose.Schema({
  
   name:{
type:String,
required:[true , "why no name"]
                    
   },
   rating: {
       type:Number,
       min:1,
       max:10
   } ,
   review:String

})


const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit ({
  name: "apple",
  rating: 7 ,
   review:"nice",
})


const kiwi = new Fruit({
    name:"kiwi",
    rating:8,
    review:"decent",
})

const orange = new Fruit({
    name:"orange",
    rating:10,
    review:"very good",
})
const banana = new Fruit({
    name:"grapes",
    rating:10,
    review:"empty"

})


const pineapple = new Fruit({

  name:"pineapple",
  score:9,
  review:"nice"
})

//pineapple.save();





//<<<<<<<<<<<<<<<<<for inserting the items in colletions in data base>>>>>>

/*
Fruit.insertMany([ pineapple ] , function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("no error inseting items");
  }

})
*/
















//fruit.save();



const personSchema = new mongoose.Schema({
    name:String, 
    age:Number,
    favouriteFruit : fruitSchema
})




const Person = mongoose.model("Person" , personSchema);


const person = new Person({
   
    name:"adfarjun",
    age:21,
    favouriteFruit:pineapple


})


//person.save();



  //<<<<<<<<<<<<<<<<<<<<<<for displaying the database>>>>>>>>>>>>>>>>>>>>>>>>

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
       // mongoose.connection.close();
       fruits.forEach(function(a){
           console.log(a.name)
       });
    }
})

    // <<<<<<<<<<<<<<<updating the data base>>>>>>>>>>>>>>>>>>>>>>
/*
    Fruit.updateOne({_id:"6119ccf75088ad7c38d87b7c"}, {name:"peach"} ,(e)=>{
  if(e){
    console.log(e);
  }
})*/

Person.updateOne({_id:"611a7da9b398c437e0e7dae7"} , {favouriteFruit:pineapple} , (e)=>{
  if(e){
    console.log(e);
  }else{
    console.log("updated");
  }

})




  //<<<<<<<<<<<<<<<deleting the database>>>>>>>>>>>>>>>>>>>

  Fruit.deleteMany({name:"banana"} , (e)=>{
if(e){
  console.log(e);
}
  })