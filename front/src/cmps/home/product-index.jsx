import {useEffect, useState} from "react";
import { loadProducts } from "../../store/product.action.js";
import { ProductFilter } from "./product-filter.jsx";
import { ProductList } from "./product-list.jsx";
import { useSelector } from 'react-redux'
import {productsService} from "../../services/products.service";
import {binsService} from "../../services/bins.service";

export function ProductIndex() {

    // const { filterBy, products } = useSelector((storeState) => storeState.productModule)

const [ filterBinColor, setFilterBinColor ] = useState( '' )
    const [products, setProducts] = useState( [] )
    const [filteredProducts, setFilteredProducts] = useState( [] )
    const [bins, setBins] = useState( [] )

    useEffect( () => {
        const fetchData = async () => {
            try {
                const products = await productsService.query();

                const bins = await binsService.query();

                const refactoredProducts = addBinColorToProducts( products, bins );

                setBins( bins );
                setProducts( refactoredProducts );
                setFilteredProducts( refactoredProducts );
            } catch ( error ) {
                console.error( 'Failed to fetch product', error );
            }
        };

        function addBinColorToProducts( products, bins ) {
            // Create a map of binCode to binColor
            const binColorMap = bins.reduce( ( map, bin ) => {
                map[ bin.binCode ] = bin.binColor;
                return map;
            }, {} );

            // Add binColor to each product
            products.forEach( product => {
                product.binColor = binColorMap[ product.binCode ] || null;
            } );
            return products;
        }

        fetchData();
    }, [] );

    useEffect( () => {
        setFilteredProducts( products.filter( product => product.binColor === filterBinColor ) );
    }, [filterBinColor] );


    return (
        <section className='product-index'>
            <h1>רשימת המוצרים</h1>
            <ProductFilter setFilterBinColor={setFilterBinColor} />
            {products && <ProductList products={filteredProducts} />}
        </section>
    )

}