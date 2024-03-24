import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-news-comments',
  templateUrl: './news-comments.component.html',
  styleUrls: ['./news-comments.component.css']
})
export class NewsCommentsComponent {
    @Input() item!: IItem | undefined;

}
