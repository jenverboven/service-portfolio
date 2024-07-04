const socket = new WebSocket('ws://localhost:4002');

const arg1input = document.getElementById('arg1');
const arg2input = document.getElementById('arg2');

socket.onmessage = ({ data }) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(data);
    node.appendChild(textnode);
    document.querySelector('ul').appendChild(node);
};

document.querySelector('button').onclick = () => {
	const arg1 = arg1input.value;
	const arg2 = arg2input.value;

    const arguments = [arg1, arg2];

    socket.send(JSON.stringify(arguments));
};