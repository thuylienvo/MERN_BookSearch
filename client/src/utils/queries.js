import gql from '@apollo/client';

export const GET_Me = gql`
    {
        me {
            _id
            username
            bookCount
            savedBooks {
              bookId
              image
              authors
              title
              link
              description
            }
        }
    }
`;

