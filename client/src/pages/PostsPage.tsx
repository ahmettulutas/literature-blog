import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { useAppSelector } from '../redux/useAppSelector';
import { getPosts } from '../redux/posts/postActions';
import { RootState } from '../redux/store';
import { ISinglePost } from '../types/posts';
import PostCard from '../components/PostCard';
export default function PostsPage() {
  const dispatch = useAppDispatch();
  const posts  = useAppSelector((state: RootState) => state.posts.posts)
  useEffect(() => {
    dispatch(getPosts())
  },[]);
  return (
    <div>
      {posts?.data.map((item:ISinglePost, index:number) => <PostCard key={index} post={item}/>)}
    </div>
  )
}
