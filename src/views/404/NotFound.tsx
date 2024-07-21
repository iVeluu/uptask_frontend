import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1 className="text-white text-4xl font-black text-center">Página No Encontrada</h1>
            <p className="mt-10 text-center text-white text-1xl">
                Tal vez quieras volver a {' '}
                <Link className="text-fuchsia-600" to={'/'}>Proyectos</Link>
            </p>
        </>
    )
}
