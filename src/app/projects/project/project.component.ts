import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../project.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() imgSrc = "";
  @Input() title = "";
  @Input() description = "";
  project: Project | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.project = new Project(this.imgSrc, this.title, this.description, "");
    console.log(this.project);
  }
}
