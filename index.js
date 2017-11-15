
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

  return (list[0].children[0].children[0].children[0].innerHTML).trim(); //complicate one.
//  return  document.querySelector('#grand-node div div div div').innerHTML;  //easy answer I guess
}
