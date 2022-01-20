import { Move } from "./move";
import { ObjStat } from "./objStat";
import { ObjType } from "./objType";
import { Sprites } from "./sprites";

export interface PokemonApi{
  moves: Move[],
  sprites: Sprites,
  type: ObjType[],
  Stats: ObjStat[]
}
