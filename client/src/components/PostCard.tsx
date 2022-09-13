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
      <p>{post.quote}</p>
      <p>{post.author ? `- ${post.author}` : "- Anonymous"}</p>
      <Row>
        <Button onClick={() => handleLike("likes")}>{post.likes}</Button>
        <Button onClick={() => handleLike("dislikes")}>{post.dislikes}</Button>
          {/* <button onClick={() => dispatch(deleteSinglePost({_id:post._id}))}>DELETE!!!</button> */}
      </Row>
    </Col>
    )
}
export default PostCard;
