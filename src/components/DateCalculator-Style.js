import styled from 'styled-components'

const Main = styled.div`
    .clear-button {
        display: block;
        margin: 2em auto 0;
    }
`

const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin: 1.5em 0 1em;

    & > :nth-child(1) {
        border-right: 2px solid #b4bac4;
    }

    & .module__result-container {
        cursor: pointer;
    }

    & .module__result-label {
        font-size: 0.7em;
        margin-bottom: 0.5em;
    }

    & .module__result {
    }
`

const DateCalculatorStyle = {
    Main,
    ResultsContainer,
}

export default DateCalculatorStyle
