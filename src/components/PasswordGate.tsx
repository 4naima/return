import { useState, useEffect } from 'react';

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [bgLoaded, setBgLoaded] = useState(false);

  // 👇 Change this to whatever password you want. This is the only line you
  // need to edit to update it later.
  const correctPassword = 'OpenSesame26';

  const BG_URL = 'https://i.ibb.co.com/LX2p48Wx/Brown-Photographic-Vintage-Christmas-Craft-Market-Flyer-20260719-165456-0000.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = BG_URL;

    img.onload = async () => {
      try {
        await img.decode();
      } catch {}
      setBgLoaded(true);
    };

    img.onerror = () => {
      setBgLoaded(true);
    };

    if (img.complete) {
      setBgLoaded(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      setError('Hehe vul,abar dao!');
      setPassword('');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-white">
      <div className="relative w-full max-w-md h-full max-h-screen">
        {!bgLoaded && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${BG_URL}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}

        {bgLoaded && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${BG_URL}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#fff',
            }}
          />
        )}

        <form onSubmit={handleSubmit}>
          <div
            style={{
              position: 'absolute',
              left: '24.7%',
              top: '70%',
              width: '22%',
              borderBottom: '0.8px solid black',
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the Word"
              style={{
                width: '100%',
                fontFamily: "'Courier Prime', monospace",
                fontSize: '0.62rem',
                color: 'black',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                padding: '0px',
              }}
              autoFocus
            />
          </div>
        </form>

        {error && (
          <p
            style={{
              position: 'absolute',
              left: '24.7%',
              top: '73.9%',
              fontFamily: "'Courier Prime', monospace",
              fontSize: '0.65rem',
              color: '#8B593C',
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="px-6 py-2 rounded-full font-bold cursor-pointer"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '9%',
            transform: 'translateX(-50%)',
            backgroundColor: 'transparent',
            border: '2px solid #8B593C',
            color: '#8B593C',
            fontFamily: "'Cardo', serif",
            fontSize: '1rem',
          }}
        >
          Unlock
        </button>
      </div>
    </div>
  );
}
