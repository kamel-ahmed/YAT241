                // how to return multiple values in the same function

// function calculator(num1,num2){
//     function sum(){
//         return num1 + num2
//     }
//     function diff(){
//         return num1 - num2
//     }
//     function mul(){
//         return num1 * num2
//     }
//     function div(){
//         return num1 / num2
//     }
//     return{sum , diff , mul , div}
// }
// console.log(calculator().diff());



// function myFunc(){
//     let x=5
//     let y=10
//     return {x , y}         // you should but two values in a object  { x , y }
// }
// console.log(myFunc());


// ================================================ 

// const testObj = {
//     a:10 , 
//     b:10 , 
//     c: "some text",
//     d: true, 
//     e: 30,
// }

// Object.prototype.num=50;

// function sumObject(obj){

//     let total = 0          // inital value to dont return undefiend ()

//     // eteration ==> looping
//     for (let key in obj){
//         console.log(key);
//         if(typeof obj[key] =="number" ){

//         }
        
//     }

// }

// ================================================ 

/**
 * fetch 
 * ================================================
 * API's 
 * Http
 * API's => application programming interface
 * ================================================
 * Http Methods
 * GET    => Read
 * POST   => create
 * PUT    => Replace
 * PATCH  => Update one
 * DELETE => Delete
 * 
 */
var firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")

let displayUsers = document.querySelector("displayUsers")



// get all users
getUsers()

async function getUsers(){
    let response = await fetch("http://localhost:3000/users")
    let data = await response.json()
    console.log(data);
    
    
    if(data){
        const htmlContent = data.map((user)=>{
            return `<div class="mx-auto p-1 user" id=${user.id}>
                        <h2>user name: ${user.name}</h2>
                        <p>user Email: ${user.email}</p>
                        <button type="submit" class="rounded-md mx-auto bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 ">update</button>
                        <button type="submit" class="rounded-md mx-auto bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 ">Delete</button>

                    </div>`
        }) 
        document.getElementById('displayUsers').innerHTML = htmlContent
    }else{
        const htmlContent =
        `<div>
            <h2>there is no users</h2>
        </div>`
        document.getElementById('displayUsers').innerHTML = htmlContent
    }
} 
    

// add new user
function addUser(){
    if(!firstName.value || !lastName.value || !email.value){
        alert("Please enter full name and Email")
    }else{

        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body :JSON.stringify({
                "name": firstName.value + " " + lastName.value,
                "email": email.value  
            })
        })

    }
}


// Update user
function updateUser(id){

}


// delete user
function deleteUser(id){

}