import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import * as $ from 'jquery';


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
    $(document).ready(function(){
    // Syncronize active menu when scrolling //
      $(window).on('scroll',function () {
        var scrollTop = $(window).scrollTop();
        $('.block').each( function () {
          var link = $('.navbar li a[data-scroll="'+$(this).attr('id')+'"] span:first-child');
          var offsetTop = $(this).offset()?.top;
          var blockHeight = $(this).height();
          if (typeof blockHeight === "undefined") {
            throw new Error(`Expected element with id="pdfTable"`);
          }
          if (offsetTop==0 || offsetTop) {
            var offsetBottom = offsetTop + blockHeight;
            if (scrollTop && offsetBottom) {
              if (scrollTop > offsetTop && scrollTop < offsetBottom) {
                $('.navbar li a span:first-child').removeClass('animate-link');
                if (!(link.hasClass('animate-link'))) {
                  link.addClass('animate-link')
                }
              }
            }
          }
        })
      })
    //Add Hover effect for the navbar
    $('.navbar li a').hover(function() {
      $(this).find('span').eq(0).animate({
        width: '100%'
      },500);
    }, function () {
      $(this).find('span').eq(0).animate({
        width: 0
      },500);
    })
  });

  }
  ngOnDestroy() {
    this.event$.unsubscribe();
  }

}
