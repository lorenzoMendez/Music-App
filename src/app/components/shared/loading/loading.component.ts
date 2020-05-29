import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public faSyncAlt = faSyncAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
