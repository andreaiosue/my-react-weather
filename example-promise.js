// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('sucess', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('a and b are not both numbers');
    }
  });
}

addPromise(5, 2).then(function(sum) {
  console.log(sum);
}, function(err) {
  console.log(err);
});

addPromise(5, "2").then(function(sum) {
  console.log(sum);
}, function(err) {
  console.log(err);
});
