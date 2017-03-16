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

function render(error, wordArray) {
  // wordArray should be in array of string
  if (error) {
    console.log(error);
    return;
  }

  // empty ul element
  var ul = document.getElementById('word-list');
  ul.innerHTML = '';

  // create elements and add words
  wordArray.forEach(function(word) {
    var listItem = document.createElement('li');
    listItem.innerHTML = word;
    ul.appendChild(listItem);
  });
}

// event listener
var input = document.getElementById('input-box');
input.addEventListener('keyup', function(event) {
  var trimmedInput = input.value.trim();
  if (trimmedInput) {
    var url = '/search?q=' + trimmedInput;
    makeRequest(url, render);
  }else{
    render(null,[]);
  }
});
