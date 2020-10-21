export const mappingAppearance = (appearance) => {
    return [
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:"label",
            label: 'Gender:',
            text: appearance.gender
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:"label",
            label: 'Race:',
            text: appearance.race
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:"label",
            label: 'Height:',
            text: appearance.height.join('/ ')
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:"label",
            label: 'Weight:',
            text: appearance.weight.join('/ ')
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:" ",
            label: 'Eye Color:',
            text: appearance['eye-color']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel:"label",
            label: 'Hair Color:',
            text: appearance['hair-color']
        },
    ]
}