// Exercise 1 : Information

// Part I : function with no parameters

let about = {
    firstname : "MEMEL",
    lastname: "Henri Martin",
    age: 25,
    hobbies : {
        hobby1 : "Sport",
        hobby2 : "Read",
        hobby3 : "discovery"
    }
};

function infoAboutMe(){
    console.log(`Hello, i'm ${about.firstname} ${about.lastname} ${about.age} years old.`);
    console.log(`My hobbies are ${about.hobbies.hobby1}, ${about.hobbies.hobby2}, ${about.hobbies.hobby3}`);
}
infoAboutMe();

// Part II : function with three parameters

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, your are ${personAge}, you favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips

function calculateTip(str) {
    let money = str.split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    console.log(money);
    let tip = [];
    for (let i in money) {
        if (money[i] < 50) {
            tip.push(money[i]*0.2);
            money[i] += tip[i];
        }
        else if (money[i] < 200) {
            tip.push(money[i]*0.15);
            money[i] += tip[i];
        }
        else {
            tip.push(money[i]*0.1);
            money[i] += tip[i];
        }
    }
    return {money, tip};
}

console.log(calculateTip(prompt("Enter bills separated by spaces")));



// Exercise 3 : Find The Numbers Divisible By 23


function isDivisible() {
    let array = [];
    for (let i = 0; i < 100; i+=1) {
    if (i%23 === 0){
      array.push(i);
    }
    }
    return array;
}

isDivisible()


// Exercise 4 : Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
function adjustStock(item){
    stock[item] -= 1;
}

function myBill(shoppingList){
    let total = 0;
    for(let item of shoppingList){
        if(stock[item] > 0){
            total += prices[item];
            adjustStock(item);
        }
    }
    return total;
}

console.log(myBill(shoppingList));



// Exercise 5 : What’s In My Wallet ?

function changeEnough(money, total) {
    let check = 0;
    let worth = [.25, .10, .05, .01];
    for (let i = 0; i < money.length; i++) {
        check += Number(money[i])*Number(worth[i]);
    }
    if (check > total) {
        return true;
    }
    return false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));


// Exercise 6 : Vacations Costs

function hotel_cost(){
    let numNights;
    do {
          numNights = prompt('How many nights at the hotel?');
      } while (numNights == "" || null || undefined || isNaN(numNights));
    return 140 * numNights;
  }
  
  function plane_ride_cost(){
      let destination;
      do {
          destination = prompt('What is your destination?');
      } while (destination == "" || null || undefined || !isNaN(destination));
  
      switch(destination){
          case "London":
              return 183;
              break;
          case "Paris":
              return 220;
              break;
          default :
              return 300;
              break;
      }
  }
  
  function rental_car_cost(){
    let numDays;
    do {
          numDays = prompt('How many days of rental?');
      } while (numDays == "" || null || undefined || isNaN(numDays));
      if(numDays > 10){
          return (40 * numDays) * 0.95;
      } else {
          return 40 * numDays;
      }
  }
  
  function total_vacation_cost(){
      return hotel_cost() + plane_ride_cost() + rental_car_cost();
  }
  
  let totalCost = total_vacation_cost()
  console.log(totalCost)


  