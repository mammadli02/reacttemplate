import AdminPages from "../pages/Admin/AdminPages";
import AdminRooot from "../pages/Admin/AdminRooot";
import Add from "../pages/Main/Add";
import Author from "../pages/Main/Author";
import Detail from "../pages/Main/Detail";
import Edit from "../pages/Main/Edit";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
export const ROUTES=[
{
    path:"/",
    element:<MainRoot/>,
    children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/author',
            element:<Author/>
        },
        {
            path:'/add',
            element:<Add/>
        },
        {
            path:'/author/detail/:id',
            element:<Detail/>
        },
        {
            path:'author/edit/:id',
            element:<Edit/>
        },
        {
            path:'*',
            element:<NotFound/>
        }, 
    ]
},
        {
            path:'/admin',
            element:<AdminRooot/>,
            children:[
                {
                    path:'/admin',
                    element:<AdminPages/>
                },
            ]
        }
    ]




