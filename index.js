// // first q1
// var itemsArray = [
//     {name:'juice',price:'50',quantity:'3'},
//     {name:'cookie',price:'30',quantity:'9'},
//     {name:'shirt',price:'880',quantity:'1'},
//     {name:'pen',price:'100',quantity:'2'}
// ]

// var each_item = document.getElementById('eachItem') 
// var total_item = document.getElementById('totalItems')
// var totalPrice = 0;
// for(var i =0; i < itemsArray.length;i++){
// // debugger

//     var totalPriceEachItem =itemsArray[i].price * itemsArray[i].quantity 
//     totalPrice += totalPriceEachItem
//     console.log(totalPrice)
// }

var available = document.getElementById('available')
var obj = {
    name: 'muhammad Irfan',
    email: 'abc@gmail.com',
    password: 'Start@#',
    age: '25',
    city: 'karachi',
    gender: 'male',
    country: 'Pakistan'
}


var ab = prompt().valueOf()
for (var k in obj) {
    if (k === ab) {
        available.innerHTML=`this property is Available..! ${ab}`
        break;
    } else {
        
        available.innerHTML=`Sorry this property is not Available..! ${ab}`
    }

}





