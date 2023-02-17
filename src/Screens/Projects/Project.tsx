import { useParams } from "react-router-dom"

function Project () {
    const params = useParams()
    console.log(params)
    return <div>프로젝트</div>
}

    export default Project 

