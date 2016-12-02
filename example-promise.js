// function getTempCallback(location, callback){
// callback(undefined, 78);
// callback('City not found');
// }
//
// getTempCallback('San Fran', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
//
// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('danville').then(function (temp){
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise err', err);
// })

// function addPromise (a, b){
//   return new Promise(function (resolve, reject){
//     if(typeof a === 'number' && typeof b === 'number'){
//       resolve(a + b);
//     } else {
//       reject('One value is not a number');
//     }
//   });
// }
//
// addPromise(4,5).then(function (sum){
//   console.log("success", sum);
// }, function (err){
//   console.log("error", err);
// })
//
// addPromise("nothere",5).then(function (sum){
//   console.log("success", sum);
// }, function (err){
//   console.log("error", err);
//
// });
