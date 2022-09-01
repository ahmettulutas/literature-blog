import React from 'react'
import { useAppSelector } from '../redux/useAppSelector';

export default function HomePage() {
  const storeTest = useAppSelector(state => state.posts.loading )
  return (
    <div>{storeTest}store</div>
  )
}
