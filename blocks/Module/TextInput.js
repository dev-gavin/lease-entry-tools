import styled from 'styled-components'

const TextInput = styled.input`
    display: block;
    font-size: 0.9em;
    margin: 1em auto;
    border: none;
    text-align: center;
    padding: 0.5em;
    color: #000e24;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:focus {
        outline: 3px solid #ea8d0b;
    }
`

export default TextInput
