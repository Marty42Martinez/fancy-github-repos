import React from 'react';

export default function RepoDetails({repoName, starCount, forkCount, url, handleBackClick}) {
  return (
    <>
      <div onClick={handleBackClick}>Back</div>
      <div>Name: {repoName}</div> 
      <div>Star count: {starCount}</div> 
      <div>Forks count: {forkCount}</div> 
      <a href={url} target='_blank' rel="noreferrer" >Link to Repo</a> 
    </>
  )
};
