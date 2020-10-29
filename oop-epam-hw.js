// main classes

function Food(name) {
  this.name = name;
  this.price = 0;
  this.callories = 0;
}
Food.prototype.calculateCallories = function () {
  return this.callories;
}
Food.prototype.calculatePrice = function () {
  return this.price;
}

function Hamburger(size, stuffing) {
    Food.call(this, size)
    this.stuffing = stuffing;
    switch (size) {
        case 'small' :
            this.price = Hamburger.SIZE_SMALL.price;
            this.callories= Hamburger.SIZE_SMALL.callories;
            break;
        case 'large' : 
            this.price = Hamburger.SIZE_LARGE.price;
            this.callories= Hamburger.SIZE_LARGE.callories;
            break;
    }
    switch (stuffing) {
        case 'cheese' :
            this.price += Hamburger.STUFFING_CHEESE.price;
            this.callories += Hamburger.STUFFING_CHEESE.callories;
            break;
        case 'salad' : 
            this.price += Hamburger.STUFFING_SALAD.price;
            this.callories += Hamburger.STUFFING_SALAD.callories;
            break;
        case 'potato' : 
            this.price += Hamburger.STUFFING_POTATO.price;
            this.callories+= Hamburger.STUFFING_POTATO.callories;
            break;
    }

}

function Salad(name) {
    Food.call(this, name);
    switch (name) {
        case 'olivier' :
            this.price = Salad.OLIVIER.price;
            this.callories= Salad.OLIVIER.callories;
            break;
        case 'ceasar' : 
            this.price = Salad.CAESAR.price;
            this.callories= Salad.CAESAR.callories;
            break;
    }
    
}

function Drinks() {
    Food.call(this, name);
    switch (name) {
        case 'cola' :
            this.price = Drink.COLA.price;
            this.callories= Drink.COLA.callories;
            break;
        case 'coffee' : 
            this.price = Drink.COFFEE.price;
            this.callories= Drink.COFFEE.callories;
            break;
    }
}

Hamburger.prototype = Object.create(Food.prototype);
Salad.prototype = Object.create(Food.prototype);
Drink.prototype = Object.create(Food.prototype);

/*our menu*/
Hamburger.SIZE_SMALL = { price: 50, callories: 20 };
Hamburger.SIZE_LARGE = { price: 100, callories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, callories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, callories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, callories: 10 };
Salad.OLIVIER = { price: 50, callories: 80 };
Salad.CAESAR = { price: 100, callories: 20 };
Drink.COLA = { price: 50, callories: 40 };
Drink.COFFEE = { price: 80, callories: 20 };


/* order class n proto functions*/
function Order() {
    // ordereditems
    // totalSumPrice
    // totalCallories
}
Order.prototype.add () {}
Order.prototype.show () {}
Order.prototype.delete () {}
Order.prototype.pay () {}
