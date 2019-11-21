import Loadable from "react-loadable";
import Loading from "app/utils/Loading";
import Auth from "app/services/Auth";

const withAuth = Auth("/login");

const DashboardLayout = Loadable({
  loader: () => import("app/layout/BasicLayout"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("app/modules/Dashboard"),
  loading: Loading
});

const dashboardRoutes = childs => {
  return {
    path: "/dashboard",
    component: DashboardLayout,
    routes: [
      {
        path: "/dashboard",
        title: "Dashboard",
        exact: true,
        component: withAuth(Dashboard)
      },
      ...childs
    ]
  };
};

export default dashboardRoutes;
