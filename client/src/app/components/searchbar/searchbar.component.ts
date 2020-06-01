import { Component, OnInit } from '@angular/core';
// import { SearchQuery } from '../../searchquery';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  // searchQuery = new SearchQuery('Search a Book!');

  searchQuery: string;

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.searchQuery);
    this.searchQuery = '';
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.searchQuery); }

  ngOnInit(): void {
  }

}
