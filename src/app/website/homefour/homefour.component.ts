import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// import AOS from 'aos';

import * as AOS from 'aos';

@Component({
  selector: 'app-homefour',
  imports: [RouterModule, CommonModule],
  templateUrl: './homefour.component.html',
  styleUrl: './homefour.component.css'
})
export class HomefourComponent implements OnInit, AfterViewInit {
  // text: string = 'Redefining Digital Transformation';
  // characters: string[] = [];


  zhuriontext: string = 'ZHURION';
  letters: string[] = [];


  fullText: string = 'Redefining Digital Transformation';
  // fullText: string = 'From Signature Code to Breakthrough Tech. Driven by Precision. We’re a team of seasoned Tech Alchemists turning bold ideas into high-performance digital products. From backend architecture to killer UI, we do it all — fast, clean, and aligned with your mission. No fluff. No friction. Just firepower.'
  displayText: string = '';
  index: number = 0;
  showCursor: boolean = true;



  

  isScrolled = false;

  activeSection: string = '';



  
ngOnInit(): void {
  this.activeSection = 'home'
  AOS.init();
  this.letters = this.zhuriontext.split('');
  this.typeText();
  // ✅ Trigger scroll logic once after DOM is loaded
  setTimeout(() => this.onScroll(), 0);
}

typeText(): void {
  if (this.index < this.fullText.length) {
    this.displayText += this.fullText[this.index];
    this.index++;
    setTimeout(() => this.typeText(), 120); // Typing speed
  } else {
    // Pause before restarting
    setTimeout(() => {
      this.displayText = '';
      this.index = 0;
      this.showCursor = true;
      this.typeText(); // Restart typing
    }, 2000); // Delay before retyping
  }
}

typeTextold(): void {
  if (this.index < this.fullText.length) {
    this.displayText += this.fullText[this.index];
    this.index++;
    setTimeout(() => this.typeText(), 120); // typing speed
  } else {
    // hide cursor after 1 second
    setTimeout(() => this.showCursor = false, 500);
  }
}
// @HostListener('window:scroll', [])
// onScroll(): void {
//   this.isScrolled = window.scrollY > 50;

//   const sections = ['home', 'about', 'services', 'contact'];
//   sections.forEach((section) => {
//     const el = document.getElementById(section);
//     if (el) {
//       const rect = el.getBoundingClientRect();
      
//       if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//         this.activeSection = section;
//       }
//     }
//   });
// }
  currentYear: number = new Date().getFullYear();


@HostListener('window:scroll', [])
onScroll(): void {
  // Background transition
  this.isScrolled = window.scrollY > 50;

  // ScrollSpy logic for active section detection
  const sections = ['home', 'about', 'services', 'contact'];

  // Detect the scroll position and update the active section
  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();

      // If section is within the viewport, set it as active
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        this.activeSection = section;
      }
    }
  });

  // Special case for when the user scrolls back to the top
  if (window.scrollY <= 50) {
    this.activeSection = 'home';
  }
}


  ngAfterViewInit(): void {
    console.log("Initializing AOS...");
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      console.log("Refreshing AOS...");
      AOS.refresh();
    }, 500);
  }
}
