<script src="./js/movie.js"></script>
// 카드 요소들 가져오기
const cards = document.querySelectorAll('.moive-card');

// 각 카드에 클릭 이벤트 리스너 추가
cards.forEach(card => {
  card.addEventListener('click', function() {
    // 해당 카드의 데이터 ID 가져오기
    const cardId = card.dataset.id;
    
    // alert 창으로 ID 표시
    alert('Clicked card ID: ' + cardId);
  });
});
