import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-test-knowledge',
  templateUrl: './test-knowledge.component.html',
  styleUrls: ['./test-knowledge.component.css'],
  imports: [RouterModule, RouterOutlet, RouterLink],
})
export class TestKnowledgeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
