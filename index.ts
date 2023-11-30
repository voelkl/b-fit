// server.ts
import { Elysia, t } from "elysia";
import { html } from '@elysiajs/html'
import { cors } from '@elysiajs/cors'
import { EventsDatabase } from './db.js';

new Elysia()
  .use(cors())
  .use(html())
  .decorate("db", new EventsDatabase())
  .get("/", async () => Bun.file('./index.html'))
  .get("/events", ({ db }) => db.getEvents())
  .post(
    "/events",
    async ({ db, body }) => {
      const id = (await db.addEvent(body)).id
      return { success: true, id };
    },
    {
      body: t.Object({
        weight: t.Number(),
        date: t.String()
      }),
    },
  )
  .put(
    "/events/:id",
    ({ db, params, body }) => {
      try {
        db.updateEvent(parseInt(params.id), body) 
        return { success: true };
      } catch (e) {
        return { success: false };
      }
    },
    {
      body: t.Object({
        weight: t.Number(),
        date: t.String()
      })
    },
  )
  .delete("/events/:id", ({ db, params }) => {
    console.log(params)
    try {
      db.deleteEvent(parseInt(params.id))
      console.log("Event deleted successfully")
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  })
  .listen(3300, () => console.log("Server started on port 3300"));