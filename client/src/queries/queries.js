import { gql } from 'apollo-boost';


const getBooksQuery = gql`
  {
    books{
      id
      name
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors{
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name:String!, $genre:String!, $author:ID!) {
    addBook(name: $name, genre: $genre, author: $author){
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id:ID){
    book(id: $id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;
export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };