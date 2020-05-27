const Mutations = {
    addUser: (_, {user}, {db}) => {
        return {status: 'success'};
    },
    deleteUser: (_, {id}, {db}) => {
        return {status: 'success'};
    }
}

export default Mutations;
