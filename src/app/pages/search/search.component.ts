import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchResult: any;

  constructor(private movieService: MovieApiServiceService) {}

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    this.movieService
      .getSearchMovie(this.searchForm.value)
      .subscribe((res) =>this.searchResult=res.results);
  }
}
