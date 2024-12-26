import { IAccount } from "@/Interface/Account";
import { atom } from "jotai";

export const accountAtom = atom(localStorage.getItem('account') as IAccount | null)