var worldButton = document.querySelector('button');

worldButton.onclick = function(){
    getWorld();
}

function getWorld(){
    var requestURL = 'https://luke-tsung.github.io/data/world.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            alert(request);
            request.send();
}
