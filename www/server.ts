import { Context, Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

app.get("/", async (c: Context) => {
    return c.html("<p>hi!</p>");
})

app.get("/runtime/client", async (c: Context) => {

    const text = await Deno.readTextFile("./Xuery.min.js")

    return c.text(text, 200);
})

app.get("/runtime/server", async (c: Context) => {

    const text = await Deno.readTextFile("./ssr/Xuery.ssr.js")

    return c.text(text, 200);
})

Deno.serve(app.fetch)