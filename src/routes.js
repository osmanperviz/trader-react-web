import Icon from "@mui/material/Icon";



const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: "<p>Dashboard!<p/>"
    }
]

export default routes;


