import React, {useState} from 'react'

function QuestionForm() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target['my_input'].value)
    }


    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm
