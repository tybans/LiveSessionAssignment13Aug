function validateUser (user){

    let {userName, Age, Email} = user;
    console.log(user);
    const validationPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("validating...");
            // console.log(userName);
            // console.log(Age);
            // console.log(Email);
            if(userName != "" && userName.length >= 3 && Age >= 18){

                resolve({username: user.userName, age: user.Age, email: user.Email});
            }
            else{
                reject("data not found...");
            }
        },2000);
    });
    return validationPromise;
};


async function getPromise(){
    try{
        const validation = await validateUser({userName: "Taiyab", Age: 29, Email: "taiyab@gmail.com"});
    console.log(validation);
    }
    catch(error){
        console.log(error);
    }
}
getPromise();


// const validation = validateUser({userName: "Taiyab", Age: 5, Email: "taiyab@gmail.com"});
// validation.then((user) =>{
//      console.log(user);

// })
// .catch((error) =>{
//     console.log(error);
// })
