import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      /****************add dark mode*****************/
      const darkMode= document.getElementById('dark-mode');
      const header= document.querySelector('header');


      /*************Responsive menu************/
      const navbarMenu = document.querySelector(".navbar");
      const burgerMenu = document.getElementById("burger");
      const bgOverlay = document.querySelector(".overlay");


      darkMode!.addEventListener('change',() => {
        document.body.classList.toggle('dark');
        header!.classList.toggle('headerdark');
      });

      if (burgerMenu && navbarMenu && bgOverlay) {
        
        burgerMenu.addEventListener('click', () => {
          navbarMenu.classList.toggle('is-active')
          bgOverlay.classList.toggle('is-active')
        })

        bgOverlay.addEventListener("click", () => {
          navbarMenu.classList.toggle("is-active");
          bgOverlay.classList.toggle("is-active");
        });
      }

      // Hide Menu when Click the Links
      document.querySelectorAll(".navbar li a").forEach((link) => {
        link.addEventListener("click", () => {
          navbarMenu?.classList.remove("is-active");
          bgOverlay?.classList.remove("is-active");
        });
      });




   }

}
