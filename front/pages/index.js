import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLogin } = useSelector(state => state.user)
  const { mainPosts } = useSelector(state => state.post)

  return (
    <>
      <div>
        {isLogin && <PostForm />}
        {mainPosts.map((c) => {
          return (
            <PostCard key={c} item={c} />
          )
        })}
      </div>
    </>
  )
}

export default Home;