import { CommonModule } from '@angular/common';
// import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { CountUpModule } from 'ngx-countup';


@Component({
  selector: 'app-homefive',
  standalone: true,
  imports: [CommonModule, RouterModule, CountUpModule],
  templateUrl: './homefive.component.html',
  styleUrl: './homefive.component.css'
})
export class HomefiveComponent implements OnInit, AfterViewInit {
  // text: string = 'Redefining Digital Transformation';
  // characters: string[] = [];


count = 0;
  target = 30;
  interval: any;

  zhuriontext: string = 'ZHURION';
  letters: string[] = [];


  fullText: string = 'Redefining Digital Transformation';
  // fullText: string = 'From Signature Code to Breakthrough Tech. Driven by Precision. We’re a team of seasoned Tech Alchemists turning bold ideas into high-performance digital products. From backend architecture to killer UI, we do it all — fast, clean, and aligned with your mission. No fluff. No friction. Just firepower.'
  displayText: string = '';
  index: number = 0;
  showCursor: boolean = true;



  

  isScrolled = false;

  activeSection: string = '';

  hasAnimated = false;

  @ViewChild('about', { static: false }) aboutSection!: ElementRef;

  
ngOnInit(): void {
  this.startCountUp();
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
  const sections = ['home', 'about', 'ourexpertise', 'services', 'contact'];

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

startCountUp() {
 const duration = 1000;
    const stepTime = Math.floor(duration / this.target);

    const interval = setInterval(() => {
      this.count++;
      if (this.count >= this.target) {
        clearInterval(interval);
      }
    }, stepTime);
  }

  ngAfterViewInit(): void { 


    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.startCountUp();
        }
      });
    }, { threshold: 0.5 });

    if (this.aboutSection) {
      observer.observe(this.aboutSection.nativeElement);
    }
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

features = [
  { title: 'Fast Delivery Turnaround', description: 'We deliver high-quality applications quickly, helping you launch faster and stay ahead of the curve.' },
  { title: 'Highly Customizable Solutions', description: 'Our apps are designed to be flexible and adaptable, tailored to your business goals, processes, and brand identity.' },
  { title: 'Enterprise-Grade Security', description: 'We embed robust security measures from day one to safeguard data and ensure compliance with the latest standards.' },
  { title: 'Intelligent Automation', description: 'We integrate smart automation to reduce manual work, streamline operations, and boost productivity.' },
  { title: 'Data-Driven Decision Making', description: 'In-app analytics and dashboards give you real-time insights, supporting informed, strategic decisions.' },
  { title: 'User-Friendly Design', description: 'We create clean, intuitive interfaces that enhance usability and provide a seamless experience across devices.' },
  { title: 'Robust & Optimized Performance', description: 'Our products are built with clean, efficient code to ensure speed, reliability, and minimal load times—no matter the scale.' },
];


}
