import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  // Dacă vrei, poți încărca scriptul Monetag dinamic (opțional)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://example.monetag.com/script.js"; // înlocuiește cu URL-ul real
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleShowAd = () => {
    if (window.show_10055544) {
      window.show_10055544('pop')
        .then(() => {
          // aici pui logica de recompensă
          alert("Felicitări! Ai câștigat recompensa!");
        })
        .catch((e) => {
          console.error("Eroare la afișarea ad-ului:", e);
        });
    } else {
      console.error("Script-ul Monetag nu e încă încărcat");
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
