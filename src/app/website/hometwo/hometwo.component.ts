import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import AOS from 'aos';

import * as AOS from 'aos';



@Component({
  selector: 'app-hometwo',
  imports: [CommonModule, RouterModule],
  templateUrl: './hometwo.component.html',
  styleUrl: './hometwo.component.css'
})
export class HometwoComponent implements OnInit, AfterViewInit {
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
