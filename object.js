// let person = {
//     gender: 'male',
//     age :12,
//     name : 'nasir',
//     qualification: 'phd',
//     contact: '121212'
// }
// console.log(person)

// let laptop = {
//     name : 'Lenovo',
//     Generation: "12",
//     Version : 'h12',
//     ram: "8gb",
//     SSD: '128gb',
//     hardisk: '500gb'

// }
// console.log(laptop)

// // Operations on object=>
// /*      Access properties => one by one 
//                             loop through whole object , 
//         update properties,
//         delete properties,
//         Add properties*/


// // Accessing properties:
// console.log(person.qualification)
// console.log(person.gender)
// console.log(laptop.name)
// console.log(laptop.Generation)
// console.log(laptop['SSD'])

// //Update an object Property:
// person.contact= '76678788'
// laptop.Generation='12th'
// console.log(person)
// console.log(laptop)

// // Delete an object property:
// delete person.contact
// console.log(person)

// // Add a property to an object:
// person.martialStatus= 'Unmarried'
// console.log(person)

// //looping and object properties: 
// // for loop
// for(key in person){
//     if(key!= 'qualification'){
//         console.log(`${key}: ${person[key]}`)
//     }
    
// }

// for(key in laptop){
    
//     console.log(`${key}: ${laptop[key]}`)
// }

let patient1 = {p_id:1, ward:'general',doctor:'Dr.ALi', disease: 'moye moye',age:20}
let patient2 = {p_id:2, ward:'general',doctor:'Dr.ahmed', disease: 'flu',age:20}
let patient3 = {p_id:3, ward:'general',doctor:'Dr.danyal', disease: 'attack',age:34}
let patient4 = {p_id:4, ward:'general',doctor:'Dr.abdullah', disease: 'cancer',age:20}
let patient5= {p_id:5, ward:'general',doctor:'Dr.faizan', disease: 'moye moye',age:23}
let patient6 = {p_id:6, ward:'general',doctor:'Dr.Daruu', disease: 'flu',age:20}
let patient7 = {p_id:7, ward:'general',doctor:'Dr.ahsen', disease: 'moye moye',age:45}
let patient8 = {p_id:8, ward:'general',doctor:'Dr.irfan', disease: 'flu',age:20}
let patient9 = {p_id:9, ward:'general',doctor:'Dr.malik', disease: 'headache',age:20}
let patient10 = {p_id:10, ward:'general',doctor:'Dr.noman', disease: 'moye moye',age:45}

let patient = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10]
//get id of every patient whose disease is flu:
// for(let a=0; a<=patient.length; a++){
//     // console.log(patient[a])
//     for(key in patient[a]){
//         if (key=='disease'){
//             if(patient[a][key]=='moye moye'){
//                 console.log(patient[a]['p_id'])
//             }
//         }
//     }
//     for (key in patient[a]){
//         if(key=='age'){
//             if (patient[a][key]==20){
//                 console.log(patient[a]['disease'])
//             }
//         }
//     }
// }
//who are the doctors for cancer patients
for(let i=0; i<=patient.length; i++){
    for (key in patient[i]){
        if (key == 'disease'){
            if(patient[i][key]=='cancer'){
                console.log(patient[i]['doctor'])
            }
        }
    }
}

//an object can have an array inside it as a key and many more:
let result={
    html: [1,2,3,4,5,5],
    examDate: new Date("12/12/2023"),
    p: patient,

}