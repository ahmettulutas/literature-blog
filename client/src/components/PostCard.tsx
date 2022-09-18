import React from 'react'
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { updateSinglePost, deleteSinglePost } from '../redux/posts/postReducers';
import { useAppDispatch } from '../redux/useAppDispatch';
import { ISinglePost } from '../types/postTypes';

const userId = "123456";
interface IPostTypes {
  post:ISinglePost
}

const PostCard: React.FC<IPostTypes> = ({post})  => {
  const dispatch = useAppDispatch();
  const handleLike = (type: string) => {
    dispatch(updateSinglePost({_id:post._id, data:{[type]: userId} }))
  };
    return (
    <Col className="post-card">
      <blockquote>{post.quote}</blockquote>
      <p>{post.author ? `- ${post.author}` : "- Anonymous"}</p>
      <Row>
          <Button icon={<LikeOutlined />} /* disabled={post.likes.includes(userId)} */ onClick={() => handleLike("likes")}>{post.likes.length}</Button>
          <Button icon={<DislikeOutlined />} /* disabled={post.dislikes.includes(userId)} */ onClick={() => handleLike("dislikes")}>{post.dislikes.length}</Button>
          <Button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</Button>
      </Row>
    </Col>
    )
}
export default PostCard;
