import ProductListJSON from '../json/product-list';
import {Link} from 'react-router-dom';

class ProjectStructure extends React.Component{
  render() {
    return (
      <Link to={`/product/${this.props.product.id}`} className="card-body">
        <div className="img-wrap">
            <img src={this.props.product.image} className="img-responsive"/>
        </div>
        <h5 className="card-title">{this.props.product.name}</h5>
        <p className="card-text">Price - ${this.props.product.price}</p>
       </Link>
    )
  }
}
export default ProjectStructure;