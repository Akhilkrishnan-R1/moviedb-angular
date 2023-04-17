import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieDetails: any;
  movieVideos: any;
  movieCast: any;

  constructor(
    private movieService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    let paramID = this.router.snapshot.paramMap.get('id');
    this.getMovie(paramID);
    this.getVideo(paramID);
    this.getCast(paramID);
  }

  getMovie(id: any) {
    this.movieService
      .getMovieDetails(id)
      .subscribe((res) => (this.movieDetails = res));
  }

  getVideo(id: any) {
    this.movieService.getMovieVideo(id).subscribe((res) =>
      res.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.movieVideos = element.key;
        }
      })
    );
  }

  getCast(id: any) {
    this.movieService
      .getMovieCast(id)
      .subscribe((res) => (this.movieCast = res.cast));
  }
}
