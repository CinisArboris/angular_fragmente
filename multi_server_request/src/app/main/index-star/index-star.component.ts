import { Component, OnInit } from '@angular/core';
import { IStar } from 'src/app/interface/istar';
import { StarService } from 'src/app/service/api_start/service-star.service';
import { IErrorDinamyc } from 'src/app/interface/ierror-dinamyc';

@Component({
  selector: 'app-index-star',
  templateUrl: './index-star.component.html',
  styleUrls: ['./index-star.component.css'],
})
export class IndexStarComponent implements OnInit {
  stars: IStar[] = [];
  errorData: IErrorDinamyc | null = null;
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
  nameStar: string = 'tau';

  constructor(private starService: StarService) {}

  ngOnInit(): void {
    this.starService.getStarByName(this.nameStar).subscribe(
      (data: IStar[]) => {
        if (data && data.length > 0) {
          this.stars = data;
          // show response
          console.log('Response:', this.stars);
        } else {
          console.log('No star data received from the API');
          this.stars = [];
        }
      },
      (error) => {
        console.error('Error fetching star data:', error);
        this.errorData = {
          responseRequestStatusCode: error.status.toString(),
          responseRequestMessageResponse: error.message.toString(),
          responseRequestRemoteServer: error.url.toString(),
          responseRequestTimestamp: new Date().toISOString(),
        };
      }
    );
    
  }
}
