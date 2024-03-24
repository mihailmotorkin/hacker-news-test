import { Component, Input } from '@angular/core';
import { IHit } from 'src/app/interfaces/hit.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() hit!: IHit;
  @Input() i!: number;
  @Input() page!: number;
  @Input() hitsPerPage!: number;

}
