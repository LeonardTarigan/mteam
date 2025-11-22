import cors from "@elysiajs/cors"
import { Elysia } from "elysia"

const app = new Elysia()
  .use(cors())
  .get("/", () => "HRIS API Ready")
  .get("/ping", () => "pong")
  .group("/attendance", (app) =>
    app.post("/check-in", () => {
      return { status: "success", timestamp: Date.now() }
    })
  )
  .listen(8080)

export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
