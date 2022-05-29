import Icon from "@mui/material/Icon";

const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small" color="fff">dashboard</Icon>,
        route: "/dashboard",
        component: "<p>Dashboard!<p/>"
    },
    {
        type: "collapse",
        name: "Backtesting",
        key: "backtesting",
        icon: <Icon fontSize="small">tables</Icon>,
        route: "/backtesting",
        component: "<p>Backtesting!<p/>"
    }
]

export default routes;


