import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"
import ProductGroupLoader from "../components/ProductGroupLoder"
import Button from 'react-bootstrap-button-loader';
import AppApiContext from "../ContextApi/AppApicontext";
import { useContext } from "react";

function ProductCardGroup() {
    const store = useContext(AppApiContext)

    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(8)
    const [isLoder, setIsLoder] = useState(false)

    useEffect(() => {
        setIsLoder(true)
        axios.get(`https://mock.redq.io/api/products?search=type.slug:${store.apiType}&limit=${limit}`).then((response) => {
            setProducts(response.data)
            setIsLoder(false)
        })
    }, [limit, store.apiType])

    if (products.length === 0) {
        return <ProductGroupLoader />
    }

    return (
        <div className='container'>
            <div className="row pt-3 ">
                {
                    products.data.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-3" key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))
                }
            </div>
            <div className="text-center py-5" >
                {
                    products.count <  products.total ?
                        <Button className='btn-adjust' loading={isLoder} variant="secondary" onClick={() => setLimit(limit + 4)}>Load more</Button>
                    : ""
                }
            </div>
        </div>
    )
}

export default ProductCardGroup