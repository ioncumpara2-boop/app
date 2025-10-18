import logo from './logo.svg';
import './App.css';

function App() {

  const handleShowRewardedAd = () => {
    if (window.show_10058393) {
      window.show_10058393('pop')
        .then(() => {
          // user watch ad till the end or close it
          // codul tău pentru recompensă
          alert("Felicitări! Ai câștigat recompensa!");
        })
        .catch((e) => {
          // user get error during playing ad
          console.error("Eroare la afișarea ad-ului:", e);
        });
    } else {
      alert("Ad-ul nu e încă disponibil. Încearcă peste câteva secunde.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

        {/* Buton Rewarded Ad */}
        <button
          onClick={handleShowRewardedAd}
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Watch Rewarded Ad
        </button>
      </header>
    </div>
  );
}

export default App;
