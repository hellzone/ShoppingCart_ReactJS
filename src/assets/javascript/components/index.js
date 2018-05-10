import Header from '../components/common/header.js';

class Container extends React.Component{
    render () {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Container;
