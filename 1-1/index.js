/* 
li 태그이름을 가진 요소 노드를 만든 다음
그 요소 노드에 파라미터로 전달받은 오늘 할 일(text)을 담고
<ul id="to-do-list"></ul>태그의 마지막 자식 요소 노드로 추가하는
addNewTodo함수를 완성해 주세요.
*/

const ulObj = document.querySelector('#to-do-list');

function addNewTodo(todo) {
  const liObj = document.createElement('li');
  liObj.textContent=todo;
  ulObj.append(liObj);
  /* 
    ulObj.appendChild(liObj) ;
    
    append와 appendChild 차이점은 뭐지?

    appendChild 메서드는 append 메서드와는 다르게 오직 Node 객체만 받을 수 있습니다! 
    게다가 append는 여러 개의 노드와 문자를 추가할 수 있는 반면에 
    appendChild 메서드는 한번에 오직 하나의 노드만 추가할 수 있습니다

  */

}
addNewTodo('자바스크립트 공부하기');
addNewTodo('설거지 하기');
addNewTodo('커피마시기');


