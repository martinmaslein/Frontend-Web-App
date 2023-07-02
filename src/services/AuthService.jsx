import axiosAuthenticated from "../axios";
import axios from "axios";
import { apiURL } from "../utils/constantes";

export const login = async (data) => {
    try {
        const response = await axios.post(apiURL + `login`, data);
        return response;
    }
    catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axiosAuthenticated().post(apiURL + `logout`);
        return response;
    }
    catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    try {
        const response = await axiosAuthenticated().get(apiURL + `user`);
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const register = async (data) => {
    try {
        const response = await axios.post(apiURL + `register`, data);
        return response;
    }
    catch (error) {
        throw error;
    }
};