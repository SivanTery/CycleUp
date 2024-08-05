import {ProductPreview} from "./product-preview.jsx";
import {useEffect, useState} from "react";
import {productsService} from "../../services/products.service";
import {binsService} from "../../services/bins.service";

export function ProductList( { products }) {


    return (
        <section className='product-list'>
            {products.length ? <table>
                <thead>
                <tr>
                    <th>שם המוצר</th>
                    <th>סוג הפח</th>
                </tr>
                </thead>
                <tbody>
                {products.map( ( product, idx ) => {
                    return <ProductPreview key={'product__' + idx} product={product}/>
                } )}

                </tbody>
            </table> : <>
                {!products.length ? <h3>אין מוצרים המתאימים לחיפוש שלך</h3> : null}
                {!products ? <h3>בטעינה...</h3> : null}
            </>}

        </section>
    )

}