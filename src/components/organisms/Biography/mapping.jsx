export const mappingBiography = (biography) => {
    return [
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'Full Name:',
            text: biography['full-name']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'Alter egos:',
            text: biography['alter-egos']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'Place of birth:',
            text: biography['place-of-birth']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'First Appearance:',
            text: biography['first-appearance']
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'Publisher:',
            text: biography.publisher
        },
        {
            idLabel: '',
            idText: '',
            classNameText: '',
            classNameLabel: '',
            label: 'Alignment:',
            text: biography.alignment
        },
    ]
}