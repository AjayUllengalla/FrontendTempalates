let mapData = new Map();

mapData.set(1,"Ajay");
mapData.set("Age",19);
console.log(mapData)
mapData.set("city","Hyd")
console.log(mapData)

console.log(mapData.keys())
console.log(mapData.values())

function values(mapData){

    let [,age]=mapData.values();
    return age
}
console.log(values(mapData))

console.log(mapData.size)
let arry = {name: "Ajju",age:22}
mapData.set("newperson",arry)
console.log(mapData)

//Array of Object pushing in Map
let employee = [
    {name: "Raj", basic: 30000, hra: 5000},
    {name: "Ajay", basic: 35000, hra: 6000} 
];

mapData.set("Employees",employee)
console.log(mapData)
console.log(mapData.get("Employees"))