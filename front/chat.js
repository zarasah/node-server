const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
});

socket.on('chat message backend', (info) => {
    const item = document.createElement('li');
    item.textContent = info;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
