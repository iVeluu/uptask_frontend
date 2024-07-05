import api from "@/lib/axios";
import { dashboardProjectSchema, ProjectFormData } from "../types";
import { isAxiosError } from "axios";

export async function createProject( formData : ProjectFormData ) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
       if(isAxiosError(error) && error.response){
        throw new Error( error.response.data.error)
       }
    }
}

export async function getProjects() {
    try {
        const { data } = await api('/projects')
        const result = dashboardProjectSchema.safeParse(data)
        if( result.success ) {
            return result.data
        }
    } catch (error) {
       if(isAxiosError(error) && error.response){
        throw new Error( error.response.data.error)
       }
    }
}