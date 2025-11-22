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

function result(students){
    for(let i=0;i<students.length;i++){
        const total = totalScore(students[i])
        let degree ="No Degree failed"

        for(let j=0;j<limits.length;j++){
            if(total >=limits[j]){
                degree = degrees[j];
            }
        }
        console.log(`${students[i].name} total:${total} degree: ${degree}`)
    }

}
result(students)