console.log(111111);
console.log(222222);
// setTimeout using asynchronous activity
setTimeout(() => console.log('aaaaaaa'), 5000);
// fetch using asynchronous activity
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
console.log(333333);
console.log(444444);
console.log(77777);
