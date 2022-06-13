import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cosmetic',
  templateUrl: './cosmetic.component.html',
  styleUrls: ['./cosmetic.component.scss']
})
export class CosmeticComponent implements OnInit {

  cosCategories=[
    {nomc:'Blush', img:'blush.jpg'},
    {nomc:'Bronzer', img:'bronzer.jpg'},
    {nomc:'Eyebrow', img:'eyebrow.jpg'},
    {nomc:'Eyeliner', img:'eyeliner.jpg'},
    {nomc:'Eyeshadow', img:'eyeshadow.jpg'},
    {nomc:'Foundation', img:'foundation.jpeg'},
    {nomc:'Lip Liner', img:'lipliner.jpg'},
    {nomc:'Lipstick', img:'ipstick.jpg'},
    {nomc:'Mascara', img:'mascara.jpg'},
    {nomc:'Nail polish', img:'nail polish.jpg'}
  ];
  constructor() {}

  ngOnInit(): void {

  }



}

