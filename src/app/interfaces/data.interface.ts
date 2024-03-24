import { IHit } from "./hit.interface";

export interface IData {
  exhaustive: object;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: IHit;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: any;
  query: string;
  serverTimeMS: number;
}
