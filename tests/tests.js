var test = require('tape');

function getWords(searchTerm, wordList, maxResults) {
  var newArr = []
  if (searchTerm === ''){
    return newArr;
  }
  searchTerm = searchTerm.toLowerCase();

  for (var i = 0, n = wordList.length; i < n; i++) {
    var word = wordList[i];
    if (maxResults && newArr.length === maxResults) {
      break;
    }
    if (word.startsWith(searchTerm)){
        newArr.push(word);
    }
  };

  return newArr;
}

test('Check tape is working with a simple passing test', function(t) {
  t.pass('a message to print on succes');
  t.end();
});

test('check get the words started in letter hhh',function(t){
  wordList = ["animal","bat","hello"];
  searchTerm = "hhh";
  t.deepEqual(
    getWords(searchTerm, wordList),
    [],
    'should return []'
  );
  t.end()
});

test('check get the words started in letter a',function(t){
  wordList = ["animal","bat","hello"];
  searchTerm = "a";
  t.deepEqual(
    getWords(searchTerm, wordList, 10),
    ['animal'],
    'should return ["animal"]'
  );
  t.end()
});

test('check get the words started in letter a',function(t){
  wordList = ["animal","apple","hello"];
  searchTerm = "a";
  t.deepEqual(
    getWords(searchTerm, wordList, 10),
    ['animal','apple'],
    'should return ["animal","apple"]'
  );
  t.end()
});

test('check get the words started in letter b',function(t){
  wordList = ["animal","apple","hello","banana"];
  searchTerm = "b";
  t.deepEqual(
    getWords(searchTerm, wordList, 10),
    ['banana'],
    'should return ["banana"]'
  );
  t.end()
});

test('check get the words started in letter B',function(t){
  wordList = ["animal","apple","hello","banana"];
  searchTerm = "B";
  t.deepEqual(
    getWords(searchTerm, wordList, 10),
    ['banana'],
    'should return ["banana"]'
  );
  t.end()
});

test('check the function returns no words when the input is an empty string',function(t){
  wordList = ["animal","apple","hello","banana"];
  searchTerm = "";
  t.deepEqual(
    getWords(searchTerm, wordList, 10),
    [],
    'should return []'
  );
  t.end()
});

test('check the function returns maximum 2 words',function(t){
  wordList = ["animal","apple","hello","banana","arabic"];
  searchTerm = "a";
  t.deepEqual(
    getWords(searchTerm, wordList ,2),
    ["animal","apple"],
    'should return ["animal","apple"]'
  );
  t.end()
});
