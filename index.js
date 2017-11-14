
function getFirstSelector(selector){
 return document.querySelector(selector)
}

//works but wrong
// function nestedTarget(value){
//   return document.querySelector('#nested .target')
// }
//
//  //dont work
// function nestedTarget(value){
//   return document.querySelector(`#nested ${value}`)
// }
// //dont work
// function nestedTarget(value){
//   var class0 = '#nested';
//   return document.querySelector('${class0} ${value}')
// }
//dont work
function nestedTarget(value){
  var class0 = '#nested';
  return document.querySelector(`${class0} ${value}`)
}
