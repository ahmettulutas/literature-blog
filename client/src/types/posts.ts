export interface IPostsInitialState {
    posts?:IPosts | null,
    error:boolean,
    loading:boolean,
}
export interface ISinglePost {
  quote: string,
  author: string
  likes?: number,
  dislikes?: number,
  categories?: [string]
  _id?: string,
  createdAt?: string,
  updatedAt?: string,
  __v: number
}
export interface IPosts {
  status:string,
  data: ISinglePost[] 
}
export interface ISinglePostResponse {
  status:string,
  data:ISinglePost
}
export interface ISinglePostRequest {
    _id:string,
    quote?:string,
    author?:string,
    likes?:number,
    dislikes?:number
}
