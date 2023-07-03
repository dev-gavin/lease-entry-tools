import { add, format } from 'date-fns'
import { useState } from 'react'
import Module from '../../shared/Module'
import ClearButton from '../../shared/Module/ClearButton'
import DateCalculatorStyle from './index.style'

function DateCalculator() {
    const blankForm = {
        date: '',
        days: '',
        months: '',
        years: '',
    }

    const [dateForm, setDateForm] = useState(() => blankForm)

    const handleChange = (event) => {
        const { name, value } = event.target

        setDateForm((prevDateForm) => {
            return {
                ...prevDateForm,
                [name]: value,
            }
        })
    }

    const clearForm = () => {
        setDateForm(blankForm)
    }

    let jsDate
    let resultDate
    let resultDateLess

    try {
        jsDate = new Date(dateForm?.date)
        resultDate = format(add(jsDate, dateForm), 'MM/dd/yyyy')
        resultDateLess = format(
            add(jsDate, {
                ...dateForm,
                days: dateForm.days - 1,
            }),
            'MM/dd/yyyy'
        )
    } catch {
        resultDate = ''
        resultDateLess = ''
    }

    const isResultsDisplayed =
        dateForm.days + dateForm.months + dateForm.years && resultDate

    return (
        <>
            <DateCalculatorStyle.Wrapper>
                <Module>
                    <Module.Title>Date Calculator</Module.Title>
                    <Module.TextInput
                        maxLength='10'
                        name='date'
                        onChange={handleChange}
                        placeholder='mm/dd/yyyy'
                        type='text'
                        value={dateForm.date}
                    />
                    <Module.TextInput
                        name='days'
                        onChange={handleChange}
                        placeholder='(+/-) days'
                        type='number'
                        value={dateForm.days}
                    />
                    <Module.TextInput
                        name='months'
                        onChange={handleChange}
                        placeholder='(+/-) months'
                        type='number'
                        value={dateForm.months}
                    />
                    <Module.TextInput
                        name='years'
                        onChange={handleChange}
                        placeholder='(+/-) years'
                        type='number'
                        value={dateForm.years}
                    />
                    <ClearButton
                        className='clear-button'
                        onClick={clearForm}>
                        Clear
                    </ClearButton>

                    {/* TODO: Make the result copy-able */}
                    {/* TODO: Create Animation for the results when they reveal */}

                    {isResultsDisplayed && (
                        <DateCalculatorStyle.ResultsContainer>
                            <div className='module__result-container'>
                                <p className='module__result-label'>
                                    Result (-1)
                                </p>
                                <p className='module__result'>
                                    {resultDateLess}
                                </p>
                            </div>
                            <div className='module__result-container'>
                                <p className='module__result-label'>Result</p>
                                <p className='module__result'>{resultDate}</p>
                            </div>
                        </DateCalculatorStyle.ResultsContainer>
                    )}
                </Module>
            </DateCalculatorStyle.Wrapper>
        </>
    )
}

export default DateCalculator
