import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.module';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  frameworksSkills: Skill[] = [
    new Skill('assets/images/skills/angular.png', 'Angular'),
    new Skill('assets/images/skills/asp_net.png', 'ASP.net'),
    new Skill('assets/images/skills/jquery.png', 'jQuery'),
    new Skill('assets/images/skills/node_js.png', 'node.js'),
  ];

  languagesSkills: Skill[] = [
    new Skill('assets/images/skills/javascript.png', 'JavaScript'),
    new Skill('assets/images/skills/html.png', 'HTML'),
    new Skill('assets/images/skills/css.png', 'CSS'),
    new Skill('assets/images/skills/c_sharp.png', 'C#'),
    new Skill('assets/images/skills/c_plus_plus.png', 'C++'),
    new Skill('assets/images/skills/java.png', 'Java'),
  ];

  databasesSkills: Skill[] = [
    new Skill('assets/images/skills/mongo_db.png', 'MongoDB'),
    new Skill('assets/images/skills/sql.png', 'SQL'),
  ];

  toolsSkills: Skill[] = [
    new Skill(
      'assets/images/skills/aws.png',
      'AWS'
    ),
    new Skill(
      'assets/images/skills/github.png',
      'GitHub'
    ),
    new Skill(
      'assets/images/skills/google_api.png',
      'Google API'
    ),
    new Skill(
      'assets/images/skills/visual_studio_code.png',
      'VS Code'
    ),
    new Skill(
      'assets/images/skills/visual_studio.png',
      'Visual Studio'
    ),
    new Skill(
      'assets/images/skills/android_studio.png',
      'Android Studio'
    ),
    new Skill(
      'assets/images/skills/eclipse.png',
      'Eclipse'
    ),
    new Skill(
      'assets/images/skills/intellij.png',
      'IntelliJ'
    ),
    new Skill(
      'assets/images/skills/webstorm.png',
      'WebStorm'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
