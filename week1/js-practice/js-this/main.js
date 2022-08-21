
/*
//ex1:
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"


  


  //ex2:
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);




  
  //ex3:
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

  
  //ex4:
  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(amount) {
        this.coinCount-=amount;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

  
  //ex5:
  const revealSecret = function () {
    return this.secret;                 //this added
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!",
    revealItAll: function(){}           //added
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);



  //ex6
  const coffeeShop = {
    beans: 40,
    money: 0,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 3},
      doubleShot: {beanRequirement: 15, price: 7},
      frenchPress: {beanRequirement: 12, price: 6}
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
      if(this.drinkRequirements[drinkType]==undefined){
        alert("Sorry, we don't make " + drinkType)
        return
      }else if(this.beans-this.drinkRequirements[drinkType].beanRequirement<0){
        alert("Sorry, we’re all out of beans!" + "(only " + this.beans + " left!)")
        return
    }else{
        this.beans-= this.drinkRequirements[drinkType].beanRequirement
      }
      console.log(this.beans)
      this.buyDrink(drinkType)
    },

    buyBeans : function(numBeans) {
        this.beans+=numBeans
        this.money-=numBeans*0.2
    },

    buyDrink : function(drinkType){
        this.beans-=this.drinkRequirements[drinkType].beanRequirement
        this.money+=this.drinkRequirements[drinkType].price
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  alert("beans: " + coffeeShop.beans + "\t money: " + coffeeShop.money);
  coffeeShop.makeDrink("americano");
  alert("beans: " + coffeeShop.beans + "\t money: " + coffeeShop.money);
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  alert("beans: " + coffeeShop.beans + "\t money: " + coffeeShop.money);
  coffeeShop.makeDrink("doubleShot");
  alert("beans: " + coffeeShop.beans + "\t money: " + coffeeShop.money);
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  alert("beans: " + coffeeShop.beans + "\t money: " + coffeeShop.money);


  */
  