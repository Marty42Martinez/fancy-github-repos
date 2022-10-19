import React, {useEffect, useState} from 'react';
import { fetchHighStarRepos } from '../services/repositoryService';

export default function StarList() {
  const [highStarRepos, setHighStarRepos] = useState([]);
  useEffect(() => {
    fetchHighStarRepos().then((results) => setHighStarRepos(results.items));

  }, [])
  // Build ListItem components
  console.log({highStarRepos});
  // Future state: React Query?
  return (
    <div>Hello World!</div>
  )
}