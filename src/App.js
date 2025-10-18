import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [adLoaded, setAdLoaded] = useState(false);

  // Încarcă script-ul Monetag
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://example.monetag.com/script.js"; // Înlocuiește cu URL-ul real
    script.async = true;

    // Când script-ul e încărcat, setăm adLoaded = true
    script.onload = () => {
      console.log("Monetag script loaded");
      setAdLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load Monetag script");
    };

    document.body.appendChild(script);

    // Curățare script la unmount (opțional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShowAd = () => {
    if (adLoaded && window.show_10055544) {
      window.show_10055544('pop')
        .then(() => {
          // Codul pentru recompensă
          alert("Felicitări! Ai câștigat recompensa!");
        })
        .catch((e) => {
          console.error("Eroare la afișarea ad-ului:", e);
        });
    } else {
      console.error("Ad-ul nu e încă disponibil. Încearcă din nou peste câteva secunde.");
      alert("Ad-ul nu e încă disponibil. Încearcă din nou peste câteva secunde.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lasa-ma in pace
        </a>

        {/* Buton pentru rewarded ad */}
        <button
          onClick={handleShowAd}
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Watch Ad
        </button>
      </header>
    </div>
  );
}

export default App;
