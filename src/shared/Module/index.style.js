import styled from 'styled-components'

export const ModuleContainer = styled.div`
    background-color: #e8eafa;
    font-size: 1.5em;
    border-radius: 10px;
    border: 1px solid rgba(149, 157, 165, 0.1);

    padding: 1em 2em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const ModuleTitle = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
    text-align: center;
    color: #000e24;
`
export const ModuleTextInput = styled.input`
    display: block;
    font-size: 0.9em;
    border: none;
    text-align: center;
    padding: 0.5em;
    color: #000e24;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: relative;

    &:focus {
        outline: 3px solid #ea8d0b;
    }
`
