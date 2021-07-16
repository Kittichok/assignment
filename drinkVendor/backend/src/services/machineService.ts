import * as Koa from 'koa';
import { getConnection } from "typeorm"
import { Machine } from "../entity/Machine"
import { MachineStock } from "../entity/MachineStock"

const create = async (ctx: Koa.ParameterizedContext) => {
  //TODO validate body
  const body = ctx.request.body as Record<string, any>;
  const machine = {
    ...body
  } as Machine;
  const res =
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Machine)
      .values(machine)
      .execute()
  
  ctx.response.status = 201;
}

const getMachinePrductList = async (ctx: Koa.ParameterizedContext) => {

  const machineId = ctx.params.id

  const stocks =
    await getConnection()
      .getRepository(MachineStock)
      .createQueryBuilder()
      .leftJoinAndSelect("MachineStock.product", "product")
      .where("machineid = :id", { id: machineId})
      .getMany();
  
  ctx.body = stocks;

}

const getMachineList = async (ctx: Koa.ParameterizedContext) => {
  const machines =
    await getConnection()
      .getRepository(Machine)
      .createQueryBuilder()
      .getMany();
  
  ctx.body = machines;
}



export { create, getMachinePrductList, getMachineList }