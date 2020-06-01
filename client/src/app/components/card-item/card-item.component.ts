import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService, FavoritesResponse } from '../../services/favorites.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  providers: [FavoritesService]
})
export class CardItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() listBooks: any;

}
