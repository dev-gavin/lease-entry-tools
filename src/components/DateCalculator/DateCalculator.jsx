import { add, format } from 'date-fns'
import { useState } from 'react'

function DateCalculator() {
    const [dateForm, setDateForm] = useState({
        date: new Date(),
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

    const jsDate = new Date(dateForm?.date)

    const resultDate = format(add(jsDate, dateForm), 'MM/dd/yyyy')
    const resultDateLess = format(
        add(jsDate, {
            ...dateForm,
            days: dateForm.days - 1,
        }),
        'MM/dd/yyyy'
    )

    return (
        <>
            <h2 className='module__title'>Date Calculator</h2>
            <input
                name='date'
                value={dateForm.inputDate}
                type='date'
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
            <div className='module__result'>
                <div className='module__result-container'>{resultDate}</div>
                <div className='module__result-container'>{resultDateLess}</div>
            </div>
        </>
    )
}

export default DateCalculator
