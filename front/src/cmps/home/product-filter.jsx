import {useEffect, useRef, useState} from "react"
import {productService} from "../../services/product.service"
import {utilService} from "../../services/util.service"
import {setFilter} from "../../store/product.action"

export function ProductFilter( { setFilterBinColor, setFilterSearch } ) {

    const [filterBy, setFilterBy] = useState( productService.getDefaultFilter() )
    const onSetFilter = useRef( utilService.debounce( setFilterBy ) )
    const elInputRef = useRef( null )

    const garbageTypes = productService.getGarbageTypes()

    useEffect( () => {
        elInputRef.current.focus()
    }, [] )

    function handleChange( { target } ) {
        let { value, name : field } = target
        setFilterBy( ( prevFilter ) => {
            return { ...prevFilter, [ field ] : value }
        } )
        setFilterSearch( ( prevFilter ) => {
            return { ...prevFilter, [ field ] : value }
        } )
    }

    function handleSelect( { target } ) {
        setFilterBinColor( target.value )
    }

    return <form className="product-filters">
        <div className='filter-input-container'>
            <label htmlFor="productName">שם המוצר:</label>
            <input type="text"
                name="productName"
                placeholder="הזן את שם המוצר"
                value={filterBy.productName}
                onChange={handleChange}
                ref={elInputRef}
            />
        </div>

        <div className='filter-input-container'>
            <label htmlFor="garbageType">סוג פח למחזור:</label>
            <select
                onChange={handleSelect}
                value={filterBy.garbageType}
                name='garbageType'
            >
                <option value="" disabled>בחר סוג פח</option>
                {Object.keys( garbageTypes ).map( ( garbageType ) => (
                    <option
                        key={garbageType}
                        value={garbageType}
                        style={{ fontSize : '13px', width : '90%' }}
                    >
                        {garbageTypes[ garbageType ]}
                    </option>
                ) )}
            </select>
        </div>

    </form>

}