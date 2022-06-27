import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import * as $ from 'jquery';
import { easing } from 'jquery';


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

    var flag=true;

    $(document).ready(function(){
    // Syncronize active menu when scrolling //
      $(window).scroll(function () {
        $('.block').each( function () {
          var ScrollTop = $(window).scrollTop();
          var offsetTop = $(this).offset()?.top;
          if (typeof offsetTop === "undefined") {
            throw new Error(`Expected element`);
          }
          if (ScrollTop) {
            if (ScrollTop > offsetTop) {
              /*  $('.navbar a').removeClass('activelink');
               $('.navbar li a[data-scroll="'+$(this).attr('id') +'"]').addClass('activelink'); */
               console.log(ScrollTop+ '****' + offsetTop);
              if (flag) {
                $('.navbar li a[data-scroll="'+$(this).attr('id') +'"] span:first-child').animate({
                  width: '100%'
                 }, {
                  easing: 'swing',
                  duration:500,
                  complete: function () {
                   $(this).animate({
                    width: 0
                   },100)
                  }
                 });
                flag = false;
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
