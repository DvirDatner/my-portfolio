import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() currentActive = 'home';

  constructor() {}

  scrollTo(target: string) {
    const yOffset = document.getElementById('navbar')?.clientHeight;
    const element = document.getElementById(target);
    if (yOffset && element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {}
}
