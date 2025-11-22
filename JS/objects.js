let obj = {
    studName: "Ajay",
    age : 22,
    city: "Hyderabad",

    greet:function(){
        console.log("Hello"+ obj.studName);
    }
};

console.log(obj);
obj.greet();
console.log(obj.greet());
console.log(obj.studName);
console.log(obj.age);
console.log(obj.city);
obj.phone = 994964511456;
console.log(obj.phone);
console.log(obj)

//constructor Function
function user (name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
};

let user1 = new user("Ajay",22,"Hyderabad");
let user2 = new user("Ajju",21,"UK");
let user6 = new user("Charan",23,"Soctland")
console.log(user1);
console.log(user2);
console.log(user2.city);
console.log(user1.city);
console.log(user1,user2,user6)

//objec.create

let ob = {
    studName: "Ajay",
    age : 22,
    city : "Scotland",
    getName : function() {
        return this.studName;
    },
}

let user3 = Object.create(ob);
user3.phone=9949645114;
console.log(user3.phone)
console.log(ob);
console.log(user3);
console.log(user3.getName());

//class Es6
class person {
    constructor(name,age,city,phone){
        this.name = name;
        this.age = age;
        this.city = city;
        this.phone = phone;
    }

}
let p1 = new person("Ajay",22,"Leicester",66562344);
console.log(p1)
p1.course = "Msc";
console.log(p1);
console.log(p1.course)

//shallowcopy
let users = {
    userName: "ajay",
    age : 22,
    addree: {
        Country: "Scotland",
    }
};

let users2 = {...users};
users2.age = 32;
users2.userName="Ajjith";

console.log(users);
console.log(users2);

// using deepcopy
let users3  = structuredClone(users);
users3.userName="Ajju";
users3.age = 25;
users3.addree.Country="London";
console.log(users);
console.log(users3);

//Object -> Entries-> key -> Values

let fruits2 = {name:"Orange",type:"Bitter"}
for(const [key,value] of Object.entries(fruits2)){
    console.log(key);
    console.log(value);
    console.log(key,value);
}
for(const res in fruits2){
    console.log(res)
}
for(const key in Object.values(fruits2)){
    console.log(key)
}

let fruits3 = [{name:"Ajay",age:25},{name:"Mani",age:35}];
for(const key of fruits3){
    console.log(key);
}
for(const index in fruits3){
    console.log(index)
}
//object->entries
for(const value of Object.entries(fruits3)){
    console.log(value)
}
for(const value of Object.values(fruits3)){
    console.log(value)
}
let res6 =fruits3.filter((ele) => {
    if(ele.age>25) {
        return ele.name
    }
})
console.log(res6)