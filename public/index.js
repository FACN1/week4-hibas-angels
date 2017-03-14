function makeRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

// event listener
var input = document.getElementById('input-box');
input.addEventListener('keyup', function(event) {
  var url = '/?word=' + input.value;
  /*makeRequest(url, renderFunction);*/
});
