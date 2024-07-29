import {useState} from "react";
import {saveProduct} from "../../store/product.action";
import {productService} from "../../services/product.service";
import dollar from "../../assets/icons/dollar.png";

export function ProductAdd() {
    const garbageTypes = productService.getGarbageTypes();
    const [product, setProduct] = useState( productService.getEmptyProduct() );
    const [showThankyou, setShowThankyou] = useState( false );

    function onAddProduct( ev ) {
        ev.preventDefault();
        saveProduct( product );
        setShowThankyou( true );
    }

    function onAddAnotherProduct() {
        setShowThankyou( false );
        setProduct( productService.getEmptyProduct() );
    }

    function handleChange( { target } ) {
        let { value, name : field } = target;
        setProduct( ( prevState ) => ({
            ...prevState,
            [ field ] : value
        }) );
    }

    function handleFileChange( { target } ) {
        const file = target.files[ 0 ];
        if ( file ) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct( ( prevState ) => ({
                    ...prevState,
                    image : reader.result
                }) );
            };
            reader.readAsDataURL( file );
        }
    }

    return (
        <section className='product-add'>
            <h1>{showThankyou ? 'המוצר נקלט בהצלחה!' : 'הזן את פרטי המוצר אותו תרצה למחזר'}</h1>
            <div className="content-wrapper">
                <p>{showThankyou ? 'זכית ב' : 'עבור כל מוצר תזוכה ב'}</p>

                <div className="price">
                    <span>10</span>
                    <img src={dollar} alt="Dollar icon"/>
                </div>
            </div>
            {!showThankyou ? (
                <form onSubmit={onAddProduct} className='add-product-form'>
                    <div className='add-input-container'>
                        <label htmlFor="name">שם המוצר:</label>
                        <input
                            type='text'
                            id="name"
                            name='name'
                            placeholder='הזן את שם המוצר'
                            value={product.name}
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
                            {Object.keys( garbageTypes ).map( ( garbageType ) => (
                                <option
                                    key={garbageType}
                                    value={garbageType}
                                    style={{ fontSize : '13px', width : '90%' }}
                                >
                                    {garbageType + ' - ' + garbageTypes[ garbageType ]}
                                </option>
                            ) )}
                        </select>
                    </div>

                    <div className='add-input-container'>
                        <label htmlFor="image">תמונה:</label>
                        <input
                            type='file'
                            id="image"
                            name='image'
                            accept='image/*'
                            onChange={handleFileChange}
                        />
                    </div>

                    <button className="add-btn">הוסף מוצר</button>
                </form>
            ) : (
                <div className='thankyou-wrapper'>
                    <button className="add-btn" onClick={onAddAnotherProduct}>הוסף מוצר חדש</button>
                </div>
            )}
        </section>
    );
}