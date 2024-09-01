import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const costumerService = new DeleteCustomerService();
    const contumer = await costumerService.execute({ id });

    reply.send(contumer);
  }
}

export { DeleteCustomerController };
