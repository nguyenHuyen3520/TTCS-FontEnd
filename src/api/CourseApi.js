import axiosClient from "./axiosClient";
const header = {
    Authorization: "Bearer " + localStorage.getItem("accessToken")
}
const CourseApi = {
    getCourse: (params) => {
        const url = '/course/' + params;
        console.log("params", params);
        return axiosClient.get(url, header);
    },
    addUserToCourse: (params) => {
        const url = "/add-user-to-course";
        return axiosClient.post(url, params, header);
    },
    DeleteUserFromCourse: (params) => {
        const url = "/delete-user-from-course";
        return axiosClient.post(url, params, header);
    },
    checkStatus: (params) => {
        const url = "/check-course";
        return axiosClient.post(url, params, header);
    },
    getListMyCourse: (params) => {
        console.log("params", params);
        const url = "/list-myCourse";
        return axiosClient.post(url, params, header);
    },
    createSchedule: (params) => {
        console.log("params", params);
        const url = "/create-schedule";
        return axiosClient.post(url, params, header);
    },
    getSchedule: (params) => {
        const url = "/get-schedule";
        return axiosClient.get(url, params, header);
    }
}

export default CourseApi;