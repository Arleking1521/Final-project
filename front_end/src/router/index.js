import main from "../pages/Main";
import newPerson from "../pages/NewPerson";
import details from "../pages/Details";


export const publicRoutes = [
    {path: '/', element: main, exact: true},
    {path: '/newperson', element: newPerson, exact: true},
    {path: '/details/:id', element: details, exact: true},
]
