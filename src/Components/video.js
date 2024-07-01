import './video.css';

function Video({title, channel="Learn Programming", views, time, verified, children}){
    // let topic = "React JS";
    // let bg = 'dark';
    // let channelJSX;
    // if(verified){
    //     channelJSX = <div className='channel'>{channel} 🔵</div>
    // }
    // else{
    //     channelJSX = <div className='channel'>{channel}</div>
    // }
    return (
        <>
        <div className='container'>
        <div className='pic'>
            <img src="https://picsum.photos/seed/picsum/400/200" alt=""/>
        </div>
            <div className='title'>{title}</div>
            <div className='channel'>{channel} {verified ? '🔵' : null}</div>
            <div className='views'>{views} Views <span>.</span>{time}</div>
            <div>{children}</div>
        </div>
        
        </>

    );
}

export default Video;