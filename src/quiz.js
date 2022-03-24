txtFileRows = [];
curRow = 0;

quizType = "New";
results = "None";


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
    curRow++;
    // The next line should tell us the quiz type
    if (txtFileRows[1] == "Rating Scale") {
      curRow++;
        console.log("Confirmed");
        quizType = txtFileRows[1];
    }  // End inner if
    // Check the following lines until more text is found
    var tempRow = curRow;
    // While the next line is empty increment to check the next line
    while (txtFileRows[tempRow].length == 0) {
      tempRow++;
    }  // End while
    // If the next line is Results: the program can continue
    if (txtFileRows[tempRow] == "Results:") {
      results = txtFileRows[tempRow];
      curRow = tempRow;
    }  // End inner if


  }  // End outer if

}  // End in stream function
