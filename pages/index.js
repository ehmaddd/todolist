import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <Link href="/blog">
        Blog
      </Link>
    </div>
  );
};

export default Home;
