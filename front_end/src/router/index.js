import main from "../pages/Main";
import newPerson from "../pages/NewPerson";


export const publicRoutes = [
    {path: '/', element: main, exact: true},
    {path: '/newperson', element: newPerson, exact: true}
]
