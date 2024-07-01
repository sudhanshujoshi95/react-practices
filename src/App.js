import "./App.css";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/video";
import videos from "./data/data";

export default function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {
        videos.map(video=>
        <Video 
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
          >
          <PlayButton onPlay={()=>console.log('Playing....', video.title)} onPause={()=>console.log('Paused....', video.title)}>{video.title}</PlayButton>
          </Video>
          )
      }
      {/* <Video verified={true} title="React JS Tutorial" views="95K" time="5 months ago" /> */}
      {/* <Video verified={false} title="Node JS Tutorial" views="100K" time="8 months ago" /> */}
      {/* <Video {...obj2} /> */}
      
      {/* <Video {...obj1} /> */}

      <div style={{clear: 'both'}}>
      {/* <PlayButton message='play-button' onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton>   */}
      {/* <PlayButton message='pause-button' onSmash={()=>alert('Pause')}>Pause</PlayButton> */}
      </div>

    </div>
  );
}
