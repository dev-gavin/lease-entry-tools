import styled from 'styled-components'

const RowStyle = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 1fr 1fr 0.5fr;
    gap: 1rem;
    align-items: center;

    & input {
        width: 100%;
    }

    & .subtract_button {
        background-color: red;
    }

    & .add_button {
        background-color: red;
    }

    & button {
        border: none;
        border-radius: 10px;
        aspect-ratio: 1;
        width: 1.2em;
        justify-self: center;
    }
`

export default RowStyle
