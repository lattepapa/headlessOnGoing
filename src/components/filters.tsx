import * as React from 'react'
import CheckFilter from './check-filter'
import CurrencyField from './currency-field'
import { priceFilterStyle, clearButton, priceFields, summary } from './filters.module.css'

function Filters({ currencyCode, productTypes, tags, vendors, filters, setFilters }: any) {
    const updateFilter = (key: any, value: any) => {
        setFilters((filters: any) => ({ ...filters, [key]: value }))
    }

    const updateNumeric = (key: any, value: any) => {
        if (!isNaN(Number(value)) || (value.endsWith('.') && !isNaN(Number(value.substring(0, -1))))) {
            updateFilter(key, value)
        }
    }

    return (
        <>
            <CheckFilter
                name="Type"
                items={productTypes}
                selectedItems={filters.productTypes}
                setSelectedItems={(value: any) => updateFilter('productTypes', value)}
            />
            <hr />
            <details className={priceFilterStyle} open={true}>
                <summary>
                    <div className={summary}>
                        Price
                        {(filters.maxPrice || filters.minPrice) && (
                            <button
                                className={clearButton}
                                onClick={() =>
                                    setFilters((filters: any) => ({
                                        ...filters,
                                        maxPrice: '',
                                        minPrice: '',
                                    }))
                                }
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </summary>
                <div className={priceFields}>
                    <CurrencyField
                        {...currencyCode}
                        aria-label="Minimum price"
                        value={filters.minPrice}
                        onChange={(event: any) => updateNumeric('minPrice', event.currentTarget.value)}
                    />{' '}
                    –{' '}
                    <CurrencyField
                        {...currencyCode}
                        aria-label="Maximum price"
                        value={filters.maxPrice}
                        onChange={(event: any) => updateNumeric('maxPrice', event.currentTarget.value)}
                    />
                </div>
            </details>
            <hr />
            <CheckFilter name="Brands" items={vendors} selectedItems={filters.vendors} setSelectedItems={(value: any) => updateFilter('vendors', value)} />
            <hr />
            <CheckFilter open={true} name="Tags" items={tags} selectedItems={filters.tags} setSelectedItems={(value: any) => updateFilter('tags', value)} />
        </>
    )
}

export default Filters
