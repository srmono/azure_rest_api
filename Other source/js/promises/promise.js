const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //console.log("User Available ");
        //var username = {user: "venkat"}
        resolve({user: "venkat"});
        //reject(new Error("No User"))
    }, 5000)
});

promise
    .then( res => console.log(res))
    .catch( err => console.log(err))
    