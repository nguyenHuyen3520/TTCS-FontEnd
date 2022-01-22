import axiosClient from "./axiosClient";
const header = {
    Authorization: "Bearer " + localStorage.getItem("accessToken")
}
const AdminApi = {
    getListUser: () => {
        const url = '/admin/list-user';
        return axiosClient.get(url, header);
    },
    getListCourse: () => {
        const url = '/list-course';
        return axiosClient.get(url, header);
    },
    getTypeCourses: () => {
        const url = '/admin/list-typeCourses';
        return axiosClient.get(url, header);
    },
    createCourse: (params) => {
        const url = '/admin/create-course';
        return axiosClient.post(url, params);
    },
    createUser: (params) => {
        const url = '/admin/create-user';
        return axiosClient.post(url, params);
    },
    deleteUser: (id) => {
        const url = '/admin/delete-user?id=' + id;
        return axiosClient.delete(url, header);
    },
    updateUser: (params) => {
        const url = '/admin/update-user';
        return axiosClient.patch(url, params, header);
    },
    updateCourse: (params) => {
        const url = '/admin/update-course';
        return axiosClient.patch(url, params, header);
    },
    getDetailCourse: (params) => {
        const url = '/admin/get-detail-course?Course_id=' + params.Course_id;
        return axiosClient.get(url, header);
    },
    getListUserOfType: (params) => {
        const url = '/admin/get-list-users?typeUser=' + params.typeUser;
        return axiosClient.get(url, header);
    }

}

export default AdminApi;