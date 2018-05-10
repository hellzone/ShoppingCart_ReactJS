import ProductListJSON from '../json/product-list';
import ProductStructure from '../components/product-structure';
import {Link} from 'react-router-dom';

class ProductList extends React.Component{
    render () {
        return (
            <div>
                <ul className="row">
                    {ProductListJSON.map(product => { 
                        return <li className="card col-sm-4" key={product.id}>
                           <ProductStructure product={product}/>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ProductList;
