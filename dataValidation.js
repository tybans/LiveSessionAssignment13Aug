function validateUser (user){
    const validationPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("validating...");
            if(userName >= "abc"){
                resolve({userName:"Taiyab"});
            }
            else if(email === "@" && email === "."){
                resolve({email:"taiyab@gmail.com"});
            }
            else if(age >= 18){
                resolve({age:25});
            }
            else{
                reject("Error message")
            }
        },2000)
    })
    return validationPromise;
}
const validation = validateUser("Taiyab");
validation.then((user) =>{
    console.log(user);

    
})
validation.catch((user) =>{
    console.log(user);
})