import React from 'react';
import { Row } from 'antd';
import { IRootState } from '../redux/store';
import { useAppSelector } from '../redux/useAppSelector';
import { ISinglePost } from '../types/postTypes';
import PostCard from './PostCard';
import Spinner from './Spinner';


export const PostList = () => {
  const posts = useAppSelector((state: IRootState) => state.posts.posts);
  const isLoading = useAppSelector((state: IRootState) => state.posts.loading);
  return (
    <>
      {!isLoading ? <Row className="post-list-container">{posts?.map((item: ISinglePost) => <PostCard key={item._id} post={item} />)}</Row> : <Spinner />}
    </>
  )
};
