
/*
각 단어들은 span 태그로 만들어져 있다.
각 단어들은 웹 페이지가 갱신될 때마다 랜덤한 위치를 가진다.
각 단어들은 data-word라는 속성을 가지고 값은 그 단어를 담고 있다.
각 단어들은 div#container 태그의 자식 태그들이다.
위 특징을 활용해서 단어 입력이 완료되면 화면에 있는 단어들이 사라지는 이벤트 핸들러를 만들고, input 태그에 적절한 타입으로 이벤트 핸들러를 등록해 주세요.

이벤트 핸들러가 갖추어야 하는 기능은 다음과 같습니다.

입력값과 일치하는 단어를 가진 요소가 있으면 그 요소를 삭제해야 한다.
이벤트 핸들러가 호출되면 input 태그는 매번 초기화되어야 한다.
단어를 삭제했다면 checker 함수가 호출되어야 한다.
*/
const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!👏');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

function removeWord(){

  const word = document.querySelector(`[data-word= "${input.value}"]`);

  if (word){
    word.remove();
    checker();

  }
  input.value='';

}

// 여기에 코드를 작성해 주세요.

input.addEventListener('change',removeWord);



