function userLogin(uname, pw){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("User Logged in");
            resolve({username: uname});
        }, 5000)
    })   
}
function getUserProjects(uname){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("sending projects list");
            resolve(["project1", "project2", "project3"]);
        }, 5000)
    })
}
function getProjectDetails(project){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("sending project details");
            resolve("Project details");
        }, 5000)
    })
}

// userLogin("bvsrao", "123345")
//     .then( user => getUserProjects(user))
//     .then( projects => getProjectDetails(projects[0]))
//     .then( details => console.log(details))
//     .catch( err => console.log(err))
//     .finally(() => console.log("done"))

//async await
// async function displayUserInfo(){
//     try {
//         let loggedInUser = await userLogin("bvsrao", "123345");
//         let projects = await getUserProjects(loggedInUser);
//         let projectDetails = await getProjectDetails(projects[0]);
//         console.log(projectDetails)
//     } catch (error) {
//         console.log(error.message)
//     }
// } 

//displayUserInfo()


const ig = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Instagram Data");
        resolve(["pic1", 'pic2'])
    }, 3000)
});

const fb = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Facebook Data");
        resolve(["post1", 'post2'])
    }, 3000)
});

var requests = [ig, fb]
Promise
    .all(requests)
    .then( (results) => {
        //console.log(results);
        let instagram = results[0];
        let facebook = results[1];
        console.log("Instagram: " + instagram)
        console.log("Facebook: " + facebook)
    })














