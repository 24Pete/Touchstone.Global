import { ApolloClient, InMemoryCache, useQuery, gql} from "@apollo/client";
import {ApolloProvider} from "@apollo/react-hooks";
import Latest from "../components/lmp"

const client = new ApolloClient({
    uri: 'http://touchstoneapi.local/graphql',
     cache: new InMemoryCache( ),
  });

export default function LoadMore() {
    return (
     
       <ApolloProvider client={client}>
        <Latest/>
       </ApolloProvider>
 
    );
  }
  