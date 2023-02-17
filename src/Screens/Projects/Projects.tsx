import { Link } from 'react-router-dom'
import { projectDB } from './ProjectDB'

function Projects () {
    return (
    <div>
        <h1>프로젝트들</h1>
        <ul>
            {projectDB.map((project)=> (
                <li key={project.id}>
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Projects