import { Context, Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

app.get("/runtime", async (c: Context) => {

    const text = await Deno.readTextFile("./Xuery.min.js")

    return c.text(text, 200);
})

Deno.serve(app.fetch)