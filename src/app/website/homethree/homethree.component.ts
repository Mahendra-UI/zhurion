import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// import AOS from 'aos';

import * as AOS from 'aos';


@Component({
  selector: 'app-homethree',
  imports: [CommonModule, RouterModule],
  templateUrl: './homethree.component.html',
  styleUrl: './homethree.component.css'
})
export class HomethreeComponent implements OnInit, AfterViewInit {

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

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Background transition
    this.isScrolled = window.scrollY > 50;
  
    // ScrollSpy logic
    const sections = ['hero', 'about', 'featured-services', 'services', 'team', 'contact'];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
  
ngOnInit(): void {
  AOS.init();
  this.letters = this.zhuriontext.split('');
  // this.characters = this.text.split('');  setTimeout(() => {
    // setTimeout(() => {
    //   this.letters = this.zhuriontext.split('');
    // }, 0);

  this.typeText();


}


// typeText(): void {
//   if (this.index < this.fullText.length) {
//     this.displayText += this.fullText[this.index];
//     this.index++;
//     setTimeout(() => this.typeText(), 60); // typing speed
//   }
// }
typeText(): void {
  if (this.index < this.fullText.length) {
    this.displayText += this.fullText[this.index];
    this.index++;
    setTimeout(() => this.typeText(), 120); // typing speed
  } else {
    // hide cursor after 1 second
    setTimeout(() => this.showCursor = false, 500);
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

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   this.isScrolled = window.scrollY > 50;
  // }
  

  // activeSection: string = '';

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const sections = ['hero', 'about', 'featured-services', 'services', 'team', 'contact'];
  //   for (let section of sections) {
  //     const el = document.getElementById(section);
  //     if (el) {
  //       const rect = el.getBoundingClientRect();
  //       if (rect.top <= 100 && rect.bottom >= 100) {
  //         this.activeSection = section;
  //         break;
  //       }
  //     }
  //   }
  // }
  // onScroll(): void {
  //   const sections = ['hero', 'about', 'featured-services', 'services', 'contact'];
  //   for (let section of sections) {
  //     const el = document.getElementById(section);
  //     if (el) {
  //       const rect = el.getBoundingClientRect();
  //       if (rect.top <= 100 && rect.bottom >= 100) {
  //         this.activeSection = section;
  //         break;
  //       }
  //     }
  //   }
  // }
}
