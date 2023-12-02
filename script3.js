// for(a=1;a<=5;a++){
//     console.log(a**2)
// }

// a=1;
// while(a<=5){
//     console.log(a**2)
//     a++
// // }


// let dishes=[];
// for(a=1;a<=4;a++){
//     fav_dish= prompt("what do you want to eat or press q to quit")
//     if (fav_dish!='q'){
//         dishes.push(fav_dish)
//     }
//     else{
//         break
//     }
    
// }
// console.log(dishes)

// let counter=0;
// while(counter<10){
//     square= counter**2
//     if(square>50){
//         break
//     }
//     else{
//         console.log(square)
//         counter++
//     }
    
// }

dishes=[]
flag =true
while(flag){
    dishname= prompt("Your favourite dish? Or press  q to quit")
    if(dishname!='q'){
    dishes.push(dishname)
    }
    else{
        flag=false
    }
}
console.log(dishes)