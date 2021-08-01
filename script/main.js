var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome my friend, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else {
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Welcome our new friend, ' + myName;
    }
}
