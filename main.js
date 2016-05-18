/*
  Please read all of the instructions for the exercise in the README.md.
*/

var pages = [
  // Your Code Here
  'home', 'about', 'contact'
];

var items = document.getElementsByClassName('nav-item');
var contentContainers = document.getElementsByClassName('content-container');
var navHeading = document.getElementsByClassName('nav-heading');

var name = window.prompt('What is your name?');

function each (list, callback) {
  // TODO: your code here
  for (var i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}

function onShowClick (e) {
  for (var i = 0; i < contentContainers.length; i++) {
    contentContainers[i].className = 'content-container';
  }
  var contentNode = document.getElementById(e.target.childNodes[0].data);
  contentNode.className = contentNode.className + ' active';
};

function addClick (item) {
  item.addEventListener('click', onShowClick);
};

function addContentContainer (page) {
  var newDiv = document.createElement('div');
  newDiv.className = 'content-container';
  newDiv.id = page;
  document.getElementById('container').appendChild(newDiv);
};

function addNav (page) {
  var newLi = document.createElement('li');
  newLi.className = 'nav-item';
  newLi.innerHTML = page;
  var ul = document.getElementById('nav-list');
  ul.appendChild(newLi);
};

function addText (el, str) {
  // TODO: your code here
};

function addImg (url, parent) {
  // TODO: your code here
}

navHeading[0].innerHTML = navHeading[0].innerHTML + ' ' + name;
each(pages, addNav);
each(pages, addContentContainer);
each(items, addClick);
addText(pages[0], 'HELLO HELLO HELLO!');
