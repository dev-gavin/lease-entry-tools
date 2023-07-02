import styled from 'styled-components'
import InputContainer from './InputContainer'
import Title from './Title'

const Module = styled.div`
    background-color: #f2f0ff;
    font-size: 1.5em;
    border-radius: 10px;
    width: 500px;

    padding: 1em;
`

Module.Title = Title
Module.InputContainer = InputContainer

export default Module
