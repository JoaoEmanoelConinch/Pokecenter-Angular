import { ObjStat } from "./objStat";
import { ObjType } from "./objType";
import { Sprites } from "./sprites";
import { ObjMove } from "./objMove";

export interface PokemonApi{
  moves: ObjMove[],
  sprites: Sprites,
  types: ObjType[],
  stats: ObjStat[]
}
