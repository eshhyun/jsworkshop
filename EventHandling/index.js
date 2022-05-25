/*
이벤트 객체를 활용한 이벤트 핸들러, updateToDo 함수를 완성해 주세요. 

이 함수는 이벤트가 발생한 대상에 'done'이라는 class 속성값을 toggle하는 함수여야 합니다.

반복되는 부분들이 좀 더 간단하게 정리되도록 이벤트 핸들러를 등록하는 반복문을 작성해 주세요.

코드를 잘 작성했다면, 첫 번째 두 번째 할 일은 클릭했을 때 'done'이라는 class 속성값이 toggle되면서 
스타일이 변하고, 
세 번째 할 일은 클릭을 해도 아무런 변화가 없어야 합니다.
*/

const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children ;

function itemToggle(e) {

  e.target.classList.toggle('done');

}

for ( let item of items) {
  item.addEventListener('click',itemToggle);

}

items[2].removeEventListener('click',itemToggle);

