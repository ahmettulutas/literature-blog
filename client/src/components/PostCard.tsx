import { Button } from 'antd';
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
      <p style={{fontSize:15}}>{post.quote}</p>
      <p>{post.author}</p>
      <Button onClick={() => handleLike("likes")}>{post.likes}</Button>
      <Button onClick={() => handleLike("dislikes")}>{post.dislikes}</Button>
      {/* <button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</button> */}
    </>
    )
}
export default PostCard;
