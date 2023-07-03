import { nanoid } from 'nanoid'
import { useState } from 'react'
import Module from '../../shared/Module/index'
import Row from './Row'
import Wrapper from './index.style'

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
            <Wrapper>
                <Module>
                    <Module.Title>Escalation Detector</Module.Title>
                    <Module.TextInput
                        type='number'
                        name='initialAmount'
                        onChange={handleInitialChange}
                    />
                    {inputAmounts.length > 0 && tableRows}
                </Module>
            </Wrapper>
        </>
    )
}

export default EscalationDetector
