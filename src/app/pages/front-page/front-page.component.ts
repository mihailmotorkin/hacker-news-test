import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { IHit } from 'src/app/interfaces/hit.interface';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit{

  loading: boolean = false;

  constructor(private newsService: NewsService) {

  }

  hits: IHit[] = [];

  length = 30;
  page = 0;
  hitsPerPage = 10;

  ngOnInit() {
    this.loading = true;

    this.newsService.getData(this.page, this.hitsPerPage).subscribe((data: Data) => {
      this.loading = false;
      return this.hits = data['hits'];     
    });    
  }

  goToNextPage(index: number): void {
    const maxPage = Math.ceil(this.length / this.hitsPerPage);

    if(this.page < maxPage - 1) {

      this.page = index + 1;

      this.newsService.getData(this.page, this.hitsPerPage).subscribe((data: Data) => {
      this.loading = false;
      return this.hits = data['hits'];     
    });
 
    }
  }

  goToPrevPage(index: number): void {
    if(this.page > 0) {
      this.page = index - 1;

      this.newsService.getData(this.page, this.hitsPerPage).subscribe((data: Data) => {
      this.loading = false;
      return this.hits = data['hits'];     
    });
      
    }
  }


}
