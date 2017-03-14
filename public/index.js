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

function render(error, response) {
  if (error) {
    console.log(error);
    return;
  }

  // empty ul element
  var ul = document.getElementById('word-list');
  ul.innerHTML = '';

  // create elements and add words
  response.map(function(word) {
    var list = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = word;
    list.appendChild(span);
    ul.appendChild(list);
  });
}
