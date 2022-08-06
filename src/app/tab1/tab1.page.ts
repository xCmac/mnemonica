import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private mnemonicaService: MnemonicaService) {}

}
