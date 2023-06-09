import {gql} from "@apollo/client";

export const GET_CHARACTERS = (page: number, name: string) => {
  return gql`
    query GetCharacters {
      characters(page: ${page}, filter: {name: "${name}"}) {
        results {
          id
          name
          image
          species
          status
        }
      }
    }
  `
}

export const GET_CHARACTER_BY_ID = (id: number) => {
  return gql`
    query {
      character(id: ${id}) {
        id,
        name,
        image,
        species,
        status,
        type,
        gender
        episode {
          id,
          name
        }
      }
    }
  `
}


