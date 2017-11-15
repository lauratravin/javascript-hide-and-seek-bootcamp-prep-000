
function getFirstSelector(selector){
 return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i < list.length ; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
   const list = document.querySelectorAll('div#grand-node');
   var a = list[0];
    for (i=0 ; i<5; i++){
         a = a + .children[0];
          }
    return a;      
}
