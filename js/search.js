function filter() {
    // 검색어를 가져와 대문자로 변환합니다.
    let value = document.getElementById("value").value.toUpperCase();

    // 모든 영화 타이틀 요소를 가져옵니다.
    let listInner = document.getElementsByClassName("movie-card");

    // 각 영화 타이틀 요소를 검사합니다.
    for (let i = 0; i < listInner.length; i++) {
        // 현재 요소의 타이틀을 가져옵니다.
        let title = listInner[i].getElementsByClassName("movie_title")[0].innerHTML.toUpperCase();

        // 검색어가 타이틀에 포함되어 있는지 확인합니다.
        if (title.indexOf(value) !== -1) {
            listInner[i].style.display = "block";  // 검색어가 포함되어 있으면 표시 
            //flex로 했더니 전부다 옆으로 밀리는 현상이 발생함
        } else {
            listInner[i].style.display = "none";  // 포함되어 있지 않으면 숨깁니다.
        }
    }
}

