import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization code if needed
  }

  about(): void {
    this.router.navigate(['/projects']);
  }

}
