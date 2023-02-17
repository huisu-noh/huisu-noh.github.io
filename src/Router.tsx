import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Projects from './Screens/Projects/Projects'
import Experiences from './Screens/Experiences'
import Certificate from './Screens/Certificate'
import Book from './Screens/Book'
import Root from './Root'
import NotFound from './Screens/NotFound'
import ErrorComponent from './Screens/ErrorComponent'
import Project from './Screens/Projects/Project'

const router = createBrowserRouter([{
    path: '/',
    // 부모로 인식 
    element: <Root/>,
    children: [
        {
            path: '',
            element: <Home />,
            errorElement : <ErrorComponent/>
        },
        {
            path: 'about',
            element: <About />

        },
        {
            path: 'projects',
            element: <Projects />
        },
        {
            path: 'projects/:projectId',
            element: <Project />
    
        },
        {
            path: 'experiences',
            element: <Experiences />
        },
        {
            path: 'certificate',
            element: <Certificate />
        },
        {
            path: 'book',
            element: <Book/>
        }

    ],
    errorElement: <NotFound />
}]
)

export default router

