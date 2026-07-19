import { useState } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { SongPlaylist } from './components/SongPlaylist';
import { VoiceNote } from './components/VoiceNote';

const musicBg = 'https://i.ibb.co.com/gZNXXB6X/neww-all-bg.jpg';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="relative h-screen">
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${musicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          WebkitTouchCallout: 'none',
          userSelect: 'none',
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
      <div
        className="relative z-10 h-full overflow-y-auto space-y-12 max-w-6xl mx-auto p-4 py-12"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <SongPlaylist />
        <VoiceNote />
      </div>
    </div>
  );
}
