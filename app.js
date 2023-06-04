// Traversing the DOM


// parentElement
// var itemList=document.querySelector('#items');
// console.log(itemList.parent);
// itemList.parentElement.style.backgroundColor='blue';
// console.log(itemList.parentElement.parentElement.parentElement);

// lastelementchild
// var itemList=document.querySelector('#items');
// console.log(itemList.lastElementChild)

// lastchild
// var itemList=document.querySelector('#items');
// console.log(itemList.lastChild);

// firstelementchild
// var itemList=document.querySelector('#items');
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello 1";

// firstchild
// var itemList=document.querySelector('#items');
// console.log(itemList.firstChild);


// nextsibling
// var itemList=document.querySelector('#items');
// console.log(itemList.nextSibling);


// nextElementsibling
// var itemList=document.querySelector('#items');
// console.log(itemList.nextElementSibling);


// previoussibling
// var itemList=document.querySelector('#items');
// console.log(itemList.previousSibling);


// previouselementsibling
// var itemList=document.querySelector('#items');
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';


// createElement
// create a div

// var newDiv = document.createElement('div');
// console.log(newDiv);


// //setAttribute error
// var newDiv =document.createElement('div');

// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello div');
// console.log(newDiv);


// //createtextnode
// var newDivText = document.createTextNode('Hello world');
// console.log(newDivText);


// //appendchild

var newDiv =document.createElement('div');

newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','hello div');

var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

console.log(newDiv);

