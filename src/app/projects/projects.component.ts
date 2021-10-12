import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { Project } from './project.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  config: SwiperOptions = {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  projects: Project[] = [
    new Project(
      'assets/images/dvir_portfolio.png',
      'Dvir Datner portfolio - Website',
      'My portfolio website',
      "https://github.com/DvirDatner/my-portfolio"
    ),
    new Project(
      'assets/images/nofar_portfolio.png',
      'Nofar Datner portfolio - Website',
      "My sister's portfolio website",
      "https://github.com/DvirDatner/NofarDatnerPortfolio"
    ),
    new Project(
      'assets/images/checkers_game.png',
      'Checkers Game - Web Game',
      'Web game developed as part of my Angular learning',
      "https://github.com/DvirDatner/checkers-game"
    ),
    new Project(
      'assets/images/info_park.png',
      'InfoPark - Android App',
      'Android application developed in the last year of my B.Sc degree as the final project',
      "https://github.com/yanivys4/InfoPark-Frontend"
    ),
    new Project(
      'assets/images/gold_miner.png',
      'Gold Miner - PC Game',
      'PC game developed in the second year of my B.Sc degree',
      "https://github.com/yanivys4/Gold-Miner"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
