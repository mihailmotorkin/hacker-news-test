import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHit } from 'src/app/interfaces/hit.interface';
import { IItem } from 'src/app/interfaces/item.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() hit!: IHit;
  @Input() i!: number;
  
  
  route: ActivatedRoute = inject(ActivatedRoute);
  newsService = inject(NewsService);
  news: IItem | undefined;

  loading: boolean = false;

  constructor() {
    this.loading = true;

    const newsId = Number(
      this.route.snapshot.params['id']
    );
    this.newsService.getNewsById(newsId).subscribe((data: IItem) => {
      this.loading = false;
      this.news = data;
    });
    


    
  }


}
