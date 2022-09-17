export interface IPostsInitialState {
    posts?:ISinglePost[],
    error:boolean,
    loading:boolean,
}
export interface ISinglePost {
  quote: string,
  author: string,
  likes: [string],
  dislikes:[string],
/*   likesCount: number,
  dislikesCount: number, */
  categories?: [string]
  _id?: string,
  createdAt?: string,
  updatedAt?: string,
  __v: number
}

export interface ISinglePostResponse {
  status:string,
  data:ISinglePost
}
export interface ISinglePostRequest {
  _id?:string,
  data?: {
    likes?:[string],
    dislikes?:[string] 
  },
}
