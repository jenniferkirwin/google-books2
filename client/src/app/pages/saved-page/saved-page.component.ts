import { Component, OnInit } from '@angular/core';

import { FavoritesService, FavoritesResponse } from '../../services/favorites.service';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.scss'],
  providers: [FavoritesService]
})
export class SavedPageComponent implements OnInit {

  error: any;
  public favBooks: FavoritesResponse[];
  public pageHeader: string;

  constructor(private favoritesService: FavoritesService) { }

  showConfig() {
    this.favoritesService.getConfigResponse()
      .subscribe(
        (response: any) => {
          this.favBooks = response;
          console.log(response);
        },
        error => this.error = error
      );
  }

  ngOnInit(): void {
    this.showConfig();
    this.pageHeader = 'Saved Books';
  }

}
