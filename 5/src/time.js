import moment from "moment";

export const getTimeDonat =  (data) => {
    return moment().format('MMMM Do YYYY, h:mm:ss a - ')
}