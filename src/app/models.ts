class Card {
    position: number;
    value: string;
    suit: string;

    public ToString(): string {
        return `${this.value}${this.suit}`
    }
}

class Question {
    answer: Card;
    answers: Card[];
}

class Game {
    questions: Question[];
    currentQuestion?: Question;
    correctAnswers: Card[];
    incorrectAnswers: Card[];
    isDone: boolean;

    public checkAnswer(correctAnswer: Card, userAnswer, Card): Question {
        if (correctAnswer.position === userAnswer.position && correctAnswer.value === userAnswer.value && correctAnswer.suit === userAnswer.suit) {
            this.correctAnswers.push(userAnswer);
        } else {
            this.incorrectAnswers.push(userAnswer);
        }

        return this.questions.pop();
    }
}
