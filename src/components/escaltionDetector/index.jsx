import { nanoid } from 'nanoid'
import { useState } from 'react'
import Row from './Row'
import { EscalationDetectorWrapper, TextInput, Title } from './index.style'

function EscalationDetector() {
    const [inputAmounts, setInputAmounts] = useState([])

    const handleInitialChange = (event) => {
        if (inputAmounts.length === 0) {
            setInputAmounts([{ id: nanoid(), value: '' }])
        }

        if (event.target.value === '') {
            setInputAmounts([])
        }
    }

    const tableRows = inputAmounts.map((amount) => {
        return (
            <Row
                key={amount.id}
                id={amount.id}
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
                {inputAmounts.length > 0 && tableRows}
            </EscalationDetectorWrapper>
        </>
    )
}

export default EscalationDetector
