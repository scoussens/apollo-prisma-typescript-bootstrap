import { Context } from "../../utils";

export const UserMutations = {
    createUser: async (parent: any, args: any, ctx: Context, info: any) => {
        const { name } = args;

        return ctx.db.mutation.createUser(
            {
                data: {
                    name: name
                }
            },
            info
        );
    }
} 