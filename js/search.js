function filter() {
  // 검색어를 가져와 대문자로 변환
  let value = document.getElementById("value").value.toUpperCase();

  // 모든 영화 타이틀 요소 가져오기
  let listInner = Array.from(document.getElementsByClassName("movie-card"));

  // 각 영화 타이틀 요소를 검사
  listInner.forEach((movieCard) => {
    // 현재 요소의 타이틀을 가져오기
    let title = movieCard.getElementsByClassName("movie_title")[0].innerHTML.toUpperCase();

    // 검색어가 타이틀에 포함되어 있는지 확인
    if (title.indexOf(value) !== -1) {
      movieCard.style.display = "block"; // 검색어가 포함되어 있으면 표시
    } else {
      movieCard.style.display = "none"; // 포함되어 있지 않으면 숨기기
    }
  });

  //검색어 비었는지 확인
  if (value === "") {
    alert("검색어를 입력하세요");
    return;
  }
}

function reloadPage() {
  location.reload(); // 페이지 새로고침
}
