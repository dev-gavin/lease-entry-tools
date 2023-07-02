import styled from 'styled-components'
import TextInput from './TextInput'
import Title from './Title'

const Module = styled.div`
    background-color: #e8eafa;
    font-size: 1.5em;
    border-radius: 10px;
    max-width: 20em;
    border: 1px solid rgba(149, 157, 165, 0.1);

    padding: 1em 2em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 0 auto;
`

Module.Title = Title
Module.TextInput = TextInput

export default Module
