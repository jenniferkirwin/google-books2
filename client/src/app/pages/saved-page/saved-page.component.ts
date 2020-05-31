import { Component, OnInit } from '@angular/core';

import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.scss'],
  providers: [FavoritesService]
})
export class SavedPageComponent implements OnInit {

  error: any;
  public books: any;

  constructor(private favoritesService: FavoritesService) { }

  showConfig() {
    this.favoritesService.getConfigResponse()
      .subscribe(
        ({ items }: any) => {
          this.books = [...items];
          console.log(items);
        },
        error => this.error = error
      );
  }

  ngOnInit(): void {
  }

}
