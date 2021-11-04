import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activePosition = 'home';

  @ViewChild('home') homeElement: ElementRef | undefined;
  @ViewChild('projects') projectsElement: ElementRef | undefined;
  @ViewChild('certificates') certificatesElement: ElementRef | undefined;
  @ViewChild('about') aboutElement: ElementRef | undefined;
  @ViewChild('skills') skillsElement: ElementRef | undefined;
  @ViewChild('contact') contactElement: ElementRef | undefined;

  public homeOffset: Number | undefined;
  public projectsOffset: Number | undefined;
  public certificatesOffset: Number | undefined;
  public aboutOffset: Number | undefined;
  public skillsOffset: Number | undefined;
  public contactOffset: Number | undefined;

  ngAfterViewInit() {
    this.homeOffset = this.homeElement?.nativeElement.offsetTop - 10;
    this.projectsOffset = this.projectsElement?.nativeElement.offsetTop - 10;
    this.certificatesOffset =
      this.certificatesElement?.nativeElement.offsetTop - 10;
    this.aboutOffset = this.aboutElement?.nativeElement.offsetTop - 10;
    this.skillsOffset = this.skillsElement?.nativeElement.offsetTop - 10;
    this.contactOffset = this.contactElement?.nativeElement.offsetTop - 50;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (
      this.homeOffset &&
      this.projectsOffset &&
      window.pageYOffset >= this.homeOffset &&
      window.pageYOffset < this.projectsOffset
    ) {
      this.activePosition = 'home';
    } else if (
      this.projectsOffset &&
      this.certificatesOffset &&
      window.pageYOffset >= this.projectsOffset &&
      window.pageYOffset < this.certificatesOffset
    ) {
      this.activePosition = 'projects';
    } else if (
      this.certificatesOffset &&
      this.aboutOffset &&
      window.pageYOffset >= this.certificatesOffset &&
      window.pageYOffset < this.aboutOffset
    ) {
      this.activePosition = 'certificates';
    } else if (
      this.aboutOffset &&
      this.skillsOffset &&
      window.pageYOffset >= this.aboutOffset &&
      window.pageYOffset < this.skillsOffset
    ) {
      this.activePosition = 'about';
    } else if (
      this.skillsOffset &&
      this.contactOffset &&
      window.pageYOffset >= this.skillsOffset &&
      window.pageYOffset < this.contactOffset
    ) {
      this.activePosition = 'skills';
    } else if (this.contactOffset && window.pageYOffset >= this.contactOffset) {
      this.activePosition = 'contact';
    } else {
      this.activePosition = 'home';
    }
  }
}
