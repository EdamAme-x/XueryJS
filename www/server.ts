import { Context, Hono } from "https://deno.land/x/hono@v3.9.2/mod.ts";
import $ from "https://xueryjs.deno.dev/runtime/server.ts";

const app = new Hono();

app.get("/", (c: Context) => {
    return c.html($.html({
        $click: () => {
            console.log("hello");
        }
    }, "hello"));
})

app.get("/runtime/client.js", async (c: Context) => {

    const text = await Deno.readTextFile("./Xuery.min.js")

    return c.text(text, 200);
})

app.get("/runtime/server.ts", async (c: Context) => {

    const text = await Deno.readTextFile("./ssr/Xuery.ssr.ts")

    return c.text(text, 200);
})

Deno.serve(app.fetch)