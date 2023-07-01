function DateCalculator() {
    return (
        <>
            <h2 className='module__title'>Date Calculator</h2>
            <input type='date' />
            <input
                placeholder='(+/-) days'
                type='number'
            />
            <input
                placeholder='(+/-) months'
                type='number'
            />
            <input
                placeholder='(+/-) years'
                type='number'
            />
            <div className='module__result'>
                <div className='module__result-container'>1/3/5</div>
                <div className='module__result-container'>1/25/54j</div>
            </div>
        </>
    )
}

export default DateCalculator
