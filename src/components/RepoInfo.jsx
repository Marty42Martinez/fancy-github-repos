import React from 'react';
import './RepoInfo.css';

export default function RepoInfo({repoName, starCount, forkCount, url, handleClick}) {
  return (
    <div className='Repository' onClick={() => handleClick(repoName, starCount, forkCount, url)}>
      <div>Name: {repoName}</div>
      <div>Star count: {starCount}</div>
    </div>
  )
}
