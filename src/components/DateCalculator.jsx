import { add, format } from 'date-fns'
import { useState } from 'react'
import Module from '../../blocks/Module'
import ClearButton from '../../blocks/Module/ClearButton'
import DateCalculatorStyle from './DateCalculator-Style'

function DateCalculator() {
    const [dateForm, setDateForm] = useState({
        date: '',
        days: '',
        months: '',
        years: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setDateForm((prevDateForm) => {
            return {
                ...prevDateForm,
                [name]: value,
            }
        })
    }

    const handleClick = () => {
        setDateForm({
            date: '',
            days: '',
            months: '',
            years: '',
        })
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
            <DateCalculatorStyle.Main>
                <Module>
                    <Module.Title>Date Calculator</Module.Title>
                    <Module.TextInput
                        placeholder='mm/dd/yyyy'
                        maxLength='10'
                        name='date'
                        value={dateForm.date}
                        type='text'
                        onChange={handleChange}
                    />
                    <Module.TextInput
                        name='days'
                        value={dateForm.days}
                        onChange={handleChange}
                        placeholder='(+/-) days'
                        type='number'
                    />
                    <Module.TextInput
                        name='months'
                        value={dateForm.months}
                        placeholder='(+/-) months'
                        onChange={handleChange}
                        type='number'
                    />
                    <Module.TextInput
                        name='years'
                        value={dateForm.years}
                        placeholder='(+/-) years'
                        onChange={handleChange}
                        type='number'
                    />
                    <ClearButton
                        className='clear-button'
                        onClick={handleClick}>
                        Clear
                    </ClearButton>

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
            </DateCalculatorStyle.Main>
        </>
    )
}

export default DateCalculator
