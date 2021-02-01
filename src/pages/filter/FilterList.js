import React from "react"
import BooleanFilter from "./booleanFilter/BooleanFilter"
import DictionaryFilter from "./dictionaryFilter/DictionaryFilter"
import NumberRangeFilter from "./numberRangeFilter/NumberRangeFilter"
import getChangeFilterValues from "./getChangeFilterValues"



export default class FilterList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterValues: props.filterValues || []
        }

    }

    onChangeBoolean = (parameterId, checked) => {
        const { filterValues } = this.state
        const idx = filterValues.findIndex(item => item.groupId === parameterId)
        const newFilterValues = [...filterValues]
        this.setState(() => {
            newFilterValues[idx].state = checked
            return {
                filterValues: newFilterValues
            }
        })
        this.props.changeUrl(getChangeFilterValues(this.state.filterValues))
    }

    onChangeDictionary = (parameterId, id, checked) => {
        const { filterValues } = this.state
        const idx = filterValues.findIndex(item => item.groupId === parameterId)
        const newFilterValues = [...filterValues]

        if (checked) {
            newFilterValues[idx].itemIds.push(id)
        } else {
            const pos = newFilterValues[idx].itemIds.indexOf(id)
            newFilterValues[idx].itemIds.splice(pos, 1)
        }
        this.setState(({ filterValues }) => {
            return {
                filterValues: newFilterValues
            }
        })
        this.props.changeUrl(getChangeFilterValues(this.state.filterValues))
    }

    onChangeNumberRangeFrom = (parameterId, value) => {
        const { filterValues } = this.state
        const newFilterValues = [...filterValues]
        const target = newFilterValues.find(item => item.groupId === parameterId)
        target.from = value
        this.setState({
            filterValues: newFilterValues
        })
        this.props.changeUrl(getChangeFilterValues(this.state.filterValues))
    }

    onChangeNumberRangeTo = (parameterId, value) => {
        const { filterValues } = this.state
        const newFilterValues = [...filterValues]
        const target = newFilterValues.find(item => item.groupId === parameterId)
        target.to = value
        this.setState({
            filterValues: newFilterValues
        })
        this.props.changeUrl(getChangeFilterValues(this.state.filterValues))
    }

    render() {
        const { dictionaries, facetsItems, placeholders } = this.props.facets
        const filters = facetsItems
            .filter(item => item.parameter_id !== "shops_second")
            .map((item, index) => {
                // eslint-disable-next-line default-case
                switch (item.type) {
                    case "dictionary": return <DictionaryFilter item={item}
                        dictionaries={dictionaries}
                        onChange={this.onChangeDictionary}
                        key={index} />
                    case "boolean": return <BooleanFilter item={item}
                        onChange={this.onChangeBoolean}
                        key={index} />
                    case "number_range": return <NumberRangeFilter item={item}
                        key={index}
                        placeholders={placeholders}
                        onChangeFrom={this.onChangeNumberRangeFrom}
                        onChangeTo={this.onChangeNumberRangeTo} />
                }
            })
        return <div className="filter__block_wrapper">
            {filters}
        </div>

    }
}
