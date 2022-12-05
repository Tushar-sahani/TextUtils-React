import React, { useState } from 'react'

export default function Input(props) {
    const uppercasehandler = () => {
        setText(text.toUpperCase());
    }
    const changehandler = (event) => {
        setText(event.target.value)
    }
    const lowercasehandler = ()=>{
        setText(text.toLocaleLowerCase());
    }
    const clear = () => {
        setText("");
    }

    const [text, setText] = useState("")
    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 >Enter Text Here</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={changehandler} style = {{
                    backgroundColor: props.mode === 'dark' ? 'grey' : 'white'
                }} id="exampleFormControlTextarea1" rows="8" ></textarea>
            </div>
            <div>
                <button type="submit" className='bg-secondary' onClick={uppercasehandler}>ConvertUPPER</button>
                <button type="submit" className='bg-secondary mx-3' onClick={lowercasehandler}>Convertlower</button>
                <button type="submit" className="bg-secondary " onClick={clear}>Clear</button>
            </div>
            <div>
                <h1>Words And Letters</h1>
                <p>
                    Letters:{text.length}  Words:{text.split(" ").length}
                </p>
                <h1>Preview text</h1>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
