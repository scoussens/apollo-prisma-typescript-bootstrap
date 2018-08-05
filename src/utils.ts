import { Prisma } from "./generated/prisma";

export interface Context {
    db: Prisma
    req: any
    res: any
}