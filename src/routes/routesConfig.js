import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from "@containers/NotFoundPage";

const routesConfig = [
    {
        path:"/",
        element: HomePage,
    },
    {
        path:"/People",
        element: PeoplePage,
    },
    {
        path:"/People/:id",
        element: PersonPage,
    },
    {
        path: "/not-found",
        element: NotFoundPage,
    },
    {
        path:"*",
        element: NotFoundPage,
    }
];

export default routesConfig;