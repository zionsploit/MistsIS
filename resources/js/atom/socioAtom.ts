import { ISocioCulturalEvents, ISocioCulturalOfficers } from "@/Interface/SocioCultural";
import { atom } from "jotai";

export const socioEventsAtom = atom([] as ISocioCulturalEvents[])

export const socioOfficersAtom = atom([] as ISocioCulturalOfficers[])