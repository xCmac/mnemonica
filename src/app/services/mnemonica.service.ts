import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MnemonicaService {

  constructor() { }

  private mnemonicaStack = [
    {
      position: 1,
      value: "4",
      suit: "♣",
    },
    {
      position: 2,
      value: "2",
      suit: "♥",
	  },
    {
      position: 3,
      value: "7",
      suit: "♦",
	  },
    {
      position: 4,
      value: "3",
      suit: "♣",
    },
    {
      position: 5,
      value: "4",
      suit: "♥",
	  },
    {
      position: 6,
      value: "6",
      suit: "♦",
	  },
  //   {
  //     position: 7,
  //     value: "A",
  //     suit: "♠",
  // 	},
  //   {
  //     position: 8,
  //     value: "5",
  //     suit: "♥",
	//   },
  //   {
  //     position: 9,
  //     value: "9",
  //     suit: "♠",
	// },
  //   {
  //     position: 10,
  //     value: "2",
  //     suit: "♠",
  // 	},
  //   {
  //     position: 11,
  //     value: "Q",
  //     suit: "♥",
	//   },
  //   {
  //     position: 12,
  //     value: "3",
  //     suit: "♦",
  //   },
  //   {
  //     position: 13,
  //     value: "Q",
  //     suit: "♣",
  //   },
    // {
    //   position: 14,
    //   value: "8",
    //   suit: "♥",
    // },
    // {
    //   position: 15,
    //   value: "6",
    //   suit: "♠",
    // },
    // {
    //   position: 16,
    //   value: "5",
    //   suit: "♠",
    // },
    // {
    //   position: 17,
    //   value: "9",
    //   suit: "♥",
    // },
    // {
    //   position: 18,
    //   value: "K",
    //   suit: "♣",
    // },
    // {
    //   position: 19,
    //   value: "2",
    //   suit: "♦",
    // },
    // {
    //   position: 20,
    //   value: "J",
    //   suit: "♥",
    // },
    // {
    //   position: 21,
    //   value: "3",
    //   suit: "♠",
    // },
    // {
    //   position: 22,
    //   value: "8",
    //   suit: "♠",
    // },
    // {
    //   position: 23,
    //   value: "6",
    //   suit: "♥",
    // },
    // {
    //   position: 24,
    //   value: "10",
    //   suit: "♣",
    // },
    // {
    //   position: 25,
    //   value: "5",
    //   suit: "♦",
    // },
    // {
    //   position: 26,
    //   value: "K",
    //   suit: "♦",
    // },
    // {
    //   position: 27,
    //   value: "2",
    //   suit: "♣",
    // },
    // {
    //   position: 28,
    //   value: "3",
    //   suit: "♥",
    // },
    // {
    //   position: 29,
    //   value: "8",
    //   suit: "♦",
    // },
    // {
    //   position: 30,
    //   value: "5",
    //   suit: "♣",
    // },
    // {
    //   position: 31,
    //   value: "K",
    //   suit: "♠",
    // },
    // {
    //   position: 32,
    //   value: "J",
    //   suit: "♦",
    // },
    // {
    //   position: 33,
    //   value: "8",
    //   suit: "♣",
    // },
    // {
    //   position: 34,
    //   value: "10",
    //   suit: "♠",
  	// },
  	// {
    //   position: 35,
    //   value: "K",
    //   suit: "♥",
  	// },
    // {
    //   position: 36,
    //   value: "J",
    //   suit: "♣",
    // },
    // {
    //   position: 37,
    //   value: "7",
    //   suit: "♠",
    // },
    // {
    //   position: 38,
    //   value: "10",
    //   suit: "♥",
    // },
    // {
    //   position: 39,
    //   value: "A",
    //   suit: "♦",
    // },
    // {
    //   position: 40,
    //   value: "4",
    //   suit: "♠",
    // },
    // {
    //   position: 41,
    //   value: "7",
    //   suit: "♥",
    // },
    // {
    //   position: 42,
    //   value: "4",
    //   suit: "♦",
    // },
    // {
    //   position: 43,
    //   value: "A",
    //   suit: "♣",
    // },
    // {
    //   position: 44,
    //   value: "9",
    //   suit: "♣",
    // },
    // {
    //   position: 45,
    //   value: "J",
    //   suit: "♠",
    // },
    // {
    //   position: 46,
    //   value: "Q",
    //   suit: "♦",
	  // },
    // {
    //   position: 47,
    //   value: "7",
    //   suit: "♣",
    // },
    // {
    //   position: 48,
    //   value: "Q",
    //   suit: "♠",
  	// },
    // {
    //   position: 49,
    //   value: "10",
    //   suit: "♦",
    // },
    // {
    //   position: 50,
    //   value: "6",
    //   suit: "♣",
    // },
    // {
    //   position: 51,
    //   value: "A",
    //   suit: "♥",
	  // },
    // {
    //   position: 52,
    //   value: "9",
    //   suit: "♦",
    // },
  ]

  public getMnemonicaStack(): any[] {
    return this.mnemonicaStack;
  }

  public getShuffledMnemonicaStack(): any[] {
    return this.getShuffled(this.mnemonicaStack);
  }

  public getAnswers(currentQuestion): any[] {
    const wrongAnswer1 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position);
    const wrongAnswer2 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position && c.position !== wrongAnswer1.position);
    const wrongAnswer3 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position && c.position !== wrongAnswer1.position && c.position !== wrongAnswer2.position);

    return this.getShuffled([currentQuestion, wrongAnswer1, wrongAnswer2, wrongAnswer3]);
  }

  public getShuffled(array: any[]): any[] {
    let arrayToShuffle = JSON.parse(JSON.stringify(array)); // deep copy
    let currentIndex = arrayToShuffle.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arrayToShuffle[currentIndex], arrayToShuffle[randomIndex]] = [arrayToShuffle[randomIndex], arrayToShuffle[currentIndex]];
    }
  
    return arrayToShuffle;
  }
}