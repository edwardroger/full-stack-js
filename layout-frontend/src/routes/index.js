import HomeLayout from "../containers/layouts/HomeLayout";
import DashboardLayout from "../containers/layouts/DashboardLayout";
import HomePage from "../containers/pages/Home/HomePage";
import Product from "../containers/pages/Home/Product";
import DashboardHome from "../containers/pages/Dashboard/DashboardHome";

const publicRoutes = [
    { path: '/', component: HomePage, layout: HomeLayout },
    { path: '/product', component: Product, layout: HomeLayout },
];

const privateRoutes = [
    { path: '/dashboard', component: DashboardHome, layout: DashboardLayout },
];

const adminRoutes = [
    { path: '/dashboard', component: DashboardHome, layout: DashboardLayout },
];

export {
    publicRoutes,
    privateRoutes,
    adminRoutes,
}