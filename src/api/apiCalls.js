import axios from "axios";
import {environment} from "../environments/environment";

export const getAll = (body) => {
    return axios.post(environment.baseUrl+"/getAll",body);
}
export const createNote = (body) => {
    return axios.post(environment.baseUrl+"/createNote",body);
}
export const deleteNote = (id) => {
    return axios.delete(environment.baseUrl+"/deleteNote/"+id);
}
export const getNote = (id) => {
    return axios.get(environment.baseUrl+"/getNote/"+id);
}


