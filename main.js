var coffeeShop = {
  beans: 40,
  money: 0,
  beanscost: 2,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  
  buySupplies: function(purchBeans) {
    if(purchBeans > 0) {
      coffeeShop.money = this.money - (purchBeans * beanscost)
    }
  },

  buyDrink: function(drinkType) {
    if (drinkType == coffeeShop.drinkRequirements.hasOwnProperty(drinkType)) {
      makeDrink(drinkType) 
    }
  },
  
  makeDrink: function (drinkType) {
    if (coffeeShop.drinkRequirements.hasOwnProperty(drinkType) && (coffeeShop.beans > coffeeShop.drinkRequirements[drinkType])) {
      coffeeShop.beans = this.beans - coffeeShop.drinkRequirements[drinkType];
    } else if (coffeeShop.beans < coffeeShop.drinkRequirements[drinkType]){
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