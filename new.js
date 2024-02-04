// // const phones = [
// //     {name : "samsung", Price :30000,color:"black" },
// //     {name : "xiomi", Price :50000,color:"black" },
// //     {name : "oppo", Price :30000,color:"black" },
// //     {name : "Iphone", Price :130000,color:"black" },
// //     {name : "samsung", Price :71000,color:"black" }
// // ];
// // // console.log(30000+50000+30000+130000+71000);

// // function get_most_costly(phones){
// //     let max = phones[0];
// //     for(const phone of phones){
// //         if(phone.Price > max.Price){
// //             max = phone;
// //         }
// //     }
// //     return max;
// // }

// // function get_total(phones){
// //     let total = 0;
// //     for(const phone of phones){
// //         total+=phone.Price;
// //     }
// //     return total;
// // }

// // function get_average(phones){
// //     let average;
// //     let sum =0;
// //     for(const phone of phones){
// //         sum+=phone.Price;
// //     }
// //     average = sum/phones.length;
// //     return average;
// // }
// // const avr = get_average(phones);
// // console.log(avr);

// // const solution = get_most_costly(phones);
// // console.log(solution);

// // const total_cost  = get_total(phones);
// // console.log(total_cost);

// //problem 1
// // function get_cube(number){
// //if(typeof number !== 'number'){
// //return "please enter a valid number";
// //}
// //     const solution = number*number*number;
// //     return solution;
// // }
// // const result = get_cube(5);
// // console.log(result);

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },//45000
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },//36000
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },//39000
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },//29000
// ];

// function total(employees){
//     let sum =0;
//     for(const emp of employees){
//         sum = sum + (emp.experience*emp.increment)+ emp.starting;
//     }
//     return sum;
// }

// const solution = total(employees);
// console.log(solution);



