import "./App.css";
import Counter from "./Components/Counter";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/video";
import videoDB from "./data/data";
import { useState } from "react";

export default function App() {
  const[videos, setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>
        <button onClick={()=>{
          setVideos([...videos, {
            title:'Flutter Tutorials',
            views:'1.5M',
            time:'5 months ago',
            verified:true,
        }]);
        }}>Add Video</button>
      </div>
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

      <Counter/>

    </div>
  );
}
