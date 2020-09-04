import {
  LoadingManager,
} from "../../../src/Three.d.ts";
import { OBJLoader2 } from "./OBJLoader2.d.ts";

import { WorkerExecutionSupport } from "./obj2/worker/main/WorkerExecutionSupport.d.ts";

export class OBJLoader2Parallel extends OBJLoader2 {
  constructor(manager?: LoadingManager);
  preferJsmWorker: boolean;
  executeParallel: boolean;
  workerExecutionSupport: WorkerExecutionSupport;

  setJsmWorker(preferJsmWorker: boolean, jsmWorkerUrl: URL): this;
  setExecuteParallel(executeParallel: boolean): this;
  getWorkerExecutionSupport(): object;
  buildWorkerCode(): object;

  // @ts-ignore
  parse(content: ArrayBuffer): void;
}
