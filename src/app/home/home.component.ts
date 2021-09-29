import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  position = "";
  positionIndex = 1;
  positionsIndex = 0;
  positions = ["Full Stack", "Front End", "Back End"];
  typing = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.position = this.positions[this.positionsIndex].slice(0, this.positionIndex);
      if (this.typing) {
        this.positionIndex++;
        if (this.positionIndex > this.positions[this.positionsIndex].length) {
          this.typing = false;
        }
      }
      else {
        this.positionIndex--;
      }

      if (this.positionIndex < 0) {
        this.typing = true;
        this.positionIndex = 1;
        this.positionsIndex++;

        if (this.positionsIndex >= 3) {
          this.typing = true;
          this.positionsIndex = 0;
        }
      }
    }, 200);
  }

}
