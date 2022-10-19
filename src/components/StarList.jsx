import React, {useEffect, useState} from 'react';
import { fetchHighStarRepos } from '../services/repositoryService';
import RepoInfo from './RepoInfo';

export default function StarList() {
  const [highStarRepos, setHighStarRepos] = useState([]);
  useEffect(() => {
    fetchHighStarRepos().then((results) => setHighStarRepos(results.items));

  }, [])
  // Future state: React Query?
  return (
    <>
      {highStarRepos.map((repository) => (
        <RepoInfo repoName={repository.name} starCount={repository.stargazers_count}/>
      ))}
    </>
  )
}