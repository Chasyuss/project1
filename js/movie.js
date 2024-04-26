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
        const movies = data.results; //results에 해당하는 데이터 가져옴 
        const cardList = document.querySelector('.movie-block'); //movie-block 섹션 선택
        cardList.innerHTML = ''; //초기화 

        movies.forEach((movie) => {
            const movieCard = document.createElement('div'); // 새로운 div 생성
            movieCard.className = 'movie-card'; // 클래스 이름 설정
            movieCard.dataset.id = movie.id; // 고유 ID 설정

            const Content = `
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class ="movie_img" alt="${movie.title}" />
                <h3 class="movie_title">${movie.title}</h3>
                <p class ="movie_overview" >${movie.overview}</p>
                <p class ="vote_average">평점: ${movie.vote_average}</p>
            `;

            movieCard.innerHTML = Content; // 'movie-card'에 내용 설정
            cardList.appendChild(movieCard); // 'movie-block'에 'movie-card' 추가

            //이벤트 리스너 사용해서 클릭시 카드 ID 출력하게 함
            movieCard.addEventListener('click', () => {
                alert(`영화 ID: ${movie.id}`); // 카드 ID 출력
            });
        });
    })
    .catch(err => {
        console.error('error', err)
    }); // 에러 잡아야하니까 catch 사용 