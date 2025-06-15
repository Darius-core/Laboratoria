import React from 'react';

function PostBattleStory({ character, onContinue }) {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'serif' }}>
      <h2>Rozdział II: Echa Zwycięstwa</h2>
      <p>
        Z trudem łapiesz oddech, patrząc na powalonego przeciwnika.  
        {character.name} czuje, jak adrenalina powoli opuszcza ciało,  
        zostawiając jedynie zmęczenie i niepokój.
      </p>
      <p>
        — To był dopiero początek — mówi cichy głos gdzieś z boku.  
        Z cienia wychodzi postać w płaszczu. Twarz ma zakrytą,  
        ale jej obecność wydaje się dziwnie znajoma.
      </p>
      <p>
        — Jeśli chcesz poznać prawdę o sobie… i o tym świecie — mówi tajemniczo —  
        spotkaj mnie przy ruinach świątyni na północ od lasu.
      </p>
      <p>
        Nim zdążysz zareagować, nieznajomy znika.  
        W głowie huczy pytanie: **kim jestem... i co mnie tu naprawdę sprowadziło?**
      </p>
      <button onClick={onContinue} style={{ marginTop: '20px' }}>
        Kontynuuj
      </button>
    </div>
  );
}

export default PostBattleStory;