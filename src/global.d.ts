export {};

declare global {
    interface Card {
        position: number,
        value: string,
        suit: string,
    }

    interface Question {
        answer: Card,
        answers: Card[],
    }

    interface Game {
        questions: Question[],
        currentQuestion?: Question,
        incorrect: Card[],
        correct: Card[],
        isDone: boolean,
    }
}