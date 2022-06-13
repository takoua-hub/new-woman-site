import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'womanSite';
  public url: string = "";

  event$

  constructor(private router: Router) {

    this.event$=this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                this.url=event.url;
              }
            });
  }

  ngOnInit(): void {

    window.addEventListener('scroll', function(){
      const header =document.querySelector('header');
      header!.classList.toggle("sticky", window.scrollY > (window.innerHeight-90));
      header!.classList.toggle("sticky2", window.scrollY >0 && window.scrollY <(window.innerHeight-90));
    });
  }


  ngOnDestroy() {
    this.event$.unsubscribe();
  }

}
