Bun.serve({
    port: 8080,
    hostname: 127.0.0.1,
    fetch(req){
        return new Response("Hello from Bun Server");
    }
});