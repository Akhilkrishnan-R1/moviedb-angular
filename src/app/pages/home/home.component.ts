import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  bannerData! : any[]

  rowData = [
    {title: 'Action',genreID:28},
    {title: 'Adventure',genreID:12},
    {title: 'animation',genreID:16},
    {title: 'comedy',genreID:35},
    {title: 'Documentary',genreID:99},
    {title: 'Science Fiction',genreID:878},
    {title: 'Thriller',genreID:53},
  ]

  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {
    this.getBannerData();
  }

  getBannerData() {
    this.service.bannerApiData().subscribe((res) => {this.bannerData = res.results
console.log(this.bannerData);
    });
  }
}
