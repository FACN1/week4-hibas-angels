function getWords(searchTerm, wordList, maxResults) {
  if (searchTerm === ''){
    return [];
  }
  var searchTermLowerCase = searchTerm.toLowerCase();

  var searchResults = wordList.filter(function(word) {
    return word.startsWith(searchTermLowerCase);
  });

  return searchResults.slice(0, maxResults);
}

module.exports = {
  getWords : getWords
}
