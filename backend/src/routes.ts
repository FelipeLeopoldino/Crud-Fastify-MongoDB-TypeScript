import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CretateCustomerController } from "./controllers/CretateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CretateCustomerController().handle(request, reply);
  });

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply);
  });

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });
}
