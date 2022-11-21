export interface RootObject extends Item {
  [x: string]: any;
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

interface Default {
  url: string;
  width: number;
  height: number;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
export interface Item {
  kind: string;
  id: Id;
  snippet: Snippet;
}
export interface Id {
  channelId: JSX.Element;
  kind: string;
  videoId: string;
}
