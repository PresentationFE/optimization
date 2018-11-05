import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflow',
  templateUrl: './reflow.component.html',
  styleUrls: ['./reflow.component.sass']
})
export class ReflowComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.normal();
    this.mass();

    // more advanced example
    this.requestAnimationFrameInstance();
  }

  normal() {
    const ele01: any = document.querySelector('.ele01');
    // Read (triggers layout)
    const h1 = ele01.clientHeight;
    // Write (invalidates layout)
    ele01.style.height = (h1 * 2) + 'px';

    const ele02: any = document.querySelector('.ele02');
    const h2 = ele02.clientHeight;
    ele02.style.height = (h2 * 2) + 'px';

    const ele03: any = document.querySelector('.ele03');
    const h3 = ele03.clientHeight;
    ele03.style.height = (h3 * 2) + 'px';

    const ele04: any = document.querySelector('.ele04');
    const h4 = ele04.clientHeight;
    ele04.style.height = (h4 * 2) + 'px';

    const ele05: any = document.querySelector('.ele05');
    const h5 = ele05.clientHeight;
    ele05.style.height = (h5 * 2) + 'px';
  }

  mass() {
    const ele01: any = document.querySelector('.ele01');
    const ele02: any = document.querySelector('.ele02');
    const ele03: any = document.querySelector('.ele03');

    // Read (triggers layout)
    const h1 = ele01.clientHeight;
    const h2 = ele02.clientHeight;
    const h3 = ele03.clientHeight;

    // Write (invalidates layout)
    ele01.style.height = (h1 * 2) + 'px';
    ele02.style.height = (h2 * 2) + 'px';
    ele03.style.height = (h3 * 2) + 'px';

  }

  requestAnimationFrameInstance() {
    const ele01: any = document.querySelector('.ele01');
    // Read (triggers layout)
    const h1 = ele01.clientHeight;
    // Write (right before invalidated check)
    requestAnimationFrame(function() {
      ele01.style.height = (h1 * 2) + 'px';
    });

    const ele02: any = document.querySelector('.ele02');
    const h2 = ele02.clientHeight;
    requestAnimationFrame(function() {
      ele02.style.height = (h2 * 2) + 'px';
    });

    const ele03: any = document.querySelector('.ele03');
    const h3 = ele03.clientHeight;
    requestAnimationFrame(function() {
      ele03.style.height = (h3 * 2) + 'px';
    });
  }

}
