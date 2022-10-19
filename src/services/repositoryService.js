export const fetchHighStarRepos = async () => {
  const starThreshold = 25000;
  const order = 'desc';
  const url = `https://api.github.com/search/repositories?q=stars:>${starThreshold}&sort=stars&order=${order}`;
  return await fetch(url).then((res) => res.json());
}
