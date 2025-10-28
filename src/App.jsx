import { useState } from 'react'
import reactLogo from './assets/react.svg'
import instagramLogo from './assets/instagram.svg'
import youtubeLogo from './assets/YouTube.svg'
import xLogo from './assets/X.svg'
import appleMusicLogo from './assets/AppleMusic.svg'
import spotifyLogo from './assets/spotify.svg'
import marppleshopLogo from './assets/MarppleShop.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/yerin_the_genuine/" target="_blank">
          <img src={instagramLogo} className="logo" alt="instagram logo" />
        </a>
        <a href="https://www.youtube.com/@YerinBaekOfficial" target="_blank">
          <img src={youtubeLogo} className="logo" alt="YouTube logo" />
        </a>
        <a href="https://x.com/yerinbaek" target="_blank">
          <img src={xLogo} className="logo" alt="X logo" />
        </a>
        <a href="https://music.apple.com/us/artist/yerin-baek/1053924796" target="_blank">
          <img src={appleMusicLogo} className="logo" alt="AppleMusic logo" />
        </a>
        <a href="https://open.spotify.com/artist/6dhfy4ByARPJdPtMyrUYJK" target="_blank">
          <img src={spotifyLogo} className="logo" alt="Spotify logo" />
        </a>
        <a href="https://marpple.shop/kr/yerinbaek?srsltid=AfmBOop1f5TPEVenF4Uu0dgayRcGpNLGzcDRZIuHYUPCS2CXRlAxsMqF" target="_blank">
          <img src={marppleshopLogo} className="logo" alt="MarppleShop logo" />
        </a>
      </div>
      <h1>We Have To Love Her Songs!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I Love You {count}
        </button>
        <p>
          사랑 그녀를 하는 만큼 누르다!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to know more
      </p>
    </>
  )
}

export default App
