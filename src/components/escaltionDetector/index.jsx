import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Row from './Row'
import {
    ClearButton,
    EscalationDetectorWrapper,
    Input,
    Title,
} from './index.style'

function EscalationDetector() {
    const [amountRows, setAmountRows] = useState([])
    const [initialInput, setInitialInput] = useState('')

    const handleInitialChange = (event) => {
        if (amountRows.length === 0) {
            setAmountRows([
                {
                    id: nanoid(),
                    inputAmount: '',
                },
            ])
        }

        if (event.target.value === '') {
            setAmountRows([])
        }
        setInitialInput(event.target.value)
    }

    const handleChange = (id, event) => {
        const { value } = event.target

        const newRows = amountRows.map((row) => {
            if (row.id !== id) return row

            row.percentEscalation = row

            return {
                ...row,
                inputAmount: value,
            }
        })
        setAmountRows(newRows)
    }

    const removeRow = (rowId) => {
        setAmountRows((prevAmountRows) =>
            prevAmountRows.filter((row) => row.id !== rowId)
        )
    }

    const addRow = () => {
        setAmountRows((prevAmountRows) =>
            prevAmountRows.concat([
                {
                    id: nanoid(),
                    inputAmount: '',
                },
            ])
        )
    }

    const rows = amountRows.map((row, index, array) => {
        return (
            <Row
                key={row.id}
                rowInfo={row}
                handleChange={handleChange}
                removeRow={removeRow}
                addRow={addRow}
                prevValue={
                    index == 0 ? initialInput : array[index - 1].inputAmount
                }
            />
        )
    })

    return (
        <>
            <EscalationDetectorWrapper>
                <Title>Escalation Detector</Title>
                <Input
                    type='number'
                    onChange={(event) => handleInitialChange(event)}
                    value={initialInput}
                />
                <p>% Escalation</p>
                <p>$ Escalation</p>
                {amountRows.length > 0 && rows}
                <ClearButton>Clear</ClearButton>
            </EscalationDetectorWrapper>
        </>
    )
}

export default EscalationDetector
