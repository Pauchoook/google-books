export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    publishedDate: string;
    pageCount: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      large: string;
    },
    categories: string[];
    previewLink: string;
  }
}

export interface BooksState {
  // books: IBook[];
  search: string;
  maxResults: number;
}