import { useState } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { SongPlaylist } from './components/SongPlaylist';
import { VoiceNote } from './components/VoiceNote';

// Background image kept from the original GiftBox page — everything else from
// GiftBox (intro videos, "Open" button, box-click logic) was intentionally removed.
const musicBg = 'https://i.ibb.co.com/gZNXXB6X/neww-all-bg.jpg';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div
      className="min-h-dvh relative"
      style={{
        backgroundImage: `url(${musicBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-10 space-y-12 max-w-6xl mx-auto p-4 py-12">
        <SongPlaylist />
        <VoiceNote />
      </div>
    </div>
  );
}
