const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGU4ZTc4OTU5YTZlNmQ1NjFhMTJkOTBlNDBiOTFlNSIsInN1YiI6IjY2MjhjN2ZkNGE0YmY2MDE4ODc3NjBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rd6KtbDgPmuaiQBVsIMOWT4Ed5GqmKrQXeOx9qfW4-8'
    }
  };

  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  
  fetch(url, options) // 응답 요청
    .then(response => response.json()) //JSON 형식으로 파싱
    .then(data => { // 파싱된 데이터가 전달되면 실행
        console.log("Fetched data:", data); 
        const movies = data['results']; //results에 해당하는 데이터 가져옴 
        const cardList = document.querySelector('.movie-block'); //movie-block 섹션 선택
        cardList.innerHTML = ''; //초기화 

        movies.forEach((a) => { //result에서 가져온 데이터를 순회하며 각 요소에 대한 처리 수행 
            let _title = a['title']; // 제목가져오기
            let _overview = a['overview']; // 줄거리 가져오기
            let _poster_path = a['poster_path']; // 포스터 경로 가져오기
            let _vote_average = a['vote_average']; // 평점 가져오기 
            let _id = a['id']; //고유 ID 가져오기

            let temp_html = `
            <div class = "movie-card" data-id="${_id}>
                <img src = "https://image.tmdb.org/t/p/w500/${_poster_path}" alt="${_title}" />
                <h3>${_title} </h3>
                <p>${_overview} </p>
                <p> 평점: ${_vote_average} </p>
            `;
            cardList.innerHTML += temp_html; //새로운 movie-block 추가
        });
    })
    .catch(err => {
        console.error('error', err)
    }); // 에러 처리

