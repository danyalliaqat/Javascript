// present_days= prompt("Enter the number of days student present");

// percentage_of_attendance = present_days / 120*100;

// if(percentage_of_attendance >= 70){
//     let fee =prompt("Have you paid your exam fee")
//     if(fee== 'yes'){
//         let time = prompt("Have you reached on time");
//         if(time == 'yes'){
//             alert("You can sit in exam");
//         }
//         else{
//             alert("You are late not allowed")
//         }
//     }
//     else{
//         alert("Fee is not paid");
//     }
// } 
// else{
//     alert("Not Eligable for Exam");
// }


// Arrays: Collection of values
let students = ['danyal','abdullah', 'Elahi', 'Haris', 'Ahsen'];
//indices/index:  0       1          2        3         4
// alert(students[1]);
// alert(students[4]);
// alert(students[0]);
// console.log(students[0].length);
// console.log(students[0].toUpperCase());
// console.log(students.concat(['asad', 'zeeshan']));
students.push('tahir','ahmed','saddam');
console.log(students);
// students.pop();
// console.log(students);
// //students.pop(students[1])
// students[6]='alam';
// students.shift();
// students.unshift('danyal','quaid');
// console.log(students);
// students.splice(2,2,'A','B');
// students.splice(3,4,'A','B');
// // //splice function()=> (Start number=remain same, delete number= remove elements, Add elements after the start number)
// console.log(students);
let slice_students = students.slice(3,5);
console.log(slice_students);
console.log(students);
console.log(students[0][4]);
