import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/", async () => {
  return { hello: "world" };
});

server.listen({
  port: 3000,
}),
  () => {
    console.log("Server is running on http://localhost:3000");
  };
