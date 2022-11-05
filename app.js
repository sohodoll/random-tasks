//--sync

// console.log(' I ');

// console.log(' eat ');

// console.log(' ice cream ');

// console.log(' with a ');

// console.log(' spoon ');

//--async

// console.log(' I ');

// console.log(' eat ');

// setTimeout(() => {
//     console.log(' ice cream ');
// }, 4000);

// console.log(' with a ');

// console.log(' spoon ');

//--callback

// function one(call_two) {
//     console.log('step 1 complete. PLease call step 2');
//     call_two();
// }

// function two() {
//     console.log('step 2');
// }

// one(two);

//--callback with ice cream production

// order -> fetch ingredients -> start production -> serve the ice cream
// kitchen = front-end; stock = back-end

let stock = {
    fruit: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    topping: ['chocolate', 'peanuts']
}

let isOpen = false;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(() => {
                resolve();
            }, ms);
        } else {
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen() {
    // console.log('taking order');
    // await time(3000);
    // await time(2000);
    // console.log('kitchen process finished');
    try {
        console.log('we got the order');
        await time(3000);
        console.log(`${stock.fruit[0]} selected`);
        await time(1000);
        console.log('prod has started');
        await time(2000);
        console.log('fruit chopped');
        await time(3000);
        console.log(`mixing ${stock.liquid[0]} and ${stock.liquid[1]} `);
        await time(2000);
        console.log(`adding ${stock.holder[0]} holder`);
        await time(2000);
        console.log(`adding ${stock.topping[0]}`);
        await time(1000);
        console.log('serving ice cream');
    }
    catch(err) {
        console.log('we have an error in async');
    }
    finally {
        setTimeout(() => {
            console.log('day ended');
        }, 2000);
    }
}

kitchen()
// .then(() => {
//     setTimeout(() => {
//         console.log('I am already at home!');
//     }, 2000);
// })
// .catch(() => {
//     console.log('meh');
// })

console.log('--we are cleaning the dishes in the meantime--');
console.log('--we are cleaning in the meantime--');
//--promises with async await

// let toppingChoice = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Which topping?'));
//         }, 3000);
//     })
// }

// async function kitchen() {
//     console.log('a');
//     console.log('b');
//     console.log('c');
//     await toppingChoice();
//     console.log('d');
//     console.log('e');
// }

// kitchen();

// console.log('cleaning tables');
// console.log('doing dishes');

// async function order() {
//     try {
//         await abc;
//     }
//     catch(err) {
//         console.log('abc doesn\'t exist', err);
//     }
//     finally {
//         console.log('always running this');
//     }

// }

// order()
// .then(() => {
//     console.log('in the then');
// })

//--promises

// let order = (time, work) => {

//     return new Promise ((resolve, reject) => {
//         if (isOpen) {

//             setTimeout(() => {
//                 resolve(work());
//             }, time);

//         } else {
//             reject(console.log('shop is closed'));
//         }
//     })
// }

// order(2000, () => console.log(`${stock.fruit[0]} selected`))

// .then(() => {
//     return  order(0000, () => console.log('prod has started'));
// })
// .then(() => {
//     return  order(2000, () => console.log('fruit chopped'));
// })
// .then(() => {
//     return  order(1000, () => console.log(`mixing ${stock.liquid[0]} and ${stock.liquid[1]} `));
// })
// .then(() => {
//     return  order(1000, () => console.log('machine activated'));
// })
// .then(() => {
//     return  order(2000, () => console.log(`adding ${stock.holder[0]} holder`));
// })
// .then(() => {
//     return  order(3000, () => console.log(`adding ${stock.topping[0]}`));
// })
// .then(() => {
//     return  order(1000, () => console.log('serving ice cream'));
// })
// .catch(() => {
//     console.log('customer left')
// })
// .finally(() => {
//     return  order(3000, () => console.log('closing shop'));
// })


//--callback hell

// let order = (fruit_name, call_production) => {

//     setTimeout(() => {
//         console.log(`${stock.fruit[fruit_name]} was selected`);
//         call_production();
//     }, 2000);

// }

// let production = () => {

//     setTimeout(() => {
//         console.log('prod started');

//         setTimeout(() => {
//             console.log('fruit chopped');

//             setTimeout(() => {
//                 console.log(`${stock.liquid[0]} and ${stock.liquid[1]} mixed`);

//                 setTimeout(() => {
//                     console.log('machine activated');

//                     setTimeout(() => {
//                         console.log(`adding ${stock.holder[0]} holder`);

//                         setTimeout(() => {
//                             console.log(`adding ${stock.topping[0]}`);

//                             setTimeout(() => {
//                                 console.log('serving ice cream');
//                             }, 2000);

//                         }, 3000);

//                     }, 2000);

//                 }, 1000);

//             }, 1000);

//         }, 2000);

//     }, 0)
// }

// order(0, production);


