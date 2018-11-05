import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.sass']
})
export class BatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.normal();
    this.batch();
  }

  normal() {
    const num = 20;
    const list = document.querySelector('ul.mass');

    list.innerHTML = '';
    for (let i = 0; i < num; i++) {
      let item;
      item = document.createElement('li');
      item.appendChild(document.createTextNode('Option' + i));
      list.appendChild(item);
    }
  }

  batch() {
    const items = [];
    const list = document.querySelector('ul.mass');
    const fragment = document.createDocumentFragment();
    items.length = 20;

    let item;
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      item = document.createElement('li');
      item.appendChild(document.createTextNode('Option' + i));
      fragment.appendChild(item);
    }
    list.appendChild(fragment); // only one time layout
  }

}
