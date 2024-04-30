// 알파벳 순 정렬
function alphasort() {
  // 모든 movie-card 요소를 가져오기
  let movieBlock = document.getElementById("movie-block");
  let movieCards = Array.from(movieBlock.getElementsByClassName("movie-card"));

  // 영화 타이틀을 기준으로 정렬
  movieCards.sort((a, b) => {
    let titleA = a.getElementsByClassName("movie_title")[0].innerHTML.toUpperCase();
    let titleB = b.getElementsByClassName("movie_title")[0].innerHTML.toUpperCase();
    return titleA.localeCompare(titleB); // 알파벳 순으로 오름차순 정렬
  });

  // 정렬된 순서대로 movie-block에 다시 추가
  movieBlock.innerHTML = ""; // 초기화
  movieCards.forEach((card) => {
    movieBlock.appendChild(card); // 정렬 추가
  });
}

//평점 순 정렬
function extractNumber(value) {
  const cleaned = value.replace(/[^\d.]/g, ""); // 숫자와 소수점만 남김
  return parseFloat(cleaned); // 숫자로 변환
}

function votesort() {
  let movieBlock2 = document.getElementById("movie-block");
  let movieCards2 = Array.from(movieBlock2.getElementsByClassName("movie-card"));

  const Decimals = (value) => Math.round(value * 1000) / 1000; //반올림

  movieCards2.sort((a, b) => {
    let rawRatingA = a.getElementsByClassName("vote_average")[0].innerHTML;
    let rawRatingB = b.getElementsByClassName("vote_average")[0].innerHTML;

    // 숫자만 추출
    let ratingA = extractNumber(rawRatingA);
    let ratingB = extractNumber(rawRatingB);

    let roundedRatingA = Decimals(ratingA);
    let roundedRatingB = Decimals(ratingB);

    return roundedRatingB - roundedRatingA; // 내림차순 정렬
  });

  movieBlock2.innerHTML = "";
  movieCards2.forEach((card) => {
    movieBlock2.appendChild(card);
  });
}
