import ColaGenerator from "./js/colaGenerator.js";
import VendingMachoneFunc from './JS/vendingMachineFunction.js';

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const vendingMachine = new VendingMachoneFunc()
vendingMachine.setup()