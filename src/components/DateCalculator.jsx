import { add, format } from 'date-fns'
import { useState } from 'react'
import Module from '../../blocks/Module'

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

    const isResultsDisplayed = dateForm.days + dateForm.months + dateForm.years

    return (
        <>
            <Module>
                <Module.Title>Date Calculator</Module.Title>
                <Module.InputContainer>
                    <input
                        placeholder='mm/dd/yyyy'
                        maxLength='10'
                        name='date'
                        value={dateForm.inputDate}
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        name='days'
                        value={dateForm.days}
                        onChange={handleChange}
                        placeholder='(+/-) days'
                        type='number'
                    />
                    <input
                        name='months'
                        value={dateForm.months}
                        placeholder='(+/-) months'
                        onChange={handleChange}
                        type='number'
                    />
                    <input
                        name='years'
                        value={dateForm.years}
                        placeholder='(+/-) years'
                        onChange={handleChange}
                        type='number'
                    />
                </Module.InputContainer>
                {isResultsDisplayed && (
                    <div className='module__result-container flex'>
                        <div className='module__result'>{resultDate}</div>
                        <div className='module__result'>{resultDateLess}</div>
                    </div>
                )}
            </Module>
        </>
    )
}

export default DateCalculator
