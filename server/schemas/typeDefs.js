const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    input BookDetails {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!, _id: ID): User
    }
    type Mutation {
        login(email: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookDetails): User
        deleteBook(bookId: String!): User
    }
`;





// export the typeDefs
module.exports = typeDefs;