import { RowContainer } from './Row.style'
import { TextInput } from './index.style'

function Row({ handleChange, rowInfo, removeRow }) {
    return (
        <>
            <RowContainer>
                <button
                    onClick={() => removeRow(rowInfo.id)}
                    className='subtract_button'>
                    -
                </button>
                <button className='add_button'>+</button>
                <TextInput onChange={() => handleChange(row.id)} />
                <p className='percentage_escalation'>test</p>
                <p className='amount_escalation'>test</p>
            </RowContainer>
        </>
    )
}

export default Row
