import { getConnection } from "typeorm"
import { Machine } from "../entity/Machine"
import { MachineStock } from "../entity/MachineStock"

const create = ctx => {
  console.log('created')
}

const getMachinePrductList = async ctx => {

  const machineId = ctx.params.id
  
  const stocks =
    await getConnection()
      .getRepository(MachineStock)
      .createQueryBuilder()
      .where("id = :id", { id: machineId})
      .getMany();
  
  ctx.body = stocks;

}

const getMachineList = async ctx => {
  
  const machines =
    await getConnection()
      .getRepository(Machine)
      .createQueryBuilder()
      .getMany();
  
  ctx.body = machines;
}



export { create, getMachinePrductList, getMachineList }