import { Component, OnInit } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedinIn = faLinkedinIn;

  constructor() {}

  ngOnInit(): void {}
}
