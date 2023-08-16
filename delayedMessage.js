function delayedMessage() {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("This message is delayed");
            resolve("delayed")
        }, 2000);
    
    })
    return promise;
   

}

const message = delayedMessage(1);
message.then((user) =>{
    console.log(user);
})

