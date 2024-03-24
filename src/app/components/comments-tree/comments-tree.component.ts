import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment.interface';



@Component({
  selector: 'app-comments-tree',
  templateUrl: './comments-tree.component.html',
  styleUrls: ['./comments-tree.component.css']
})
export class CommentsTreeComponent {

  constructor() {}

  @Input() comment!: IComment;

  
}
