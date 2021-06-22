import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  'https://k.nooncdn.com/cms/pages/20210614/9869c6c393e8857e667c2b8c11e13e16/en_slider-01.gif',
  'https://k.nooncdn.com/cms/pages/20210614/09a01ec8709dd3b5b0c36828dc61b333/en_banner-01.png',
  'https://k.nooncdn.com/mon/1623526573335-ckpu5sxef0b5g1brboca2jhze.png',
  'https://k.nooncdn.com/cms/pages/20210618/8daeb8fe378bd22d05a5547c16df1274/en_slider-01-1DAY.png',
  'https://k.nooncdn.com/mon/1624077414314-ckq39rd0q0ncgrvr0uvpyk8qc.jpg'
];

const Slideshow = () => {
  
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div><div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
        </Slide>
        <h1><span className='text-danger'>BIG SAVE</span> ACROSS EVERYTHING </h1>
      </div>
    )
};

export default Slideshow;