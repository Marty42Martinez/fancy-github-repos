export const fetchHighStarRepos = async (starThreshold, pageNumber) => {
  const perPage = 5;
  const order = 'desc';
  const url = `https://api.github.com/search/repositories?q=stars:>${starThreshold}&sort=stars&order=${order}&per_page=${perPage}&page=${pageNumber}`;
  return await fetch(url).then((res) => res.json());
}
