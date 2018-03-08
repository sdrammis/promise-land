var ShakeShack = require('./shake-shack');

/* Async with Callbacks */

function haveLunch() {
  // Al order's his cheese burger
  console.log('Al orders');
  ShakeShack.makeBurgerCallback('Al', 'cheese', function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });

  // Sue order's her cheese burger
  console.log('Sue orders');
  ShakeShack.makeBurgerCallback('Sue', 'cheese', function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });
}

haveLunch();
