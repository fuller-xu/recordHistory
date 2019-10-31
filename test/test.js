setTimeout(() => {
    console.log("1");

    new Promise(resolve => {
        resolve();
    }).then(() => {
        console.log("2");
    });
}, 0);

setTimeout(() => {
    console.log("3");
}, 0);

new Promise(resolve => {
    resolve();
}).then(() => {
    console.log("4");

    new Promise(resolve => {
        resolve();
    }).then(() => {
        console.log("5");
    });

    setTimeout(() => {
        console.log("6");
    }, 0);
});

new Promise(resolve => {
    resolve();
}).then(() => {
    console.log("7");
});
