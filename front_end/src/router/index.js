import main from "../pages/Main";
import workers from "../pages/Workers";
import analytics from "../pages/Analytics"
import details from "../pages/Details";
import w_details from "../pages/WorkerDetails";


export const publicRoutes = [
    {path: '/', element: main, exact: true},
    {path: '/workers', element: workers, exact: true},
    {path: '/workers/details', element: w_details, exact: true},
    {path: '/details', element: details, exact: true},
    {path: '/analytics', element: analytics, exact: true},
]
