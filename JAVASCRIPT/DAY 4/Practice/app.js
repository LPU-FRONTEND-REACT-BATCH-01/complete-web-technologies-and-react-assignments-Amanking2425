

let users = {
    id:1,
    username:"Aman",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"8757483787",
    skills:{
        frontend:["react","HTML","CSS"],
        backend:["Java","SpringBoot"]
    }
}

const {
    id,
    username,
    phone,
    userLocation: { city, state },
    skills: { frontend, backend }

} = users;

console.log(id,username,phone,city,state,frontend,backend);


