
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 20; //does this set Roborto's health - while the variable below sets the health of the rest of the robots?
var enemyAttack = 15;

   // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  while(enemyHealth > 0) {
 
    
    //Asking the player if they want to fight or not
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose")

    console.log(promptFight)

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit? 2 points will be deducted.")

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
      //subtract playerMoney for skipping
      playerMoney = playerMoney - 2;
      }
      //if no (fasle, ask question again by running fight() again
       else {
      window.alert("You need to choose a valid option. Try again!");
      }
    }

    console.log(" Emarie now has " + playerMoney + " health remaining! ");

  }
    
};
   

//fight();

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 20;
  //call fight function with enemy robot
  fight(pickedEnemyName);
}



/*for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}*/






/* //function fight () {
    var playerName = window.prompt("What is your robot's name?");
    
    console.log(playerName);

   // fight();

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log((10 + 10) * 100 - 15);
// what is this?
console.log("Our robot's name is " + playerName); */