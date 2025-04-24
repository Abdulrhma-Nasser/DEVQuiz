import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PointsService } from '../../services/points.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ThemeService]
})
export class HeaderComponent implements OnInit {

  constructor(public themeService: ThemeService, public pointsService: PointsService) { }

  ngOnInit() {
  }



}
