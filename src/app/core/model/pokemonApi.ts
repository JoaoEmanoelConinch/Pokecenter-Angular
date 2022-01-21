import { ObjStat } from "./objStat";
import { ObjType } from "./objType";
import { Sprites } from "./sprites";
import { ObjMove } from "./objMove";
import { Species } from "./species";

export interface PokemonApi{
  moves: ObjMove[],
  sprites: Sprites,
  types: ObjType[],
  stats: ObjStat[],
  species: Species
}
