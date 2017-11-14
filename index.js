
function getFirstSelector(selector){
 return document.querySelector(selector)
}

// function nestedTarget(value){
//   return document.querySelector(#nested ${value})
// }

function nestedTarget(value){
  var class0 = '#nested';
  return document.querySelector('${class0} ${value}')
}
