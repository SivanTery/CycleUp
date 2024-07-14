import {productService} from "../../services/product.service"

export function ProductPreview( { product } ) {
    const garbageTypes = productService.getGarbageTypes()

    const getColorByGarbageType = {
        'כחול' : 'blue',
        'סגול' : 'purple',
        'כתום' : 'orange',
    }

    return (
        <tr className="product-container">
            <td className="product-name">{product.name}</td>
            <td style={{color: getColorByGarbageType[ product.garbageType ]}} className="product-garbage-type">{product.garbageType}</td>
        </tr>
    )

}