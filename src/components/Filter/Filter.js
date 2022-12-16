import React from 'react'
import { Select, SelectItem } from '@ui-kitten/components';
import styles from './styles';

function Filter({ options, selectedIndex, onSelect }) {

    const displayValue = options[selectedIndex.row].label;

    const renderOption = ({label}) => <SelectItem  key={label} title={label}/>

    return (
            <Select style={styles.container}
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={onSelect}>
                    {options.map(renderOption)}
            </Select>
    )
}

export default Filter;