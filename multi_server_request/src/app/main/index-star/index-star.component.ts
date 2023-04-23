import { Component, OnInit } from '@angular/core';
import { IStar } from 'src/app/interface/istar';
import { StarService } from 'src/app/service/api_start/service-star.service';

@Component({
  selector: 'app-index-star',
  templateUrl: './index-star.component.html',
  styleUrls: ['./index-star.component.css'],
})
export class IndexStarComponent implements OnInit {
  stars: IStar[] = [];
  columns: string[] = [
    'name',
    'constellation',
    'right_ascension',
    'declination',
    'apparent_magnitude',
    'absolute_magnitude',
    'distance_light_year',
    'spectral_class',
  ];

  constructor(private starService: StarService) {}

  ngOnInit(): void {
    this.starService.getStarByName('Alpha').subscribe((data) => {
      this.stars = data;
    });
  }
}
