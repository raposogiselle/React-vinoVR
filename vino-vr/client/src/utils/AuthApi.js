import React from "react";

export default React.createContext(null);




//import axios from "axios";

// const AuthApi = () => {
//         return ( {
//             getLogin(id){
//                 return axios.get(`/api/users/${id}`)
//             }, 
    
//             //will get all users based on setup
//             createUser(user){
//                 return axios.post("/api/users", user)
//             }
//         })    
//     };

// export default AuthApi;



//---------ORIGINAL CODE----------

// export default {
//     getLogin(id){
//         return axios.get(`/api/users/${id}`)
//     }, 

//     //will get all users based on setup
//     createUser(user){
//         return axios.post("/api/users", user)
//     }
// }


// ------2nd attempt----
// import axios from "axios";

// export default {
//     getLogin: function(id) {
//         return axios.get(`/api/users/${id}`);
//     },

//     createUser: function(user){
//         return axios.post("/api/users", user)
//     }
// };