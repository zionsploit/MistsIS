import { IAccount } from "@/Interface/Account";

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        accountUser: IAccount;
    };
};
