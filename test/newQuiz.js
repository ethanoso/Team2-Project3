import ratingScale from "./quiz.js";

txtFileRows = [];
curRowCount = 0;

quizType = "New";
results = [];

resultCount = 0;

quizCount = 0;
quizzes = [];

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