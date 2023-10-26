export interface ArticleData {
  id: number,
  authorName: string,
  categoryId: number,
  published: boolean,
  tampilDiBeranda: boolean,
  pending: boolean,
  title: string,
  content: string,
  publishedAt: string,
  featuredImage: string,
  thumbnail: string,
  caption: string,
  attachment: string,
  accessCounter: number,
  category: Category
}