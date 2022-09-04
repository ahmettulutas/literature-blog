import React from 'react'
import { updateSinglePost, deleteSinglePost } from '../redux/posts/postReducers';
import { useAppDispatch } from '../redux/useAppDispatch';
import { ISinglePost, ISinglePostRequest } from '../types/postTypes';

interface IPostTypes {
  post:ISinglePostRequest
}

const PostCard: React.FunctionComponent<IPostTypes> = ({post})  => {
  const dispatch = useAppDispatch();
  const handleLike = (type:string) => {
    dispatch(updateSinglePost({...post, [type]: Number(post[type as keyof ISinglePostRequest]) + 1}))
  };
    return (
    <>
      <p>{post.quote}</p>
      <button onClick={() => handleLike("likes")}>{post.likes}</button>
      <button onClick={() => handleLike("dislikes")}>{post.dislikes}</button>
      <button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</button>
    </>
    )
}
export default PostCard;
