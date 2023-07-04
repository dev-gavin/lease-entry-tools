import styled from 'styled-components'

const ClearButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 0.8em;
    background-color: #000e24;
    font-weight: 800;
    letter-spacing: 0.05em;
    color: white;
    transition: background-color 0.1s;
    display: block;

    &:active {
        box-shadow: inset 1px 1px 10px #333;
    }

    &:hover {
        background-color: #ea8d0b;
    }
`

export default ClearButton
