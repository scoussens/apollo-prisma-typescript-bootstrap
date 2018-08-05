import { Context } from "../../utils";

export const UserQueries = {
    usersConnection: async (parent: any, args: any, context: Context, info: any) => {
        return context.db.query.usersConnection(args, info);
    },
    user: async (parent: any, args: any, context: Context, info: any) => {
        const { id } = args;
        return context.db.query.user({ where: { id } }, info);
    }
}