function filter() {
    // 검색어를 가져와 대문자로 변환
    let value = document.getElementById("value").value.toUpperCase();

    // 모든 영화 타이틀 요소 가져오기
    let listInner = document.getElementsByClassName("movie-card");

    // 각 영화 타이틀 요소를 검사
    for (let i = 0; i < listInner.length; i++) {
        // 현재 요소의 타이틀을 가져오기
        let title = listInner[i].getElementsByClassName("movie_title")[0].innerHTML.toUpperCase();

        // 검색어가 타이틀에 포함되어 있는지 확인
        if (title.indexOf(value) !== -1) {
            listInner[i].style.display = "block";  // 검색어가 포함되어 있으면 표시 
            //flex로 했더니 전부다 옆으로 밀리는 현상이 발생함 -> block으로 바꿈
        } else {
            listInner[i].style.display = "none";  // 포함되어 있지 않으면 숨기기
        }
    }

    //검색어 비었는지 확인 
    if (value === "")
    {
        alert("검색어를 입력하세요");
        return;
    }
}

