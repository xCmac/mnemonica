import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  questions: any[];
  currentQuestion = {};
  correct: any[] = [];
  wrong: any[] = [];

  min: number = 1;
  max: number = 52;

  mode: string = 'numbertocard';

  cardHeaderColor: string = "light";
  isDisabled = false;

  constructor(private mnemonicaService: MnemonicaService) {}

  ionViewDidEnter() {
    this.questions = this.mnemonicaService.getShuffledMnemonicaStack();
    console.log(this.questions);

    this.game();
  }

  segmentChanged($event) {
    this.mode = $event.detail.value;
  }

  private game(): void {
    this.isDisabled = false;
    this.cardHeaderColor = "light";
    this.currentQuestion['answer'] = this.questions.pop();
    this.currentQuestion['answers'] = this.mnemonicaService.getAnswers(this.currentQuestion['answer']);

    console.log("Current Question: ", this.currentQuestion);
    console.log(`Correct: ${this.correct.length} | wrong: ${this.wrong.length}`);
  }

  setRangeFromRangeButtons(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  checkAnswer(answer) {
    this.isDisabled = true;
    let correct = this.currentQuestion['answer'];
    
    if(answer.position === correct.position ||
        answer.value === correct.value ||
        answer.suit === correct.suit ) {
          this.cardHeaderColor = "success";
          this.correct.push(answer);
    } else {
      this.cardHeaderColor = "danger";
      this.wrong.push(answer);
    }

    setTimeout(()=> this.game(), 500);
  }
}
