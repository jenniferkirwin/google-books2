import { Component, OnInit } from '@angular/core';
import { FavoritesService, FavoritesResponse } from '../../services/favorites.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  providers: [FavoritesService]
})
export class SearchbarComponent implements OnInit {

  searchQuery: string;
  error: any;
  public searchedBooks: FavoritesResponse[];

  constructor(private favoritesService: FavoritesService) { }

  getSearch(bookTitle:string) {
    this.favoritesService.getSeaches(bookTitle)
      .subscribe(
        (response: any) => {
          this.searchedBooks = response;
          console.log(response);
        },
        error => this.error = error
      );
  };

  onSubmit() {
    const cleanQuery = this.searchQuery.trim().replace(/\s+/g, '-').toLowerCase();
    this.searchQuery = '';
    this.getSearch(cleanQuery);
  };

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.searchQuery); }

  ngOnInit(): void {
  }

}
