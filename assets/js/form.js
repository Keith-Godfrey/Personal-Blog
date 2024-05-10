function handleFormSubmit (e) {
    e.preventDefault()
    const username=document.querySelector('#Username').value .trim()
    const title=document.querySelector('#Title').value .trim()
    const content=document.querySelector('#Content').value .trim()
}



document.querySelector('form').addEventListener('submit', handleFormSubmit)