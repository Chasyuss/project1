function sort() {
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
    movieBlock.innerHTML = ""; // 기존 내용을 지우고
    movieCards.forEach(card => {
        movieBlock.appendChild(card); // 정렬된 순서대로 추가
    });
}