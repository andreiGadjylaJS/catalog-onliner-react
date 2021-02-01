export default class FacetsService {


    getFacets() {
        return (

            fetch(`https://catalog.onliner.by/sdapi/catalog.api/facets/smartwatch`)
                .then(result => result.json())
                .then(result => {
                    const facetsItems = result.facets.general.items.slice(1)

                    const filterValues = facetsItems.map(item => {
                        if (item.type === "dictionary") {
                            return {
                                type: item.type, groupId: item.parameter_id, itemIds: []
                            }
                        } else if (item.type === "number_range") {
                            return {
                                type: item.type, groupId: item.parameter_id, from: "", to: ""
                            }
                        } else if (item.type === "boolean") {
                            return {
                                type: item.type, groupId: item.parameter_id, state: false
                            }

                        }
                    })
                    const { dictionaries, placeholders } = result;
                    return { facetsItems, dictionaries, placeholders, filterValues }
                })
        )
    }
}





