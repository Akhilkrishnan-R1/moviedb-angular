import { Component, Input } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css'],
})
export class MovieRowComponent {
  @Input() title!: string;
  @Input() genreID!: Number;
  rowData: any;

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService
      .fetchMovieWithGenre(this.genreID)
      .subscribe((res) => (this.rowData = res.results));
  }
}
