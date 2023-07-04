import { add, format } from 'date-fns'
import { useState } from 'react'
import Results from './Results'
import {
    ClearButton,
    DateCalculatorWrapper,
    TextInput,
    Title,
} from './index.style'

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
            <DateCalculatorWrapper>
                <Title>Date Calculator</Title>
                <TextInput
                    maxLength='10'
                    name='date'
                    onChange={handleChange}
                    placeholder='mm/dd/yyyy'
                    type='text'
                    value={dateForm.date}
                />
                <TextInput
                    name='days'
                    onChange={handleChange}
                    placeholder='(+/-) days'
                    type='number'
                    value={dateForm.days}
                />
                <TextInput
                    name='months'
                    onChange={handleChange}
                    placeholder='(+/-) months'
                    type='number'
                    value={dateForm.months}
                />
                <TextInput
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
                    <Results
                        resultDate={resultDate}
                        resultDateLess={resultDateLess}
                    />
                )}
            </DateCalculatorWrapper>
        </>
    )
}

export default DateCalculator
