import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { useAppSelector } from '../redux/useAppSelector';
import { getPosts } from '../redux/posts/postReducers';
import { Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { IRootState } from '../redux/store';
import Spinner from '../components/Spinner';

const Header = React.lazy(() => import('../components/Header'));
const PostList = React.lazy(() => import('../components/PostList'));

const PostsPage: React.FC = () => {
  const existingToken = useAppSelector((state:IRootState) => state.posts.token)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    if (!existingToken) {
      // Sets a user token to local storage.
      const token = uuidv4();
      window.localStorage.setItem("token", JSON.stringify(token));
    }
  }, [dispatch]);
  
  return (
    <Row className="post-page">
      <React.Suspense fallback={<Spinner />}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<Spinner />}>
        <PostList />
      </React.Suspense>
    </Row>
  )
}

export default PostsPage;
