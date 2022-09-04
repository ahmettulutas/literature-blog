import React, {useState} from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { addSinglePost } from '../redux/posts/postReducers';

export default function Form() {
  const [quote, setQuote] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addSinglePost({quote}))
  };
  return (
    <form onSubmit={handleSubmit}>
      Form
      <input value={quote} type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setQuote(e.currentTarget.value)}/>
      <button type="submit">Add</button>
    </form>
  )
}
