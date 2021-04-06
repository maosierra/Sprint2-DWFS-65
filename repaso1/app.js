// fetch("http://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         console.log(response);
//         if (response.status === 200) {
//             return response.json();
//         }
//     })
//     .then(info => {
//         info.forEach(post => {
//             console.log(post);
//         });
//     })
//     .catch(error => console.log(error));

let miArray = [1, 2, 3, 4, 5, 'texto ejemplo', true];

localStorage.setItem('ejemplo1', 'texto de ejemplo');

localStorage.setItem('miArray', JSON.stringify(miArray));

let miArrayObject = JSON.parse(localStorage.getItem('miArray'));
