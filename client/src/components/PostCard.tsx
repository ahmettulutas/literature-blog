import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react'
import { updateSinglePost } from '../redux/posts/postReducers';
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
    <Col className="post-card">
      <blockquote>{post.quote}</blockquote>
      <p>{post.author ? `- ${post.author}` : "- Anonymous"}</p>
      <Row>
        <Button icon={<LikeOutlined />} onClick={() => handleLike("likes")}>{post.likes}</Button>
        <Button icon={<DislikeOutlined />} onClick={() => handleLike("dislikes")}>{post.dislikes}</Button>
          {/* <button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</button> */}
      </Row>
    </Col>
    )
}
export default PostCard;
