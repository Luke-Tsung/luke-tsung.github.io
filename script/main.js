var worldButton = document.querySelector('button');

worldButton.onclick = function(){
    getWorld();
}

function getWorld(){
    var requestURL = 'data/world.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
}
