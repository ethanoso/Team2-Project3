document.getElementById('fname').onchange = function(){

  var fl = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By allrows
    var allrows = this.result.split('\n');
    for(var row = 0; row < allrows.length; row++){
      console.log(allrows[row]);
    }
  };
  reader.readAsText(fl);
};
