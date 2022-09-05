import { Injectable } from '@angular/core';
import { Card } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MnemonicaService {

  constructor() { }

  private mnemonicaStack: Card[] = [
                                      new Card(1, "4" ,"♣"),
                                      new Card(2, "2" ,"♥"),
                                      new Card(3, "7" ,"♦"),
                                      new Card(4, "3" ,"♣"),
                                      new Card(5, "4" ,"♥"),
                                      new Card(6, "6" ,"♦"),
                                      new Card(7, "A" ,"♠"),
                                      new Card(8, "5" ,"♥"),
                                      new Card(9, "9" ,"♠"),
                                      new Card(10, "2" ,"♠"),
                                      new Card(11, "Q" ,"♥"),
                                      new Card(12, "3" ,"♦"),
                                      new Card(13, "Q" ,"♣"),
                                      new Card(14, "8" ,"♥"),
                                      new Card(15, "6" ,"♠"),
                                      new Card(16, "5" ,"♠"),
                                      new Card(17, "9" ,"♥"),
                                      new Card(18, "K" ,"♣"),
                                      new Card(19, "2" ,"♦"),
                                      new Card(20, "J" ,"♥"),
                                      new Card(21, "3" ,"♠"),
                                      new Card(22, "8" ,"♠"),
                                      new Card(23, "6" ,"♥"),
                                      new Card(24, "10" ,"♣"),
                                      new Card(25, "5" ,"♦"),
                                      new Card(26, "K" ,"♦"),
                                      new Card(27, "2" ,"♣"),
                                      new Card(28, "3" ,"♥"),
                                      new Card(29, "8" ,"♦"),
                                      new Card(30, "5" ,"♣"),
                                      new Card(31, "K" ,"♠"),
                                      new Card(32, "J" ,"♦"),
                                      new Card(33, "8" ,"♣"),
                                      new Card(34, "10" ,"♠"),
                                      new Card(35, "K" ,"♥"),
                                      new Card(36, "J" ,"♣"),
                                      new Card(37, "7" ,"♠"),
                                      new Card(38, "10" ,"♥"),
                                      new Card(39, "A" ,"♦"),
                                      new Card(40, "4" ,"♠"),
                                      new Card(41, "7" ,"♥"),
                                      new Card(42, "4" ,"♦"),
                                      new Card(43, "A" ,"♣"),
                                      new Card(44, "9" ,"♣"),
                                      new Card(45, "J" ,"♠"),
                                      new Card(46, "Q" ,"♦"),
                                      new Card(47, "7" ,"♣"),
                                      new Card(48, "Q" ,"♠"),
                                      new Card(49, "10" ,"♦"),
                                      new Card(50, "6" ,"♣"),
                                      new Card(51, "A" ,"♥"),
                                      new Card(52, "9" ,"♦"),
  ];

  public getMnemonicaStack(): Card[] {
    return this.mnemonicaStack;
  }

  public getShuffledMnemonicaStack(): Card[] {
    return this.getShuffled(this.mnemonicaStack);
  }

  public getMenmonicaStackRange(min: number, max: number) {
      return this.getShuffled(this.mnemonicaStack.slice(min, max));
  }

  public getAnswers(currentQuestion): Card[] {
    const wrongAnswer1 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position);
    const wrongAnswer2 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position && c.position !== wrongAnswer1.position);
    const wrongAnswer3 = this.getShuffledMnemonicaStack().find(c => c.position !== currentQuestion.position && c.position !== wrongAnswer1.position && c.position !== wrongAnswer2.position);

    return this.getShuffled([currentQuestion, wrongAnswer1, wrongAnswer2, wrongAnswer3]);
  }

  public getShuffled(array: Card[]): Card[] {
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