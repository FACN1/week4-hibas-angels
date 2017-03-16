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

  // empty ul container
  var ulContainer = document.getElementById('word-list-container');
  ulContainer.innerHTML = '';

  // create new ul
  var resultsList = document.createElement('ul');
  resultsList.id = 'word-list';

  // create elements and add words
  wordArray.forEach(function(word) {
    var listItem = document.createElement('li');
    listItem.innerHTML = word;
    resultsList.appendChild(listItem);
  });

  ulContainer.appendChild(resultsList);
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
