import React from "react"
export default function Counter({ onLog }: { onLog: () => void }) {
 console.log("Counter zrenderowany")
 return <button onClick={onLog}>Pokaż licznik</button>
}