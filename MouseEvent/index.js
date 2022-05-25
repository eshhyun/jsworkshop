/*

마우스 왼쪽 버튼을 누른 순간 청기(flagBlue)에 'up'이라는 클래스 속성값이 추가되고, 
마우스 오른쪽 버튼을 누른 순간 백기(flagWhite)에 'up'이라는 클래스 속성값이 추가되는 flagUp 함수를 완성해 주세요.
웹 페이지에서 contextmenu 이벤트가 발생하면 브라우저의 메뉴창이 나타나지 않도록 막아주세요.
참고로 flagUp 함수 안에 있는 setTimeout 함수는 두 번째 파라미터로 전달한 값의 밀리초 만큼의 시간 이후에 첫 번째 파라미터로 전달한 함수를 실행시켜주는 함수입니다.

*/

const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset(){
  document.querySelector('.up').classList.remove('up');
}
function flagUp(e){

  if (e.button == 0) {  //왼쪽 마우스버튼 Click 
    flagBlue.classList.add('up') ;
  } else if ( e.button == 2) { //오른쪽 마우스 Click 
    flagWhite.classList.add('up');
  }
  setTimeout(reset,500);
}

document.addEventListener('mousedown',flagUp);
document.addEventListener('contextmenu', function (e) {e.preventDefault()});

