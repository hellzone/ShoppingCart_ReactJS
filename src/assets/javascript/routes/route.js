import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import App from '../components/index';
import ProductList from '../components/product-list';
import ProductDetails from '../components/product-details';

class Root extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <App path="/">
                    <Route exact path="/" component={ProductList}/>
                    <Route exact path="/product/:productId" component={ProductDetails} />
                </App>
            </BrowserRouter>
        );
    }
}

export default Root;
