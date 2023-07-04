import { nanoid } from 'nanoid'
import { useState } from 'react'
import Row from './Row'
import {
    ClearButton,
    EscalationDetectorWrapper,
    TextInput,
    Title,
} from './index.style'

function EscalationDetector() {
    const [amountRows, setAmountRows] = useState([])

    const handleInitialChange = (event) => {
        if (amountRows.length === 0) {
            setAmountRows([
                {
                    id: nanoid(),
                    inputAmount: '',
                    percentEscalation: '',
                    amountEscalation: '',
                },
            ])
        }

        if (event.target.value === '') {
            setAmountRows([])
        }
    }

    const handleChange = (id) => {
        console.log('🚀 ~ file: index.jsx:25 ~ handleChange ~ id:', id)
    }

    // {
    //     id:
    //     inputAmount:
    //     percentEscalation:
    //     amountEscalation:
    // }

    const removeRow = (rowId) => {
        setAmountRows((prevAmountRows) =>
            prevAmountRows.filter((row) => row.id !== rowId)
        )
    }

    const rows = amountRows.map((row) => {
        return (
            <Row
                key={row.id}
                rowInfo={row}
                handleChange={handleChange}
                removeRow={removeRow}
            />
        )
    })

    return (
        <>
            <EscalationDetectorWrapper>
                <Title>Escalation Detector</Title>
                <TextInput
                    type='number'
                    name='initialAmount'
                    onChange={handleInitialChange}
                />
                <ClearButton>Clear</ClearButton>
                {amountRows.length > 0 && rows}
            </EscalationDetectorWrapper>
        </>
    )
}

export default EscalationDetector
