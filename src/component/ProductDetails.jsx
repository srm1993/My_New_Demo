import '../component/ProductDetails.css';
export default function ProductDetails(props){
    console.log(props)
    return(
        <>
            <div className="mydiv">
                <h3>Product Name: {props.productname}</h3>
                <h4>price: {props.price}</h4>
                <h6>description: {props.description}</h6>
            </div>
        </>
    )
}