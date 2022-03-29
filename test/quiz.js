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
  } // End constructor
} // End class Quiz

export class ratingScale extends quiz {
    constructor(type, fsRows, curRowIndex) {
      super(type, fsRows, curRowIndex);
      this.options = [];
      makeQuiz();
    }  // End constructor
} // End class ratingScale