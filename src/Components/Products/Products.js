import Product from "../Product/Product";
import './Products.css'
const Products = (props) => {
    // console.log(props);
    return (
        <div className="card-container">
            {
                props.products.map(product => <Product key={product._id} product={product} />)
            }
        </div>
    );
};

export default Products;