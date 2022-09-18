import React from 'react';
import { Col, Row } from 'antd';
import { IRootState } from '../redux/store';
import { useAppSelector } from '../redux/useAppSelector';
import { ISinglePost } from '../types/postTypes';
import PostCard from './PostCard';
import Spinner from './Spinner';


const PostList: React.FC = () => {
  const posts = useAppSelector((state: IRootState) => state.posts.posts);
  const isLoading = useAppSelector((state: IRootState) => state.posts.loading);
  return (
    <>
      {!isLoading ?
        <Row className="post-list-container">
          {posts?.map((item: ISinglePost) =>
            <Col xs={24} key={item._id}>
              <PostCard post={item} />
            </Col>)}</Row>
        :
        <Spinner />
      } 
    </>
  )
};

export default PostList;
