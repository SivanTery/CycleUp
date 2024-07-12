
import { useState } from "react"
import { saveProduct } from "../../store/product.action"
import { productService } from "../../services/product.service"

export function ProductAdd() {

    const garbageTypes = productService.getGarbageTypes()
    const [product, setProduct] = useState(productService.getEmptyProduct())
    const [showThankyou, setShowThankyou] = useState(false)


    function onAddProduct(ev) {
        ev.preventDefault()
        saveProduct(product)
        setShowThankyou(true)

    }

    
    function onAddAnotherProduct() {
        setShowThankyou(false)
        setProduct(productService.getEmptyProduct())

    }

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log(field);
        setProduct((prevState) => {
            return { ...prevState, [field]: value }
        })
    }

    return (
        <section className='product-add'>
                <h1>{showThankyou ? 'המוצר התווסף בהצלחה!' : 'הזן את פרטי המוצר אותו ברצונך להוסיף'}</h1>
            { !showThankyou ? <form onSubmit={onAddProduct} className='add-product-form'>
                <div className='add-input-container'>
                    <label htmlFor="name">שם המוצר:</label>
                    <input type='text'
                        id="name"
                        name='name'
                        placeholder='הזן את שם המוצר'
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='add-input-container'>
                    <label htmlFor="company">שם החברה:</label>
                    <input type='text'
                        name='company'
                        id='company'
                        placeholder='הזן את שם החברה'
                        value={product.company}
                        onChange={handleChange}
                    />
                </div>

                <div className='add-input-container'>
                    <label htmlFor="garbageType">סוג פח למחזור:</label>
                <select
                     onChange={handleChange}
                     value={product.garbageType}
                     name='garbageType'
                     id='garbageType'
                >
                    <option value="" disabled>בחר סוג פח</option>
                    {Object.keys(garbageTypes).map((garbageType) => (
                      <option
                        key={garbageType}
                        value={garbageType}
                        style={{ fontSize: '13px', width: '90%' }}
                      >
                        {garbageType + ' - ' + garbageTypes[garbageType]}
                      </option>
                    ))}
                </select>
                </div>
                
                <div className='add-input-container'>
                    <label htmlFor="image">הזן כתובת לתמונה:</label>
                    <input type='url'
                        name='image'
                        id='image'
                        placeholder='הזן כתובת תמונה'
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <button className="add-btn">הוסף מוצר</button>
            </form> : 
            <div className='thankyou-wrapper'>
<button className="add-btn" onClick={() => onAddAnotherProduct()}>הוסף מוצר חדש</button>
        </div>
            }
        </section>
    )

}