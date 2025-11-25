// CODING TASK No 1

// 1. Create variables to represent scores of exams for Vamshi and Mahesh and set values   75 and 46;
// 2. Create variable to set the lower limit for passing an exam and assign to it value as 50;
// 3. Write the condition in if statement, which will check if both students have passed an exam and log 
//    the result in console;
// 4. Use else if statement in order to check if one of the students has passed an exam and log the result 
//    in console;
// 5. Use else statement in order to display in console that both students have failed;
// 6. In case of passing the exam by one of the students, find out which one was that and display in console 
//    as an additional information the student name and his points
// 7. Test all the possible cases (a. both students passed; b. Vamshi passed and Mahesh failed; c. Mahesh passed and 
//   Vamshi failed; d. both students failed).
// */

let stud= [ {name:"Vamshi",score:75},{name:"Mahesh",score:47} ]
    let vamshi = 75
    let mahesh = 47
    let limit = 50
    if(vamshi >= limit && mahesh >= limit ){
        console.log("Both Students passesd")
    } else if(vamshi >= limit || mahesh >= limit) {
        console.log("One Student Passed")
    } else {
        console.log("Both Students Failed")
    }
    
 let res = stud.filter((ele)=>{
     if(ele.score>=limit)
     return ele
 })  
 console.log(res)

 console.log()
 
//  //1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
//     with the following values:
//     a. Vamshi, 47, 46
//     b. Mahendra, 23, 24
//     c. Mahesh, 40, 35
//     d. Sanket, 44, 45

// 2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
//     to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees

// 3. Create function which will calculate total score (score1 + score2) for each student.

// 4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student 
//     has passed an exam and what kind of degree he has got.

// 5. Display the final result in console.

 let students = [
    {name:"Vamshi",score1:47,score2:46},
    {name:"Mahendra",score1:23,score2:24},
    {name:"Mahesh",score1:40,score2: 35},
    {name:"sanket",score1:44,score2: 45}
    ];
    

let degrees =['A','B','C','D','E']
let limits = [91,81,71,61,51]

function totalScore(students){
    return students.score1+students.score2;
}

let resultsOfStudents=[]
function result(students){

    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i]);
        let degree = "Failed";

        for(let j=0;j<limits.length;j++){
            if(total>=limits[j]){
                degree = degrees[j]
                break;
            }
        }
        resultsOfStudents.push({name:students[i].name,score:total,degree:degree});
    }
    console.log(resultsOfStudents);
}

result(students);
students.push({ name: "Ravi", score1: 50, score2: 52 });


let highestScore1 =[];
function highestScore(students){
    let temp = totalScore(students[0]);
    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i]);

        if(total > temp){
            highestScore1.push({name:students[i].name,score:total})
            break;
        }
    }
    console.log("The Highest Scored Student:")
    console.log(highestScore1)
}

highestScore(students)

function smallest(students){
    let lowest=[];
    let temp = totalScore(students[0]);
    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i])
        if(total < temp){
            console.log("Lowest Scored Student")
            lowest.push({name:students[i].name,score:total})
            break;
        }
    }
    console.log(lowest);
}
smallest(students);

function degreeGot(students){
    let degreeStuden=[];
    for(let i=0;i<students.length;i++){
        const total =totalScore(students[i])
        let degree = "Failed";

        for(let j=0;j<limits.length;j++){
            if(total>=limits[j]){
                degree = degrees[j]
                break;
            }
        }
        if(degree === 'A' || degree === 'B'){
            degreeStuden.push({name:students[i].name,degreeGot:degree});
        }
    }
    console.log(degreeStuden);
}

degreeGot(students)

function sortedStudents(students){
    let temp =[];

    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i]);
        temp.push({name:students[i].name,score:total})
    }
    let sortedStudent = temp.sort((a,b)=> {
        if(a.score>b.score){
            return -1
        }
    })
    console.log(sortedStudent)
}
sortedStudents(students)

function average(students){
    let averageScore;
    let sum=0;

    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i]);
        sum += total;
    }
    averageScore = sum /students.length;
    console.log("the Average Score:")
    console.log(averageScore)

}
average(students)

// 1. Write a function that calculates total salary = basic + hra + bonus (10% of basic).
// Print total salary for each employee.
// {name: "Raj", basic: 30000, hra: 5000} 
let employee = [
    {name: "Raj", basic: 30000, hra: 5000},
    {name: "Ajay", basic: 35000, hra: 6000} 
];

function totalSalary(employee){
    return employee.basic+employee.hra
}

function employeeSalary(employee){
    let employeeTotalSalary=[];
    for(let i=0;i<employee.length;i++){
        const total = totalSalary(employee[i])
        let bonus = (total*10) /100;
       bonus = total + bonus;
       employeeTotalSalary.push({name:employee[i].name,salary:bonus});
    }
    console.log(employeeTotalSalary)
}
employeeSalary(employee)


// 2. Create a cart array:

// [{item: "Shoes", price: 1200}, {item: "Bag", price: 800}]

// If total > 1500 give 10% discount, else 5%.
// Print final bill.

let itemsCart = [{item: "Shoes", price: 1200}, {item: "Bag", price: 800}]

function totalPrice(itemsCart){
    for(let i=0;i<itemsCart.length;i++){
        return itemsCart[i].price+itemsCart[i+1].price
    }
} 
totalPrice(itemsCart)

function discount(itemsCart){
    let discount=0;
    const total = totalPrice(itemsCart)

    if(total > 1500){
        discount =(total *10)/100;
        discount = total -discount;
    } else {
        discount = (total *5) / 100;
        discount = total -discount;
    }
    console.log("After Discount = "+discount)
}

 discount(itemsCart)

// 3. Each object has:

// {movie: "KGF", seats: 3, pricePerSeat: 150}

// Write a function to calculate total amount per booking.

let bookingDetails = [
            { movie: "KGF", seats: 3, pricePerSeat: 150 },
            { movie: "Veera", seats: 4, pricePerSeat: 100 },
            { movie: "SEE", seats: 5, pricePerSeat: 100 }
        ]

        function totalBill(bookingDetails){
            let total=0;
            for(let i=0;i<bookingDetails.length;i++){
                total =bookingDetails[i].seats*(bookingDetails[i].pricePerSeat)
                console.log("The Amount for Total seats of Movie"+ bookingDetails[i].movie+" amount--> "+total)
            }
        }

    totalBill(bookingDetails)