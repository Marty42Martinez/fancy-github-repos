import React from 'react';

export default function RepoInfo({repoName, starCount}) {
  return (
    <>
      <div>{repoName}</div>
      <div>{starCount}</div>
    </>
  )
}