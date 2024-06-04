import main from "../pages/Main";
import newPerson from "../pages/NewPerson";
import details from "../pages/Details";
import Vacancy_list from "../pages/Vacancy_list";
import DetailsVacancy from "../pages/DetailsVacancy";
import DetailsCompany from "../pages/DetailsCompany";


export const publicRoutes = [
    {path: '/', element: main, exact: true},
    {path: '/newperson', element: newPerson, exact: true},
    {path: '/details/:id', element: details, exact: true},
    {path: '/company', element: main, exact: true},
    {path: '/company/details/:id', element: DetailsCompany, exact: true},
    {path: '/vacancy', element: Vacancy_list, exact: true},
    {path: '/vacancy/details/:id', element: DetailsVacancy, exact: true},
    {path: '/stack/:stack', element:main, exact: true},
    {path: '/stack/:stack/frame/:frame', element:main, exact: true},
    {path: '/vacancy/stack/:stack', element:Vacancy_list, exact: true},
    {path: '/vacancy/stack/:stack/frame/:frame', element:Vacancy_list, exact: true},
]
