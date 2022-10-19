import React from 'react';
import './RepoInfo.css';

export default function RepoInfo({repoName, starCount}) {
  return (
    <div className='Repository'>
      <div>Name: {repoName}</div>
      <div>Star count: {starCount}</div>
    </div>
  )
}
