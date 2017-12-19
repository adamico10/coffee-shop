
var coffeeShop = {
  beans: 40,
  money: 0,
  beanscost: 2,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 50} ,
    americano: {beanRequirement: 5, price: 22}, 
    doubleShot: {beanRequirement: 15, price: 100},
    frenchPress: {beanRequirement: 12, price: 77}
  },
  buySupplies: function(purchBeans) {
    if(purchBeans > 0) {
      coffeeShop.money = this.money - (purchBeans * beanscost)
    }
  },

  buyDrink: function(drinkType) {
    if (this.drinkRequirements.hasOwnProperty(drinkType)) {
      this.makeDrink(drinkType) 
      this.money = this.money + this.drinkRequirements[drinkType].price;
    }
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements.hasOwnProperty(drinkType) &&
     (this.beans > this.drinkRequirements[drinkType].beanRequirement)) {
      this.beans = this.beans - this.drinkRequirements[drinkType].beanRequirement;
    } else if (this.drinkRequirements.hasOwnProperty(drinkType) && 
    this.beans < this.drinkRequirements[drinkType].beanRequirement) {
       alert("Sorry, we're all out of beans!")
    } else {
      alert("Sorry, we don't make " + drinkType)
    }
  }
}


coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

// buy drinks
/*
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
*/