import React from 'react'
import { updateSinglePost, deleteSinglePost } from '../redux/posts/postReducers';
import { useAppDispatch } from '../redux/useAppDispatch';
import { ISinglePost } from '../types/postTypes';

interface IPostTypes {
  post:ISinglePost
}

const PostCard: React.FunctionComponent<IPostTypes> = ({post})  => {
  const dispatch = useAppDispatch();
  const handleLike = (type:string) => {
    dispatch(updateSinglePost({...post, [type]: post[type as keyof ISinglePost] as number + 1}))
  };
    return (
    <>
      <h1 style={{fontSize:20}}>{post.quote}</h1>
      <p>{post.author}</p>
      <button onClick={() => handleLike("likes")}>{post.likes}</button>
      <button onClick={() => handleLike("dislikes")}>{post.dislikes}</button>
      <button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</button>
    </>
    )
}
export default PostCard;
