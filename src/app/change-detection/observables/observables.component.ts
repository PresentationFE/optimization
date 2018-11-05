import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Profile } from '../profile';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent implements OnInit {
  @Input() items: Observable<number>;
  counter = 0;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck(); // influence the parents/ siblings/ self.etc
      }
    },
    null,
    () => {
      this.changeDetector.markForCheck();
    });
  }

}
