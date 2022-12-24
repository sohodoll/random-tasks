//new way of making request in fetch API built in into the language

// fetch('./luigi.json')
//     .then((response) => {
//         //fetch returns a promise!
//         // console.log('resolved', response);
//         return response.json(); //this also returns a promise! so we can just assign it to a variable!
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('error!', err);
//     });

//the fetch promise is only ever rejected is we get a network error!

//async await way
//when we call an async function it's always returning a promise!
const getTodos = async () => {
    const response = await fetch('./luigi1.json'); //it is not blocking the rest of the call stack because async functions don't do it
    //we are only stalling it inside this async function
    if (response.status !== 200) {
        throw new Error('response status is not 200!'); //when we throw an error, the promise returned by the async function is rejected!
    }
    const data = await response.json(); //if we have an error in the API endpoint, here is the error, not above. so, we can throw our own error!
    return data;
};

console.log('other works is being done!111');

getTodos()
    .then((data) => {
        console.log('resolved', data);
    })
    .catch((err) => {
        console.log('error!', err.message);
    });

console.log('other works is being done!222');
