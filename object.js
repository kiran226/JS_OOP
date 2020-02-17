// var userOne={
//     email:'ram@india.com',
//     name:"ram",
//     login(){
//         console.log(this.email, 'has logged in' );
//     },
//     logout(){
//         console.log(this.email , 'has logged out');
//     }
// }
// console.log(userOne.name);


// var userTwo={
//     email:'kiran@india.com',
//     name:"kiran",
//     login(){
//         console.log(this.email, 'has logged in' );
//     },
//     logout(){
//         console.log(this.email , 'has logged out');
//     }
// }
// console.log(userOne.name);

//To overcome the above, we will make use of classes
//Inside the class, first we need to create a constructor function, constructor is a function 
//where we can create an object.
//Here, constructor function in this class is responsible for creating new user object

//new keyword creates an empty object{}
//new keyword sets the value of 'this' to be the new empty object
//new keyword calls the constructor method

// class User{
//     constructor(email,name){
//         this.email=email;
//         this.name=name;
//         this.score=0;
//     }
//     login(){
//         console.log(this.email,'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email,'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email,'score is now',this.score);
//         return this;
//     }
// }

// var userOne= new User('ram@india.com','ram');
// var userTwo= new User('kiran@india.com','kiran');
// console.log(userOne);
// console.log(userTwo);
// userOne.login();
// userTwo.logout();

//method chaining - When a method is called,it should never return the value of undefined.To over come this,
//we return the instance of that object by using 'this'.

// userOne.login().updateScore().updateScore().logout();

//class Inheritance

//Here we will create an Admin class and need access to User class and in Admin class few methods will be created

// class User{
//     constructor(email,name){
//         this.email=email;
//         this.name=name;
//         this.score=0;
//     }
//     login(){
//         console.log(this.email,'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email,'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email,'score is now',this.score);
//         return this;
//     }
// }

// class Admin extends User{
//     deleteUser(user){
//         users= users.filter(u=>{
//             return u.email!=user.email;
        //when it returns true, the user won't be deleted
        //when it returns false. the user will be deleted
//         })
//     }
// }

// var userOne= new User('kiran@gmail.com','kiran');
// var userTwo= new User('ram@gmail.com','ram');
// var admin= new Admin('niranjan@gmail.com','niranjan');

// var users=[userOne,userTwo,admin];
// admin.deleteUser(userOne);
// admin.deleteUser(admin);
// console.log(users);


//prototype

// function User(email,name){
//     this.email=email;
//     this.name=name;
//     this.online=false;
//     this.login=function(){
//         console.log(this.email, 'has logged in' );
//     }
// }

// var userOne= new User('kiran@gmail.com','kiran');
// var userTwo= new User('ram@gmail.com','ram');
// console.log(userOne);
// userTwo.login(); 



//Defining methods using prototype

// function User(email,name){
//     this.email=email;
//     this.name=name;
//     this.online=false;
// }
// User.prototype.login= function(){
//     this.online=true;
//     console.log(this.email, 'has logged in')
// }
// User.prototype.logout=function(){
//     this.online=false;
//     console.log(this.email,'has logged out');
// }

// var userOne= new User('kiran@gmail.com','kiran');
// var userTwo= new User('ram@gmail.com','ram');
// console.log(userOne);
// userTwo.login(); 


//Prototype inheritance

function User(email,name){
    this.email=email;
    this.name=name;
    this.online=false;
}
User.prototype.login= function(){
    this.online=true;
    console.log(this.email, 'has logged in')
}
User.prototype.logout=function(){
    this.online=false;
    console.log(this.email,'has logged out');
}

function Admin(...args){
    User.apply(this,args);
    this.role="Super Admin";
}
Admin.prototype= Object.create(User.prototype);

//adding extra method to Admin only
Admin.prototype.deleteUser= function(u){
    users=users.filter(user=>{
        return user.email!=u.email;
    })
}

var userOne= new User('kiran@gmail.com','kiran');
var userTwo= new User('ram@gmail.com','ram');
var admin= new Admin('niranjan@gmail.com','niranjan');

var users=[userOne,userTwo,admin];
console.log(admin); 





