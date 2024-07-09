import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, Task, TaskFormData } from '@/types/index';

type TaskAPI = {
    formData : TaskFormData,
    projectId : Project['_id']
    taskId: Task['_id']
}

export async function createTask ( {formData, projectId } : Pick<TaskAPI, 'formData' | 'projectId'>) {
    try {
        const url = `/projects/${projectId}/tasks`
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getTaskById ( { taskId, projectId } : Pick<TaskAPI, 'taskId' | 'projectId'>) {
    try {
        const url = `/projects/${[projectId]}/tasks/${taskId}`
        const { data } = await api(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateTask ( { projectId, taskId, formData } : Pick<TaskAPI, 'projectId' | 'taskId' | 'formData'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.put<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteTask ( { taskId, projectId } : Pick<TaskAPI, 'taskId' | 'projectId'>) {
    try {
        const url = `/projects/${[projectId]}/tasks/${taskId}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}