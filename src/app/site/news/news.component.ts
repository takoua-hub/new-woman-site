import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles:any=[];
 // nomc:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   // this.nomc=this.route.snapshot.params.nomc;
    this.getListNews();
  }

  getListNews(){

    const options : any = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {q: 'Elon Musk', lang: 'en'},
      headers: {
        'X-RapidAPI-Key': 'c091874a4cmsh2fa261bc1d9d13bp1b3b7cjsn7ef2a1497dad',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      }
    };
    axios.request(options)
           .then((res) =>{
              this.articles=res.data.articles;
              console.log(this.articles);

              if (this.articles.length>8) {
                this.articles= this.articles.splice(0,8);
              }
           })
           .catch((error: any)=>{
              console.log(error)
           })

  }
}
