import Module from '../../shared/Module'
import RowStyle from './Row.style'

function Row(props) {
    return (
        <>
            <RowStyle>
                <button
                    onClick={() => props.handleClick(props.id)}
                    className='subtract_button'>
                    -
                </button>
                <Module.TextInput />
                <p className='percentage_escalation'>test</p>
                <p className='amount_escalation'>test</p>
                <button className='add_button'>+</button>
            </RowStyle>
        </>
    )
}

export default Row
