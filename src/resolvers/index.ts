import { UserMutations } from "./mutations/users";
import { UserQueries } from "./queries/users";

export const Resolvers = {
    Query: {
        ...UserQueries
    },
    Mutation: {
        ...UserMutations
    }
}