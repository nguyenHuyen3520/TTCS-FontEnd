import axiosClient from "./axiosClient";
const header= {
    Authorization: "Bearer "+localStorage.getItem("accessToken")
}
const userApi = {
    getAll: (params)=>{
        const url = "/users";
        return axiosClient.get(url, { params})
    },
    getUser: (id) =>{
        const url = '/users/' + id;
        return axiosClient.get(url);
    },
    deleteUser: (id) =>{
        const url = '/users?id=' + id;
        return axiosClient.delete(url);
    },
    signup: (params)=>{
        const url= "/signup";
        return axiosClient.post(url, params);
    },
    login: (params)=>{
        const url = "/login";
        return axiosClient.post(url, params);
    },
    getProfile: ()=>{
        const url = "/profile";        
        return axiosClient.get(url, header);
    }

}

export default userApi;