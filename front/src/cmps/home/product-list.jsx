import { ProductPreview } from "./product-preview.jsx";


export function ProductList({products}) {


    return (
        <section className='product-list'>
            {products.length ? products.map((product, idx) => {
                return <ProductPreview key={'product__' + idx} product = {product} />
            }) : null}
            {!products.length ? <h3>אין מוצרים במלאי</h3> : null}
            {!products ? <h3>בטעינה...</h3> : null}
        </section>
    )

}