import React, {useEffect, useState} from "react";
import {db, auth} from './firebase';
import { doc, getDoc, setDoc, deleteDoc} from "firebase/firestore";
import CharacterSelect from "./CharacterSelect";

function CharacterSlots({onSelectCharacter}){
    const [slots, setSlots] = useState([null, null, null]);
    const [selectingSlot, setSelectingSlot] = useState(null);

    const uid = auth.currentUser?.uid;

    useEffect(() => {
        const fetchSlots = async () => {
            if(!uid) return;
            const fetchSlots = [];

            for(let i=0; i<3; i++){
                const slotsRef = doc(db, 'users', uid, 'characters', `slot${i+1}`);
                const slotSnap = await getDoc(slotsRef);

                fetchSlots[i] = slotSnap.exists() ? slotSnap.data() : null;
            }
            setSlots(fetchSlots);
        };

        fetchSlots();
    }, [uid]);

    const handleSelectCharacter = async (character) => {
        if (selectingSlot === null || !uid) return;

        const slotRef = doc(db, 'users', uid, 'characters', `slot${selectingSlot+1}`);

        await setDoc(slotRef, character);
        setSlots((prev) => {
            const updated = [...prev];
            updated[selectingSlot] = character;
            return updated;
        });

        setSelectingSlot(null);
        onSelectCharacter(character);
    };

    const handleDeleteSlot = async (index) => {
        if(!uid) return;
        const slotRef = doc(db, 'users', uid, 'characters', `slot${index+1}`);
        await deleteDoc(slotRef);

        setSlots((prev) => {
            const updated = [...prev];
            updated[index] = null;
            return updated;
        });
    };

    if(selectingSlot !== null){
        return <CharacterSelect onSelect={handleSelectCharacter} />;
    }

    return(
        <div>
            <h2>Wybierz slot postaci:</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                {slots.map((slot, index) => (
                    <div key={index} style={{border: '2px solid gray', padding: '10px', width:'180px'}}>
                        {slot ? (
                            <>
                                <h4>{slot.name}</h4>
                                <p>Poziom: {slot.level}</p>
                                <p>HP: {slot.hp} / {slot.maxHP}</p>
                                <button onClick={() => onSelectCharacter({...slot, slotId: `slot${index+1}` })} >Wczytaj</button>
                                <button onClick={() => handleDeleteSlot(index)} style={{marginTop: '10px', color: 'red'}} >Usuń</button>
                            </>
                        ) : (
                            <>
                                <p>Pusty slot</p>
                                <button onClick={() => setSelectingSlot(index)} >Nowa postać </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharacterSlots;