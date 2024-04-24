const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGU4ZTc4OTU5YTZlNmQ1NjFhMTJkOTBlNDBiOTFlNSIsInN1YiI6IjY2MjhjN2ZkNGE0YmY2MDE4ODc3NjBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rd6KtbDgPmuaiQBVsIMOWT4Ed5GqmKrQXeOx9qfW4-8'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));