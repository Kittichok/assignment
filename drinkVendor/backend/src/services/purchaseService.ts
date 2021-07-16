import * as Koa from 'koa';
import { getConnection } from "typeorm";
import { MachineStock } from '../entity/MachineStock';
import * as notifyService from './notifyService';

const buy = async (ctx: Koa.ParameterizedContext) => {
  const body = ctx.request.body as Record<string, any>;
  const machineId = body.machineId;
  const productId = body.productId;
  const quntity = body.productId;

  const product =
    await getConnection()
      .getRepository(MachineStock)
      .createQueryBuilder()
      .where("machineId = :id", { id: machineId })
      .where("productId = :id", { id: productId })
      .getOne();

  if (!product) {
    ctx.response.status = 400
  }

  const instock = product.stock - quntity;
  const alert = instock < 10

  if (alert) {
    const message = `Product ${productId} in Machine ${machineId} less than 10`
    notifyService.line(message)
  }

  await getConnection()
    .createQueryBuilder()
    .update(MachineStock)
    .set({ stock: instock  })
    .where("machineId = :id", { id: machineId })
    .where("productId = :id", { id: productId })
    .execute();
  
  ctx.response.status = 204
}

export { buy }