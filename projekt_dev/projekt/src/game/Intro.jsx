import React, {useState} from 'react';

function Intro({onStart}){
    const [step, setStep] = useState(0);

    const text = [
        "Świat pogrążony w chaosie od wieków.",
        "Trzy krainy walczą o ostatnie źródła magicznej energii.",
        "Ty — ostatni z Zaklinaczy Cienia — zostałeś przywołany z zapomnienia...",
        "Przed tobą długa droga, pełna wrogów, wyborów i tajemnic.",
        "Twoja legenda zaczyna się teraz..."
    ];

    const handleNext = () => {
        if(step < text.length - 1){
            setStep(step+1);
        }else{
            onStart();
        }
    }

    return(
        <div style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '40px',
            borderRadius: '10px',
            maxWidth: '600px',
            margin: '80px auto',
            textAlign: 'center',
            fontSize: '1.2em'
        }}>
            <p> {text[step]} </p>
            <button onClick={handleNext} style={{marginTop: '30px', padding: '10px 20px'}} >
                {step < text.length - 1 ? 'Dalej' : 'Rozpocznij przygodę'}
            </button>
        </div>
    );
}

export default Intro;