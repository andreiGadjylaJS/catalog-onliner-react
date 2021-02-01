import React, { Component } from 'react'
import CheckBox from '../../../components/CheckBox'

export default class DictionaryFilter extends Component {


    onChange = (parameterId, id, checked) => {
        this.props.onChange(parameterId, id, checked)
    }

    renderItems() {
        const { item: filter, dictionaries } = this.props
        const { parameter_id: filterId, popular_dictionary_values: popularItems } = filter
        let items = []
        if (popularItems && popularItems.length > 1) {
            items = dictionaries[filterId].filter(i => popularItems.includes(i.id))
        } else {
            items = dictionaries[filterId].slice(0, 5)
        }
        return items.map((item, index) => {
            return <CheckBox title={item.name} onChange={(checked) => this.onChange(filter.parameter_id, item.id, checked)} key={index} />
        })
    }


    render() {
        const { item } = this.props
        return <div className="wrapper--type-dictionaries">
            <h4 className="filter__heading">{item.name}</h4>
            {this.renderItems()}
        </div>

    }
}
