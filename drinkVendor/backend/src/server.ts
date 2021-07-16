import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import * as machinesService from '../src/services/machineService';
import * as purchaseService from '../src/services/purchaseService';

const server = new Koa();
const router = new Router();


server.use(bodyParser());
server.use(cors());

router
  .get('/', (ctx : Koa.ParameterizedContext) => {ctx.body = 'Hello World'})
  .get('/machines', machinesService.getMachineList)
  .post('/machines', machinesService.create)
  .get('/machines/:id', machinesService.getMachinePrductList)
  .post('/purchase', purchaseService.buy);


server.use(router.routes());


export default server;