import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { Page404 } from "../pages/page_404";
import { Setting } from "../pages/setting";
import { UserManagement } from "../pages/user_management";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route
        path=""
        render={(props) => {
          return (
            <Switch>
              {homeRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  <Header />
                  {route.children}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
