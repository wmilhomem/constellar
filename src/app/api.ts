import { Hono } from "hono";

// Future: Import modules
// import { auth } from "@/modules/auth/routes";
// import { sessions } from "@/modules/sessions/routes";

const app = new Hono<{ Bindings: Env }>();

// API v1 Routes
const api = new Hono<{ Bindings: Env }>();

// api.route("/auth", auth);
// api.route("/sessions", sessions);

app.route("/api/v1", api);

export default app;
