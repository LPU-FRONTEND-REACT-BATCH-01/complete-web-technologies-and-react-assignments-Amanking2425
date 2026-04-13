let users = [
    {
        username: "abc1",
        password : "key1"
    },
    {
        username: "abc2",
        password: "key2"
    },
    {
        username: "abc3",
        password: "key3"
    },
    {
        username: "abc4",
        password: "key4"
    }
]

let input = {
    username: "abc3",
    password: "key3"
}

let result = users.find(ele => ele.username === input.username &&  ele.password === input.password);

if(result){
    console.log("User found! and Login successfully");
}else{
    console.log("Username or Password is incorrect");
    
}