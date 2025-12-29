import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    // route("signup", "routes/signup.tsx"),
  ]),
] satisfies RouteConfig;
