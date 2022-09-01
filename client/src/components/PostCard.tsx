import React from 'react'
import { ISinglePost } from '../types/posts';

interface IPostTypes {
  post:ISinglePost
}

const PostCard: React.FunctionComponent<IPostTypes> = ({post})  => {
  return (
    <>
      <div>{post.quote}</div>
      <button>{post.likes}</button>
      <button>{post.dislikes}</button>
    </>
    )
}
export default PostCard;
