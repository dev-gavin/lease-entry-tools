import DateCalculator from './components/dateCalculator/index'
import EscalationDetector from './components/escaltionDetector'
import GlobalStyle from './GlobalStyles'

function App() {
    return (
        <>
            <main>
                <GlobalStyle />
                <DateCalculator />
                <EscalationDetector />
            </main>
        </>
    )
}

export default App
