import {productService} from "../../services/product.service"

export function ProductPreview( { product } ) {
    const garbageTypes = productService.getGarbageTypes()

    const getColorByGarbageType = {
       'blue' : 'כחול',
       'purple' : 'סגול',
       'orange' : 'כתום',
    }

    return (
        <tr className="product-container">
            <td className="product-name">{product.productName}</td>
            <td style={{color: product.binColor}} className="product-garbage-type">{getColorByGarbageType[ product.binColor?.toLowerCase() ]}</td>
        </tr>
    )

}