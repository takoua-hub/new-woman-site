import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {

  memes=[];
  constructor() { }

  ngOnInit(): void {
   
  }

}
