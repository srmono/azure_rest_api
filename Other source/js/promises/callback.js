// company: login -> username, and password,  return username 
// username -> projects done by user return projects 
// project name => Project details  returns project details 

function userLogin(uname, pw, callback){
    setTimeout( () => {
        console.log("User Logged in");
        callback({username: uname});
    }, 5000)
}

function getUserProjects(uname, callback){
    setTimeout( () => {
        console.log("sending projects list");
        callback(["project1", "project2", "project3"]);
    }, 5000)
}
1
function getProjectDetails(project, callback){
    setTimeout( () => {
        console.log("sending project details");
        callback("Project details");
    }, 5000)
}

userLogin("bvsrao", "123456", (user) => {
    console.log(user);
    getUserProjects(user, (projects) => {
        console.log(projects)
        var project = projects[0];
        getProjectDetails(project, (details) => {
            console.log(details)
        })
    })
})




