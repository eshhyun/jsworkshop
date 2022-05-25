/*
이벤트 위임을 활용할 수 있도록 이벤트 핸들러 updateToDo 함수를 완성해 주세요. 
updateToDo는 이벤트가 발생한 대상이 item이라는 클래스 속성 값을 가지고 있을 때 동작해야 합니다.
이벤트 핸들러를 li 태그 각각에 등록하는 것이 아니라 하나의 태그에만 등록해 주세요.

코드를 잘 작성했다면,

첫 번째 두 번째 할 일 뿐만아니라 자바스크립트로 추가한 네 번째 할 일을 클릭했을 때도 'done'이라는 class 속성값이 toggle되면서 스타일 변해야 합니다.
세 번째 할 일은 클릭을 해도 아무런 변화가 없어야 합니다.
*/

const toDoList = document.querySelector('#to-do-list');

function updateToDo(e){

  if ( e.target.classList.contains('item') ){
    e.target.classList.toggle('done') ;
  }

}

toDoList.addEventListener('click',updateToDo);

const item = document.createElement('li');
item.textContent = '4번쨰 추가한 할일';
item.classList.add('item');
toDoList.append(item);

toDoList.children[2].addEventListener('click',function(e){e.stopPropagation()});




