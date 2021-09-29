import { Component, OnInit } from '@angular/core';

import { Project } from './project.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project('assets/images/main-photo.png', 'Gold Miner - PC Game', 'some text only for description'),
    new Project('assets/images/main-photo.png', 'Gold Miner - PC Game', 'some text only for description'),
    new Project('assets/images/main-photo.png', 'Gold Miner - PC Game', 'some text only for description'),
    new Project('assets/images/main-photo.png', 'Gold Miner - PC Game', 'some text only for description'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
