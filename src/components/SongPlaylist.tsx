import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import YouTube, { YouTubePlayer } from 'react-youtube';

const songs = [
  { id: 1, title: "Made In Japan", artist: "Buck Owens", duration: "2:44", cover: "https://i0.wp.com/www.countryuniverse.net/wp-content/uploads/2025/07/IMG_4800.jpeg?ssl=1", youtubeUrl: "https://youtu.be/2g5jmS8Vx9Q?si=NmMZJQq9OB3tI9N_" },
  { id: 2, title: "Something About You", artist: "EYEDRESS", duration: "2:33", cover: "https://i1.sndcdn.com/artworks-ObYlHjQYEHl63IFM-NIv4aQ-t500x500.jpg", youtubeUrl: "https://www.youtube.com/watch?v=j9yEL3B5Cvk&list=RDj9yEL3B5Cvk&start_radio=1" },
  { id: 3, title: "Oh My Angel", artist: "Bertha Tillman", duration: "2:22", cover: "https://i.scdn.co/image/ab67616d00001e0239c97dbc6284ee62da538384", youtubeUrl: "https://www.youtube.com/watch?v=ZuGqUj5xrhM" },
  { id: 4, title: "Iris", artist: "Goo Goo Dolls", duration: "3:35", cover: "https://images.genius.com/afef650b1e60e27d632e7c5765b39c37.1000x1000x1.png", youtubeUrl: "https://www.youtube.com/watch?v=NdYWuo9OFAw" },
  { id: 5, title: "I Thought I Saw Your Face Today", artist: "She & Him", duration: "2:50", cover: "https://i.scdn.co/image/ab67616d0000b273a47c6d8a934b4833c0916cc9", youtubeUrl: "https://www.youtube.com/watch?v=pyGU-UudvrM&list=RDpyGU-UudvrM&start_radio=1" },
  { id: 6, title: "Forever Young", artist: "Alphaville", duration: "3:42", cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2Fd0a3b27175c8397b7ac36b6c691b719a.597x600x1.jpg", youtubeUrl: "https://www.youtube.com/watch?v=oNjQXmoxiQ8" },
  { id: 7, title: "Yellow", artist: "Coldplay", duration: "4:32", cover: "https://i.scdn.co/image/ab67616d0000b2739164bafe9aaa168d93f4816a", youtubeUrl: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
  { id: 8, title: "Golden Hour", artist: "JVKE", duration: "3:51", cover: "https://i1.sndcdn.com/artworks-VphCeigNiaWQ-0-t500x500.jpg", youtubeUrl: "https://www.youtube.com/watch?v=PEM0Vs8jf1w&t=3s" },
  { id: 9, title: "Mayabono Biharini", artist: "Rabindra Sangeet by Somlata", duration: "3:09", cover: "https://c.saavncdn.com/511/Mayabono-Biharini-Single-Bengali-2025-20250304111304-500x500.jpg", youtubeUrl: "https://www.youtube.com/watch?v=5xPad9wg1B4" },
  { id: 10, title: "Just The Way You Are", artist: "Bruno Mars", duration: "3:56", cover: "https://i.scdn.co/image/ab67616d0000b2737039c1c841fc3dfa2ad8a0d8", youtubeUrl: "https://www.youtube.com/watch?v=LjhCEhWiKXk" },
  { id: 11, title: "Adore You", artist: "Harry Styles", duration: "3:38", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Bvr1hcXoayXtbXN1PaclhzdEn62KHshq1w&s", youtubeUrl: "https://www.youtube.com/watch?v=VF-r5TtlT9w" },
  { id: 12, title: "Nupur 2", artist: "Topu & Anila", duration: "5:29", cover: "https://i.scdn.co/image/ab67616d0000b27380ce14af2b5884a7ad300789", youtubeUrl: "https://www.youtube.com/watch?v=okjWEVarG1c&list=RDokjWEVarG1c&start_radio=1" },
  { id: 13, title: "Zaalima", artist: "Arijit Singh", duration: "2:51", cover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Zaalima_Raees_Cover.jpg", youtubeUrl: "https://www.youtube.com/watch?v=lpdRqn6xwiM" },
  { id: 14, title: "Tum Se Hi", artist: "Mohit Chauhan & Pritam", duration: "4:18", cover: "https://i1.sndcdn.com/artworks-w14JyiO8dGOfZrDP-69hakw-t500x500.jpg", youtubeUrl: "https://www.youtube.com/watch?v=mt9xg0mmt28" },
  { id: 15, title: "She Will Be Loved", artist: "Maroon 5", duration: "4:28", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/She_Will_be_Loved_cover.png", youtubeUrl: "https://www.youtube.com/watch?v=nIjVuRTm-dc" },
  { id: 16, title: "Her", artist: "JVKE", duration: "2:51", cover: "https://i1.sndcdn.com/artworks-OZdapPajMSfZ-0-t500x500.jpg", youtubeUrl: "https://www.youtube.com/watch?v=f5-IY_Ja1RM&list=RDf5-IY_Ja1RM&start_radio=1" },
  { id: 17, title: "Aankhein Teri", artist: "Roopkumar Rathod", duration: "6:04", cover: "https://i.imgur.com/yBH1YWL.png", youtubeUrl: "https://www.youtube.com/watch?v=pFxzF6lUx_0&list=RDpFxzF6lUx_0&start_radio=1" },
  { id: 18, title: " Be My Baby", artist: "The Ronettes", duration: "2:42", cover: "https://i.scdn.co/image/ab67616d0000b273b298efc29df3b69ec3f0d675", youtubeUrl: "https://www.youtube.com/watch?v=jSPpbOGnFgk" },
];

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

export function SongPlaylist() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const playerRef = useRef<YouTubePlayer | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const isPlayerReady = useRef(false);

  const handlePlayPause = () => {
    if (!playerRef.current || !isPlayerReady.current) return;
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const handleSongSelect = (index: number) => {
    setCurrentSong(index);
    if (playerRef.current && isPlayerReady.current) {
      playerRef.current.loadVideoById(getYouTubeId(songs[index].youtubeUrl));
      setCurrentTime(0);
      setDurationTime(0);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        const current = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        setCurrentTime(prev => Math.abs(prev - current) > 0.2 ? current : prev);
        setDurationTime(prev => Math.abs(prev - duration) > 0.2 ? duration : prev);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    playerRef.current.seekTo((clickX / rect.width) * durationTime, true);
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    isPlayerReady.current = true;

    // cue first song without autoplay
    playerRef.current.cueVideoById(getYouTubeId(songs[currentSong].youtubeUrl));
  };

  const onStateChange = (event: { data: number }) => {
    if (event.data === 1) setIsPlaying(true);
    else if (event.data === 2) setIsPlaying(false);
    else if (event.data === 0) { // ended
      if (currentSong < songs.length - 1 && playerRef.current) {
        const nextIndex = currentSong + 1;
        setCurrentSong(nextIndex);
        playerRef.current.loadVideoById(getYouTubeId(songs[nextIndex].youtubeUrl));
        playerRef.current.playVideo();
      } else setIsPlaying(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4">
      <h3
        className="text-white text-center mb-4 text-base sm:text-lg tracking-wide"
        style={{ fontFamily: "'Cinzel', serif" }}>
        18 songs I thought of you while picking
      </h3>

      <div
        className="relative bg-white/20 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/30 flex flex-col"
        style={{ height: '377px' }}>

        {/* cover + controls */}
        <div className="relative w-full h-36 mb-3 rounded-2xl overflow-hidden border border-white/40">
          {songs[currentSong].cover ? (
            <img src={songs[currentSong].cover} alt={songs[currentSong].title} className="w-full h-full object-cover" />
          ) : <div className="w-full h-full flex items-center justify-center bg-gray-200/50"><span className="text-2xl">🎵</span></div>}
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-3 rounded-2xl">
            <p className="text-xs text-gray-200 mb-1 font-semibold">Now Playing</p>
            <h4 className="text-base sm:text-lg font-bold text-white truncate">{songs[currentSong].title}</h4>
            <p className="text-xs sm:text-sm text-gray-100 truncate">{songs[currentSong].artist}</p>

            <div className="flex items-center gap-3 mt-2">
              <button onClick={handlePlayPause} className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl w-10 h-10 flex items-center justify-center">
                {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" /> :
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" />}
              </button>

              <div ref={progressRef} onClick={handleProgressClick} className="h-2 bg-gray-400/30 rounded-full flex-1 cursor-pointer relative">
                <div className="h-2 bg-white rounded-full" style={{ width: `${(currentTime / durationTime) * 100 || 0}%` }} />
              </div>

              <span className="text-[10px] sm:text-xs text-gray-100 font-mono">{formatTime(currentTime)} / {formatTime(durationTime)}</span>
            </div>
          </div>
        </div>

        {/* playlist */}
        <div className="flex-1 overflow-y-auto space-y-2 px-1">
          {songs.map((song, index) => (
            <div key={song.id}
              onClick={() => handleSongSelect(index)}
              className={`relative cursor-pointer rounded-xl overflow-hidden ${currentSong === index ? 'bg-amber-100/80 shadow-lg scale-[1.02]' : 'bg-white/60 hover:bg-white/80'}`}>
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-800/20">
                  {song.cover ? <img src={song.cover} alt={song.title} className="w-full h-full object-cover" /> : <span className="text-lg sm:text-xl">🎵</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-900 truncate text-xs sm:text-sm">{index + 1}. {song.title}</h5>
                  <p className="text-[10px] sm:text-xs text-gray-600 truncate">{song.artist}</p>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden">
        <YouTube opts={{ height: '0', width: '0', playerVars: { autoplay: 0 } }}
          onReady={onReady} onStateChange={onStateChange} />
      </div>
    </div>
  );
}
