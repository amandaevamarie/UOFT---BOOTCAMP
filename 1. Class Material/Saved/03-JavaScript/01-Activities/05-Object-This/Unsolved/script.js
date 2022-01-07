// TODO: What is `this` referring to here? - browser window - window DOM "Window"
console.log(this); 

// TODO: What is `this` referring to here? Window
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console? Child - 20
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console? Invesment is the parent object
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console

helloThis();

child.ageTenYears();

investor.investment.investmentGrowth();