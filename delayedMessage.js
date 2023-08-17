function delayedMessage() {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("This message is delayed");
            resolve("delayed after 2 seconds")
        }, 2000);
    
    })
    return promise;
   

}

// one way
// const message = delayedMessage(1);
// message.then((user) =>{
//     console.log(user);
// })


/// other way
async function promiseResolve(){
    const messageDelayed = await delayedMessage(7);
    console.log(messageDelayed);
}
promiseResolve();
