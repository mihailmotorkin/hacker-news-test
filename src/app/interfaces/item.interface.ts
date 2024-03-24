import { IComment } from "./comment.interface";

export interface IItem {
  id: number,
  created_at: string,
  author: string,
  title: string,
  url: string,
  text: null,
  points: number,
  parent_id: null,
  children?: Array<IComment>
}
