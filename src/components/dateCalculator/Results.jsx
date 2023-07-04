import { ResultContainer, ResultLabel, ResultsContainer } from './Results.style'

function Results({ resultDate, resultDateLess }) {
    return (
        <ResultsContainer>
            <ResultContainer>
                <ResultLabel>Result (-1)</ResultLabel>
                <p>{resultDateLess}</p>
            </ResultContainer>
            <ResultContainer>
                <ResultLabel>Result</ResultLabel>
                <p>{resultDate}</p>
            </ResultContainer>
        </ResultsContainer>
    )
}

export default Results
