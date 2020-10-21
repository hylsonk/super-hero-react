export const mappingWork = (work) => {
    return [
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: "label",
            label: 'Occupation:',
            text: work.occupation
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: "label",
            label: 'Base:',
            text: work.base
        }
    ]
}