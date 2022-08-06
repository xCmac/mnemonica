import { TestBed } from '@angular/core/testing';

import { MnemonicaService } from './mnemonica.service';

describe('MnemonicaService', () => {
  let service: MnemonicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MnemonicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
