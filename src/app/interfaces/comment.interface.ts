export interface IComment {
  id: number,
  created_at: string,
  author: string,
  text: string,
  points: number,
  parent_id: number,
  children?: Array<IComment>
}
