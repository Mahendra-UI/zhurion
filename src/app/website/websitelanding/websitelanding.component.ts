import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import  jQuery from 'jquery';


@Component({
  selector: 'app-websitelanding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './websitelanding.component.html',
  styleUrl: './websitelanding.component.css'
})
export class WebsitelandingComponent implements OnInit {
  ngOnInit(): void {
        jQuery(document).ready(() => {
      const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement;
      const pathLength = progressPath.getTotalLength();
      progressPath.style.transition = 'none';
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = pathLength.toString();
      progressPath.getBoundingClientRect();
      progressPath.style.transition = 'stroke-dashoffset 10ms linear';

      const updateProgress = () => {
        const scroll = window.scrollY || window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress.toString();
      };

      updateProgress();
      window.addEventListener('scroll', updateProgress);

      const offset = 50;
      const duration = 550;

      window.addEventListener('scroll', () => {
        if (window.scrollY > offset) {
          const progressWrap = document.querySelector('.progress-wrap');
          if (progressWrap) {
            progressWrap.classList.add('active-progress');
          }
        } else {
          const progressWrap = document.querySelector('.progress-wrap');
          if (progressWrap) {
            progressWrap.classList.remove('active-progress');
          }
        }
      });

      const progressWrap = document.querySelector('.progress-wrap');
      if (progressWrap) {
        progressWrap.addEventListener('click', (event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });
  }

    gotoTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
}
