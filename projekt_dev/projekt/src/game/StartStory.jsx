import React from 'react';

function StartStory({ character, onContinue }) {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'serif' }}>
      <h2>Rozdział I: Przebudzenie</h2>
      <p>
        Twoje powieki drgają, gdy światło poranka przedziera się przez zasłonę snu.  
        {character.name} otwiera oczy, wpatrując się w sufit nieznanego pomieszczenia.  
        W głowie kłębi się mętlik – gdzie jesteś? Kim jesteś? Ale jedno jest pewne – coś się wydarzyło.
      </p>
      <p>
        Na podłodze leży zniszczony miecz. W oddali słychać niepokojące dźwięki.  
        To nie jest zwykły dzień. To dzień, w którym twoja przygoda się zaczyna.
      </p>
      <button onClick={onContinue} style={{ marginTop: '20px' }}>
        Kontynuuj
      </button>
    </div>
  );
}

export default StartStory;
