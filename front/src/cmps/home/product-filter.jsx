import { useEffect, useRef, useState } from "react"
import { productService } from "../../services/product.service"
import { utilService } from "../../services/util.service"
import { setFilter } from "../../store/product.action"

export function ProductFilter() {

    const [filterBy, setFilterBy] = useState(productService.getDefaultFilter())
    const onSetFilter = useRef(utilService.debounce(setFilter))
    const elInputRef = useRef(null)

    const garbageTypes = productService.getGarbageTypes()

    useEffect(() => {
        elInputRef.current.focus()
    }, [])

    useEffect(() => {
        // update father cmp of filter change
        onSetFilter.current(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterBy((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return <form className="product-filters">
         <div className='filter-input-container'>
         <label htmlFor="name">שם המוצר:</label>
            <input type="text"
                name="name"
                placeholder="הזן את שם המוצר"
                value={filterBy.name}
                onChange={handleChange}
                ref={elInputRef}
            />
          </div>

          <div className='filter-input-container'>
          <label htmlFor="garbageType">סוג פח למחזור:</label>
            <select
                 onChange={handleChange}
                 value={filterBy.garbageType}
                 name='garbageType'
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

    </form>

}