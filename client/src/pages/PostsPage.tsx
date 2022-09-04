import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { useAppSelector } from '../redux/useAppSelector';
import { getPosts } from '../redux/posts/postReducers';
import { IRootState } from '../redux/store';
import { ISinglePost } from '../types/postTypes';
import PostCard from '../components/PostCard';
import Form from '../components/Form';

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const posts  = useAppSelector((state: IRootState) => state.posts.posts);

  useEffect(() => {
        dispatch(getPosts())
  },[dispatch]);
  
  return (
    <div>
      {posts?.map((item:ISinglePost, index:number) => <PostCard key={index} post={item}/>)}
      <Form />
    </div>
  )
}
