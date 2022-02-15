import axiosClient from "./axiosClient";
const header = {
    Authorization: "Bearer " + localStorage.getItem("accessToken")
}
const CourseApi = {
    getCourse: (params) => {
        const url = '/course/' + params;
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
        const url = "/list-myCourse";
        return axiosClient.post(url, params, header);
    },
    createSchedule: (params) => {
        const url = "/create-schedule";
        return axiosClient.post(url, params, header);
    },
    getSchedule: (params) => {
        const url = "/get-schedule";
        return axiosClient.get(url, params, header);
    },
    getScheduleOfCourse: (params) => {
        console.log("params", params)
        const url = "/get-schedule-of-course?course_id=" + params;
        return axiosClient.get(url, params, header);
    },
    getUserOfCourse: (params) => {
        const url = "/get-user-of-course?course_id=" + params;
        return axiosClient.get(url, params, header);
    },
    changeSchedule: (params) => {
        const url = "/changed-schedule";
        return axiosClient.post(url, params, header);
    },
    search: (params) => {
        const url = "/search?keyword=" + params;
        return axiosClient.get(url, params);
    }
}

export default CourseApi;