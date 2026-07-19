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

        {/* Unlock button on the main page */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-6 py-2 rounded-full font-bold cursor-pointer"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '9%',
            transform: 'translateX(-50%)',
            backgroundColor: 'transparent',
            border: '2px solid #7A1E2B',
            color: '#7A1E2B',
            fontFamily: "'Cardo', serif",
            fontSize: '1rem',
          }}
        >
          Unlock
        </button>

        {/* Popup with low-opacity dark overlay */}
        {showModal && (
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-2xl px-6 py-8 w-[80%] max-w-xs shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: '100%',
                    borderBottom: '0.8px solid black',
                    paddingBottom: '4px',
                  }}
                >
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your favt words"
                    style={{
                      width: '100%',
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: '0.75rem',
                      color: 'black',
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
                      color: '#8B593C',
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="px-6 py-2 rounded-full font-bold cursor-pointer mt-2"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #7A1E2B',
                    color: '#7A1E2B',
                    fontFamily: "'Cardo', serif",
                    fontSize: '1rem',
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
