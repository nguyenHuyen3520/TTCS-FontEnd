import axiosClient from "./axiosClient";

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
    }

}

export default userApi;