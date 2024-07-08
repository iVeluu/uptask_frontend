import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardView from "@/views/DashboardView";
import AppLayout from "@/layouts/AppLayout";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailView from "./views/projects/ProjectDetailView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index/>
                    <Route path='/projects/create' element={<CreateProjectView />} />
                    <Route path='/projects/:projectId' element={<ProjectDetailView />} />
                    <Route path='/projects/:projectId/edit' element={<EditProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 