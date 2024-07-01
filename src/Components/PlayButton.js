import './PlayButton.css';

export default function PlayButton({message, children, onPlay, onPause}){

    let playing = false;  //don't use this approach. [State management feature of react to be used in such a case].
    function handleClick(e){
        console.log(e);
        e.stopPropagation();

        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }

    return(
        <div>
            <button  
            onClick={/*1. ()=>console.log('play')
                       2. handleClick() --> wrong              */
                    handleClick}>{children} : {playing? '>' : '||'}</button>
        </div>

    );
}