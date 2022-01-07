// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
// Don't make Globals for everything - it will get confusing to you down the road 

var shout = "Shout!"; //answer

function justShout() {
  console.log(shout + ', ' + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function

function sayLions() {
  var animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  var animal = 'Tigers' //answer
  console.log('and ' + animal + ' and ');
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
var bears = 'Bears';

function sayBears() {
  //var bears = 'Pandas'; //answer
  console.log(bears + '! OH MY!');
  return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

var sing = 'Sing';

function singAlong() {
  var sing = 'Sing'; //answer
  console.log(sing + ',');
  var singASong = function() {
    console.log(sing + ' a Song.');
  };
  singASong();
}

singAlong();
