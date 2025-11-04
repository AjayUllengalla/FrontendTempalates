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
console.log(user1);
console.log(user2);
console.log(user2.city);
console.log(user1.city);

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
p1.coure = "Msc";
console.log(p1);