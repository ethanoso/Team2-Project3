txtFileRows = [];
curRowCount = 0;

quizType = "New";
results = [];

resultCount = 0;


document.getElementById('fname').onchange = function(){

  var fl = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By allrows
    var allrows = this.result.split('\n');
    for(var row = 0; row < allrows.length; row++){
      txtFileRows[row] = allrows[row];
      console.log(txtFileRows[row]);
    }
    inStream();
    console.log(quizType);
    console.log(results)
  };
  reader.readAsText(fl);
};

function inStream() {
  // If quiz type is the first thing written in the given text file
  if (txtFileRows[0] == "Quiz Type:") {
    curRowCount++;
    // The next non-empty line should tell us the quiz type
    getNextNonEmptyRow(curRowCount);
    console.log(curRowCount);
    selectQuizType();

    getNextNonEmptyRow(curRowCount);
    console.log(curRowCount);
    // If the next line is Results: the program can continue
    if (txtFileRows[curRowCount] == "Results:") {
      curRowCount++;
      getNextNonEmptyRow(curRowCount);
      console.log(curRowCount);
      setResults();
    }  // End inner if

    console.log(resultCount);
  }  // End outer if

}  // End in stream function

function selectQuizType() {
  // The next line should tell us the quiz type
  if (txtFileRows[curRowCount] == "Rating Scale") {
    console.log("Quiz type is ", txtFileRows[curRowCount]);
    quizType = txtFileRows[curRowCount];
    curRowCount++;
  }  // End inner if
  else {
    console.log("Undefined or mispelled quiz type.");
  }  // End else
}  // end selectQuizType

function setResults() {
  console.log("set result called")
  resultCount = parseInt(txtFileRows[curRowCount]);
  curRowCount++;
  console.log("Result count", resultCount);
  for(var i = 0; i < resultCount; i++) {
    getNextNonEmptyRow(curRowCount);
    console.log("Current row count: ", curRowCount);
    console.log("Result ", i, " is ", txtFileRows[curRowCount])
    results[i] = txtFileRows[curRowCount];
    console.log(results[i]);
    curRowCount++;
  }
}  // End set results



function getNextNonEmptyRow() {
  var tempRowCount = curRowCount;
  while (txtFileRows[tempRowCount].length == 0) {
    tempRowCount++;
  }
  curRowCount = tempRowCount;
  return curRowCount;
}
