import { NoteFormData } from "@/types/index"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { useLocation, useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNote } from "@/api/NoteAPI"
import { toast } from "react-toastify"

export default function AddNoteForm() {

    const params = useParams()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)

    const taskId = queryParams.get('viewTask')!
    const projectId = params.projectId!

    const initialValues : NoteFormData = {
        content: ''
    }

    const { register, handleSubmit, reset, formState: {errors} } = useForm({defaultValues: initialValues})

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: createNote,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({ queryKey: ['task', taskId] })
        }
    })

    const handleAddNote = ( formData : NoteFormData ) => {
        mutate({ projectId, taskId, formData })
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(handleAddNote)}
            className="space-y-3"
            noValidate
        >   
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="content">Crear Nota</label>
                <input 
                    type="text" 
                    id="content" 
                    placeholder="Contenido de la nota" 
                    className="w-full p-3 border-gray-300" 
                    {...register('content', {
                        required: 'El Contenido de la nota es obligatorio'
                    })}
                />
                {errors.content && (
                    <ErrorMessage>{errors.content.message}</ErrorMessage>
                )}
            </div>

            <input type="submit" value="Crear Nota" className="bg-fuchsia-600 hover:bg-fuchsia-700 font-bold uppercase cursor-pointer w-full p-2 text-white " />
        
        </form>
    )
}
