function makeRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatsechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', url);
  xhr.send();
}
