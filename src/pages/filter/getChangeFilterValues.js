

const getChangeFilterValues = (filterValues) => {
    const urlFilter = filterValues.map(filter => {
        switch (filter.type) {
            case 'dictionary': return getParamsForDictionary(filter);
            case 'boolean': return getParamsForBoolean(filter);
            case "number_range": return getParamsForNumberRange(filter);
        }
    }).filter(f => f).join('&')
    const urlNextPage = `https://catalog.onliner.by/sdapi/catalog.api/search/smartwatch?${urlFilter}&group=1`
    return urlNextPage
}

const getParamsForBoolean = filter => {
    return filter.state ? `${filter.groupId}=1` : ''
}

const getParamsForDictionary = filter => {

    return filter.itemIds.length
        ? filter.itemIds.map((f, pos) => `${filter.groupId}[${pos}]=${f}`).join('&')
        : ''
}

const getParamsForNumberRange = filter => {
    const from = filter.from ? `${filter.groupId}[from]=${filter.from}` : ''
    const to = filter.to ? `${filter.groupId}[to]=${filter.to}` : ''
    return [from, to].filter(f => f).join('&')
}

export default getChangeFilterValues