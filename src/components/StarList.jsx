import React, {useEffect, useState} from 'react';

import './StarList.css';
import { fetchHighStarRepos } from '../services/repositoryService';
import RepoInfo from './RepoInfo';
import RepoDetails from './RepoDetails';

export default function StarList() {
  const [highStarRepos, setHighStarRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [starLimit, setStarLimit] = useState(25000);
  const [showRepoDetails, setShowRepoDetails] = useState(false);
  const [repoDetails, setRepoDetails] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchHighStarRepos(starLimit, pageNumber).then((results) => setHighStarRepos(results.items)).then(() => setIsLoading(false))
  }, [starLimit, pageNumber])

  const handleRepoDetailsClick = (repoName, starCount, forkCount, url) => {
    setRepoDetails({repoName, starCount, forkCount, url});
    setShowRepoDetails(true);
  }

  const handleReturnFromDetails = () => {
    setShowRepoDetails(false);
  }

  const handlePreviousPageClick = () => {
    if(pageNumber > 1) {
      setPageNumber(pageNumber-1);
    } else {
      setPageNumber(1);
    }
  }

  const handleNextPageClick = () => {
      setPageNumber(pageNumber+1);
  }
  // Future state: React Query?
  return (
    <>
      {!showRepoDetails ? 
       <>
        <div class='SectionTitle'>High star count</div>
        <div>Star Limit: <input value={starLimit} type='number' onChange={(e) => setStarLimit(e.target.value)} /></div>
        <div onClick={handlePreviousPageClick}>Previous Page</div>
        <div>Page: {pageNumber}</div>
        <div onClick={handleNextPageClick}>Next Page</div>
        {isLoading ? <div>Loading</div> : 
          <div className='StarList'>
          {highStarRepos.map((repository) => (
            <RepoInfo repoName={repository.name} starCount={repository.stargazers_count} forkCount={repository.forks_count} url={repository.url} handleClick={handleRepoDetailsClick} />
          ))}
          </div>}
        </>
      : <RepoDetails repoName={repoDetails.repoName} starCount={repoDetails.starCount} forkCount={repoDetails.forkCount} url={repoDetails.url} handleBackClick={handleReturnFromDetails} />}
    </>
  )
}
