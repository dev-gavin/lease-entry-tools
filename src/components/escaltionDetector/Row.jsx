import { RowContainer } from './Row.style'
import { Input } from './index.style'

function Row({ handleChange, rowInfo, removeRow, prevValue, addRow }) {
    // TODO: fix row displaying negative amounts if current inputAmount < prevValue
    const percentageEscalation = (
        (rowInfo.inputAmount / prevValue - 1) *
        100
    ).toFixed(3)

    const amountEscalation = rowInfo.inputAmount - prevValue

    return (
        <>
            <RowContainer>
                <button
                    onClick={() => removeRow(rowInfo.id)}
                    className='subtract_button'>
                    -
                </button>
                <Input
                    type='number'
                    onChange={(event) => handleChange(rowInfo.id, event)}
                    value={rowInfo.inputAmount}
                />
                <p className='percentage_escalation'>
                    {percentageEscalation}
                    <span> %</span>
                </p>

                <p className='amount_escalation'>{amountEscalation}</p>
                <button
                    className='add_button'
                    onClick={addRow}>
                    +
                </button>
            </RowContainer>
        </>
    )
}

export default Row
