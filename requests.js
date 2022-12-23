//the request.open makes the function asynchronous because it takes the third argument and defaults it to true.

//old version without a Promise

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log('state changed', request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             callback('error!', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();
// };

//new version with Promise

const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject(`error getting resource at ${resource}`);
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('./luigi.json')
    .then((data) => {
        console.log(data);
        return getTodos('./mario.json'); //we added a return and it now return a new promise! if not, we would have to defeat the whole purpose of promises
    })
    .then((data) => {
        console.log(data);
        return getTodos('./shaun.json');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//callback hell(???) yes;

// getTodos('./luigi.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         getTodos('/mario.json', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 getTodos('/shaun.json', (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// console.log('3');
// console.log('4');

//Promises

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch some data
//         //if success:
//         resolve('some data');
//         reject('some error');
//     });
// };

//.then uses data that we passed into the RESOLVE above!

//this might look confusing, below is another method to write this

// getSomething().then(
//     (data) => {
//         console.log(data);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

//.then takes two functions that take data or error and can do something with it

//instead of adding the second function, we can add on the catch method!

// getSomething()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
