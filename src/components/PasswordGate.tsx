import { useState } from 'react';

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 👇 Change this to whatever password you want.
  const correctPassword = 'bah bah';

  const BG_URL =
    'https://i.ibb.co.com/gMy0DXJM/Red-and-Beige-Aesthetic-Coquette-Thank-You-Letter-A4-20260719-183748-0000.jpg';

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

        {/* Unlock button on the main page — circular, red */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-6 py-2 rounded-full font-bold cursor-pointer"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '5%',
            transform: 'translateX(-50%)',
            backgroundColor: 'transparent',
            border: '2px solid #B3202F',
            color: '#B3202F',
            fontFamily: "'Cardo', serif",
            fontSize: '1rem',
          }}
        >
          Unlock
        </button>

        {/* Popup with low-opacity dark overlay */}
        {showModal && (
          <div
            className="absolute inset-0 flex items-center justify-center z-20 px-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
            onClick={() => setShowModal(false)}
          >
            <div
              className="w-full max-w-xs bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl px-6 py-8 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your favt words"
                    style={{
                      width: '100%',
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: '0.8rem',
                      color: 'white',
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      padding: '0px',
                      textAlign: 'center',
                    }}
                    autoFocus
                  />
                </div>

                {error && (
                  <p
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: '0.7rem',
                      color: '#FCA5A5',
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#B3202F',
                    fontFamily: "'Cardo', serif",
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Unlock
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
