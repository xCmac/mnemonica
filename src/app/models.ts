export class Card {
    position: number;
    value: string;
    suit: string;

    constructor(p: number, v: string, s: string) {
        this.position = p;
        this.value = v;
        this.suit = s;
    }

    public Display(): string {
        return this.value+this.suit
    }
}

export class Question {
    answer: Card;
    answers: Card[];
}

export class Game {
    questions: Question[] = [];
    currentQuestion?: Question;
    correctAnswers: Card[] = [];
    incorrectAnswers: Card[] = [];
    isDone: boolean = false;

    constructor() {
    }

    public checkAnswer(userAnswer: Card): void {
        if (this.currentQuestion.answer.position === userAnswer.position && this.currentQuestion.answer.value === userAnswer.value && this.currentQuestion.answer.suit === userAnswer.suit) {
            this.correctAnswers.push(this.currentQuestion.answer);
            console.log("Correct");
        } else {
            this.incorrectAnswers.push(this.currentQuestion.answer);
            console.log("Incorrect");
        }
        this.nextQuestion();
    }

    public nextQuestion(): void {
        const nextQuestion = this.questions.pop();
        if (!nextQuestion) {
            this.isDone = true;
            return;
        }

        this.currentQuestion = nextQuestion;
    }
}
