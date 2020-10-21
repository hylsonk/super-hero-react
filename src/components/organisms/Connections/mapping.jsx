export const mappingConnections = (connections) => {
    return [
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: "label",
            label: 'Group Affiliation:',
            text: connections['group-affiliation']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: "label",
            label: 'Relatives:',
            text: connections.relatives
        }
    ]
}