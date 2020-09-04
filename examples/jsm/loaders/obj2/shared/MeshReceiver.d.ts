import {
  Mesh,
} from "../../../../../src/Three.d.ts";

import { MaterialHandler } from "./MaterialHandler.d.ts";

export class MeshReceiver {
  constructor(materialHandler: MaterialHandler);
  logging: {
    enabled: boolean;
    debug: boolean;
  };
  callbacks: {
    onParseProgress: Function;
    onMeshAlter: Function;
  };
  materialHandler: MaterialHandler;

  buildMeshes(meshPayload: object): Mesh[];
  setLogging(enabled: boolean, debug: boolean): void;
}
