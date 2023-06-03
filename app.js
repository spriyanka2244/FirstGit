//get elements by tagname
var li =document.getElementsByTagName('li');
li[1].textContent='Hello 5';
li[2].style.fontWeight='bold';
li[4].style.backgroundColor='red';

for(var i=0;i<li.length;i++){
    li[4].style.backgroundColor="red";
}


//editing by getelement by class name 
var items =document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++){
      items[i].style.fontWeight='bold';
  } 

var items1 =document.getElementsByClassName('list-group');
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='yellow';
} 
