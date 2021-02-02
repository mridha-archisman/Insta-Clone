import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../Pages/Register';
import '../Styles/Global.scss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(

    {
        uri: '',
        cache: new InMemoryCache( )
    }
);

export default function Layout ( ) {

    return (

        <div className = 'Layout'>

            <ApolloProvider client = { client }>

                <BrowserRouter>

                    <Switch>

                        <Route path = '/' exact component = { Register } />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        </div>
    );
}