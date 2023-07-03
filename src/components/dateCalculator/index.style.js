import styled from 'styled-components'

const Wrapper = styled.div`
    width: 25rem;
    margin: 1rem auto;
    .clear-button {
        display: block;
        margin: 2em auto 0.5em;
    }

    & input {
        margin: 2rem auto;
    }
`

const ResultsContainer = styled.div`
    transition: all 1s ease;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin: 1.5em auto 0.5em;

    & .module__result-container {
        cursor: pointer;
        background-color: #fed89a;
        width: min-content;
        padding: 0.5em;
        border-radius: 10px;
        margin: 0 auto;
    }

    & .module__result-label {
        font-size: 0.6em;
        margin-bottom: 0.5em;
        color: #575757;
    }
`

const DateCalculatorStyle = {
    Wrapper,
    ResultsContainer,
}

export default DateCalculatorStyle
