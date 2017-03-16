function getWords(searchTerm, wordList, maxResults) {
  var searchResults = []
  if (searchTerm === ''){
    return searchResults;
  }
  var searchTermLowerCase = searchTerm.toLowerCase();

  for (var i = 0, n = wordList.length; i < n; i++) {
    var word = wordList[i];
    if (maxResults && searchResults.length === maxResults) {
      break;
    }
    if (word.startsWith(searchTermLowerCase)){
      searchResults.push(word);
    }
  };

  return searchResults;
}

module.exports = {
  getWords : getWords
}
