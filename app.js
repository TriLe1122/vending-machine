
export class Snack {
  // better not to hard code values
  // name = 'mick'
  // score = 0
  // 
  // let values be created on Player Creation
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  addSnack() {
    this.quantity++
    console.log(this.name, this.price)
  }

  get Template() {
    return `
    <div class="col-md-6 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">${this.price}</h3>
      <h3 class="text-warning">${this.quantity}</h3>
      <button class="btn btn-primary w-100" onclick="app.playersController.addSnack('${this.name}')">+</button>
    </div>
    `
  }

}
















































// let money = 100

// const items = [
//   {
//     name: "Doritos",
//     type: "active",
//     cost: 2,
//     quantity: 0,
//   },
//   {
//     name: "Twinkies",
//     type: "active",
//     cost: 1.50,
//     quantity: 0,
//   },
//   {
//     name: "Snickers",
//     type: "passive",
//     cost: 2.25,
//     quantity: 0,
//   },
//   {
//     name: "Gatorade",
//     type: "passive",
//     cost: 50,
//     quantity: 0,
//   },
// ]

// // constructor(name, quantity, price) {
// //   this.name = name
// //   this.quantity = quantity
// //   this.price = price
// // }


// function addItem() {
//   drawSnacks()
// }

// function draw() {
//   document.getElementById('money-total').innerHTML = money
// }




// function drawSnacks() {
//   let players = items.name
//   let template = ''
//   items.forEach(p => {
//     template += `
//       <div class="col-md-6 text-center p-2 bg-light elevation-2">
//         <h3>${p.name}</h3>
//         <h3 class="text-warning">${p.cost}</h3>
//         <button class="btn btn-primary w-100" onclick="app.playersController.scorePoint('${p.quantity}')">+</button>
//       </div>
//       `
//   })
//   document.getElementById('players').innerHTML = template
// }
