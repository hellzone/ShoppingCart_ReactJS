import ProductListJSON from '../json/product-list';

class ProductDetails extends React.Component {
  render() {
    const productId = this.props.match.params.productId;
    const productDetails = ProductListJSON.find(product => product.id == productId) || {};
    return(
      <div>
        <h1>{productDetails.name}</h1>
        <div>
          <img src={productDetails.image} className="img-responsive"/>
        </div>
        <p>{productDetails.price}</p>
        <p>{productDetails.category}</p>
      </div>
    )
  }
}

export default ProductDetails;