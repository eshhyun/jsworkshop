/*

textarea 태그에서 enter 키를 누르면 sendMyText 함수가 호출되는 코드를 추가해 주세요.

코드를 완성했을 때 아래 조건들이 지켜져야 합니다.

enter 키로 메시지를 전송하고 나면 textarea 태그는 초기화가 제대로 되어야 합니다.
shift + enter 일때는 줄바꿈이 일어나야 합니다.
keypress 타입으로 이벤트 핸들러가 등록되어야 합니다.

*/

const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText(e){

  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}
send.addEventListener('click', sendMyText);

function sendMyTextByEnter(e){

  if (e.key == 'Enter' && !e.shiftKey){
    sendMyText();
    e.preventDefault();
  }
}

input.addEventListener('keypress', sendMyTextByEnter);
