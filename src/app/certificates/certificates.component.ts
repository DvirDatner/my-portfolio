import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  config: SwiperOptions = {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
