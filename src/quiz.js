import question from "./question.js"

export class quiz {
  constructor(type, fsRows, curRowIndex) {
    this.type = type;
    this.fsRows = fsRows;

    this.curRowIndex = curRowIndex;

    this.results = [];
    this.resultCount = 0;

    this.resultAttributeRating = [];

    this.attributes = [];
    this.attributeCount = 0;

    this.questions = [];
    this.questionCount = 0;

    this.optionCount = 0;
    this.options = [];


    readResults(resultCount); {
      this.resultCount = resultCount;
      curRowIndex++;
      getNextNonEmptyRow(curRowIndex);
      for (var i = 0; i < resultCount; i++) {
        this.results[i] = fsRows[curRowIndex];
        curRowIndex++;
        getNextNonEmptyRow(curRowIndex);
      }
    }  // End readResults

    readAttributes(attributeCount); {
      this.attributeCount = attributeCount;
      curRowIndex++;
      getNextNonEmptyRow(curRowIndex);
      for (var i = 0; i < attributeCount; i++) {
        this.attributes[i] = this.fsRows[curRowIndex];
        this.curRowIndex++;
        getNextNonEmptyRow(this.curRowIndex);
      }  // End for
    }  // End readAttributes

    readResultAttributeRatings(); {
      curRowIndex++;
      getNextNonEmptyRow(curRowIndex);
      for(var i = 0; i < resultCount; i++) {
        this.resultAttributeRating[i] = this.fsRows[curRowIndex];
        this.curRowIndex++;
        getNextNonEmptyRow(this.curRowIndex);
      }  // End for
    }  // end readResultAttributeRatings

    readQuestions(questionCount); {
      this.questionCount = questionCount;
      curRowIndex++;
      getNextNonEmptyRow(curRowIndex);
      for(var i = 0; i < questionCount; i++) {
        this.questions[i] = this.fsRows[curRowIndex];
        this.curRowIndex++;
        getNextNonEmptyRow(this.curRowIndex);
      }  // End for
    }  // End readQuestions

    readOptions(optionCount); {
      this.optionCount = optionCount;
      curRowIndex++;
      getNextNonEmptyRow(curRowIndex);
      for(var i = 0; i < optionCount; i++) {
        this.options[i] = this.fsRows[curRowIndex];
        this.curRowIndex++;
        getNextNonEmptyRow(this.curRowIndex);
      }  // End for
    }  // End read options

    getNextNonEmptyRow(); {
      var i = curRowIndex;
      while (fsRows[i].length == 0) {
        i++;
      }
      curRowIndex = i;
      return curRowIndex;
    } // end getNextNonEmptyRow

  }  // End quiz constructor
}  // End quiz class

export class ratingScale extends quiz {
  constructor(type, fsRows, curRowIndex) {
    super(type, fsRows, curRowIndex);
    this.options = [];
    makeQuiz();
  }  // End constructor
  readResults(resultCount) {
    super.readResults(resultCount);
  }
  readAttribute(attributeCount) {
    super.readAttribute(attributeCount);
  }
  readResultAttributeRatings() {
    super.readResultAttributeRatings();
  }
  readQuestions(questionCount) {
    super.readQuestions(questionCount);
  }
  readOptions(optionCount) {
    super.readOptions(optionCount);
  }
  getNextNonEmptyRow() {
    super.getNextNonEmptyRow();
  }

  makeQuiz() {
    // Start on the next non-empty line of text
    getNextNonEmptyRow();

    // Results are listed first for a rating scale quiz
    if (this.fsRows[this.curRowIndex] == "Results:") {
      this.curRowIndex++;
      getNextNonEmptyRow();
      console.log(curRowIndex);
      this.resultCount = parseInt(this.fsRows[curRowIndex]);
      readResults(this.resultCount);
      this.curRowIndex++;
      getNextNonEmptyRow();
    }  // End inner if
    else {
      console.log("Results should be the first thing listed after your quiz type");
    }  // End else

    // Options are listed second for a rating scale quiz (all questions have same options)
    if (this.fsRows[this.curRowIndex] == "Options:") {
      this.curRowIndex++;
      getNextNonEmptyRow();
      console.log(curRowIndex);
      this.optionCount = parseInt(this.fsRows[curRowIndex]);
      readOptions(this.optionCount);
      this.curRowIndex++;
      getNextNonEmptyRow();
    }  // end if
    else {
      console.log("Options should be the next thing listed after results");
    }  // end else

    // Attributes are listed third for a rating scale quiz
    if (this.fsRows[this.curRowIndex] == "Attributes:") {
      this.curRowIndex++;
      getNextNonEmptyRow();
      console.log(curRowIndex);
      this.attributeCount = parseInt(this.fsRows[curRowIndex]);
      readOptions(this.optionCount);
      this.curRowIndex++;
      getNextNonEmptyRow();
    }  // end if
    else {
      console.log("Attributes should be the next things listed after results");
    }  // end else

    // Result attribute ratings are listed afer attributes for a rating scale quiz
    // Attributes are listed third for a rating scale quiz
    if (this.fsRows[this.curRowIndex] == "Result Attribue Ratings:") {
      this.curRowIndex++;
      getNextNonEmptyRow();
      console.log(curRowIndex);
      readResultAttributeRatings()
      this.curRowIndex++;
      getNextNonEmptyRow();
    }  // end if
    else {
      console.log("Result attribute ratings should be the next thing listed after reults");
    }  // end else

    // Questions are listed last for a rating scale quiz
    if (this.fsRows[this.curRowIndex] == "Questions:") {
      // Construct a question object for each question
      for (var i = 0; i < this.questionCount; i++) {
        this.curRowIndex++;
        getNextNonEmptyRow();
        console.log(curRowIndex);
        addQuestion(this.fsRows[curRowIndex], i);
      }  // End for
      this.curRowIndex++;
      getNextNonEmptyRow();
    }  // end if
    else {
      console.log("Questions should be the last thing listed after Result Attribute Ratings");
    }  // end else
  }  // End makeQuiz

  addQuestion(prompt, questionIndex) {
    questions[questionIndex] = question("Rating Scale:", prompt, this.options);
  }  // End addQuestion

}  // End subclass ratingScale
