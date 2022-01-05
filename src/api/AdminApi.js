import axiosClient from "./axiosClient";
const header= {
    Authorization: "Bearer "+localStorage.getItem("accessToken")
}
const AdminApi = {
    getListUser: ()=>{
        console.log(header);
        const url= '/admin/list-user';
        return axiosClient.get(url, header);
    },
    getListCourse: ()=>{
        const url= '/list-course';
        return axiosClient.get(url, header);
    },
    getTypeCourses: () =>{
        const url = '/admin/list-typeCourses';
        return axiosClient.get(url, header);
    },
    createCourse: (params)=>{
        const url= '/admin/create-course';
        return axiosClient.post(url, params);
    },
    createUser: (params)=>{
        const url= '/admin/create-user';
        console.log("vao day");
        return axiosClient.post(url, params);
    }
}

export default AdminApi;