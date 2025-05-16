import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { CountUpModule } from 'ngx-countup';


@Component({
  selector: 'app-homesix',
  imports: [CommonModule, RouterModule],
  templateUrl: './homesix.component.html',
  styleUrl: './homesix.component.css'
})
export class HomesixComponent implements OnInit, AfterViewInit {
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


  services1 = [
    {
      title: 'Enterprise Application Development',
      icon: 'bi-building-gear',
      description: 'Build mission-critical systems that scale, automate, and integrate seamlessly. Cloud-native, secure, and fast.',
      tag: 'Core',
      color: '#0d6efd',
      bg: '#e9f0ff'
    },
    {
      title: 'Digital Services',
      icon: 'bi-display',
      description: 'High-performance websites, mobile-first, CMS, eCommerce. Pixel-perfect and ROI focused.',
      tag: 'Web & App',
      color: '#198754',
      bg: '#e7f6ee'
    },
    {
      title: 'Project Consultancy',
      icon: 'bi-compass',
      description: 'Blueprint to buildout, tech stack strategy, agile delivery. We keep you on track.',
      tag: 'Consulting',
      color: '#0dcaf0',
      bg: '#e6f9fd'
    },
    {
      title: 'UI/UX Experience',
      icon: 'bi-brush',
      description: 'Intuitive, emotion-driven interfaces that convert. Wireframes, flows, and delight.',
      tag: 'Creative',
      color: '#dc3545',
      bg: '#fce2e5'
    },
    {
      title: 'Internet of Things (IoT)',
      icon: 'bi-hdd-network',
      description: 'End-to-end IoT systems, device integration, real-time dashboards, predictive analytics.',
      tag: 'Connected',
      color: '#a855f7',
      bg: '#f3e8ff'
    },
    {
      title: 'SaaS Product Development',
      icon: 'bi-cloud-check-fill',
      description: 'Tailored SaaS platforms, secure & scalable. MVPs or full-fledged, built around your business.',
      tag: 'Cloud',
      color: '#fd7e14',
      bg: '#fff0e6'
    },
    {
      title: 'Next-Gen Tech',
      icon: 'bi-cpu',
      description: 'AI/ML, neural networks, automation. Solve tomorrow’s problems today.',
      tag: 'AI',
      color: '#ffc107',
      bg: '#fff7e6'
    }
  ];


  services = [
  {
    title: 'Enterprise Application Development',
    icon: 'bi-building-gear',
      // icon: 'bi-diagram-3',
    heading: 'Build the Backbone of Your Business',
    points: [
      'Cloud-native architectures with zero drag',
      'Microservices that kill downtime',
      'Open-source power with enterprise-grade security'
    ],
    tag: 'Core',
    color: '#0d6efd',
    bg: '#e9f0ff'
  },
  {
    title: 'Digital Services',
    icon: 'bi-display',
    heading: 'Crafting Experiences That Convert',
    points: [
      'Web & mobile apps that drive engagement',
      'CMS, e-commerce, headless or hybrid, we tailor it',
      'Every pixel optimized for ROI'
    ],
    tag: 'Web & App',
    color: '#198754',
    bg: '#e7f6ee'
  },
  {
    title: 'Project Consultancy',
    icon: 'bi-compass',
    heading: 'Strategy Meets Execution',
    points: [
      'Risk mapping, tech stack planning, launch strategies',
      'Agile sprints, precise milestones, no fluff',
      'Efficiency that pays off'
    ],
    tag: 'Consulting',
    color: '#0dcaf0',
    bg: '#e6f9fd'
  },
  {
    title: 'UI/UX Experience',
    icon: 'bi-brush',
    heading: 'Design That Just Feels Right',
    points: [
      'Emotion-led wireframes and user flows',
      'Culturally tuned, globally appealing',
      'From tap to conversions, seamless'
    ],
    tag: 'Creative',
    color: '#dc3545',
    bg: '#fce2e5'
  },
  {
    title: 'Internet of Things (IoT)',
    icon: 'bi-hdd-network',
    heading: 'Smart. Connected. Everywhere.',
    points: [
      'Device integration, gateway setup, real-time dashboards',
      'Predictive analytics to stop failures before they start',
      'Machine learning in motion'
    ],
    tag: 'Connected',
    color: '#a855f7',
    bg: '#f3e8ff'
  },
  {
    title: 'SaaS Product Development',
    icon: 'bi-cloud-check-fill',
    heading: 'Custom SaaS. Built Around You.',
    points: [
      'Scalable, secure, multi-tenant platforms',
      'User-centric interfaces with powerful backends',
      'Launch-ready MVPs or full-fledged solutions — you decide'
    ],
    tag: 'Cloud',
    color: '#fd7e14',
    bg: '#fff0e6'
  },
  {
    title: 'Next-Gen Tech',
    icon: 'bi-cpu',
    heading: 'AI-Driven. Future-Ready.',
    points: [
      'Custom neural networks & intelligent automations',
      'Human-like chatbots, deep learning models',
      'Always bleeding edge, never bleeding money'
    ],
    tag: 'AI',
    color: '#ffc107',
    bg: '#fff7e6'
  }
];


services2 = [
    {
      title: 'Enterprise Application Development',
      subtitle: 'Build the Backbone of Your Business',
      icon: 'bi-building-gear',
      points: [
        'Cloud-native architectures with zero drag',
        'Microservices that kill downtime',
        'Open-source power with enterprise-grade security'
      ],
      color: '#0d6efd',
      bg: '#e9f0ff',
      tag: 'Core'
    },
    {
      title: 'Digital Services',
      subtitle: 'Crafting Experiences That Convert',
      icon: 'bi-display',
      points: [
        'Web & mobile apps that drive engagement',
        'CMS, e-commerce, headless or hybrid, we tailor it',
        'Every pixel optimized for ROI'
      ],
      color: '#198754',
      bg: '#e7f6ee',
      tag: 'Web & App'
    },
    {
      title: 'Project Consultancy',
      subtitle: 'Strategy Meets Execution',
      icon: 'bi-compass',
      points: [
        'Risk mapping, tech stack planning, launch strategies',
        'Agile sprints, precise milestones, no fluff',
        'Efficiency that pays off'
      ],
      color: '#0dcaf0',
      bg: '#e6f9fd',
      tag: 'Consulting'
    },
    {
      title: 'UI/UX Experience',
      subtitle: 'Design That Just Feels Right',
      icon: 'bi-brush',
      points: [
        'Emotion-led wireframes and user flows',
        'Culturally tuned, globally appealing',
        'From tap to conversions, seamless'
      ],
      color: '#dc3545',
      bg: '#fce2e5',
      tag: 'Creative'
    },
    {
      title: 'Internet of Things (IoT)',
      subtitle: 'Smart. Connected. Everywhere.',
      icon: 'bi-hdd-network',
      points: [
        'Device integration, gateway setup, real-time dashboards',
        'Predictive analytics to stop failures before they start',
        'Machine learning in motion'
      ],
      color: '#a855f7',
      bg: '#f3e8ff',
      tag: 'Connected'
    },
    {
      title: 'SaaS Product Development',
      subtitle: 'Custom SaaS. Built Around You.',
      icon: 'bi-cloud-check-fill',
      points: [
        'Scalable, secure, multi-tenant platforms',
        'User-centric interfaces with powerful backends',
        'Launch-ready MVPs or full-fledged solutions — you decide'
      ],
      color: '#fd7e14',
      bg: '#fff0e6',
      tag: 'Cloud'
    },
    {
      title: 'Next-Gen Tech',
      subtitle: 'AI-Driven. Future-Ready.',
      icon: 'bi-cpu',
      points: [
        'Custom neural networks & intelligent automations',
        'Human-like chatbots, deep learning models',
        'Always bleeding edge, never bleeding money'
      ],
      color: '#ffc107',
      bg: '#fff7e6',
      tag: 'AI'
    }
  ];

}

