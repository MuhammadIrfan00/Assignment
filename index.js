

var itemsArray = [
    { name: 'juice', price: '50', quantity: '3' },
    { name: 'juice', price: '30', quantity: '9' },
    { name: 'juice', price: '880', quantity: '1' },
    { name: 'juice', price: '100', quantity: '2' }
]

var each_item = document.getElementById('eachItem')
var total_items = document.getElementById('totalItems')
var totalPriceOfAllItem = 0
for (var i = 0; i < itemsArray.length; i++) {
    eachItem = parseInt(itemsArray[i].price) * parseInt(itemsArray[i].quantity)
    totalPriceOfAllItem += eachItem
    let node = document.createElement('LI');
    var textNode = document.createTextNode(`Quantity : ${itemsArray[i].quantity} : Each price of item ${itemsArray[i].price} : Total price Of Item : ${eachItem} `);
    node.appendChild(textNode)
    each_item.appendChild(node)

    total_items.innerHTML= `Total Price of All items : ${totalPriceOfAllItem}`
}


var obj = {name:'Irfan',email:'demo@gmail.com',password:'Start123',age:'26',gender:'male',city:'karachi',country:'Pakistan'}



var obj = {
    name: 'muhammad Irfan',
    email: 'abc@gmail.com',
    password: 'Start@#',
    age: '25',
    city: 'karachi',
    gender: 'male',
    country: 'Pakistan'
}


function checkProperty(){

    var ab = prompt().valueOf()
        if (obj[ab]) {
            available.innerHTML=`this property is Available..! ${ab}`
        } else {
            
            available.innerHTML=`Sorry this property is not Available..! ${ab}`
        }
}



class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person = new Person("John Doe", 23);
  
  console.log(`name: ${person.name} , age: ${person.age}`);


