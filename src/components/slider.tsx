import * as React from "react"
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const Carousel = makeCarousel( ({children}) =>
	<div className="carousel">
		{ children }
	</div>
);

interface SliderProps {
	slides: JSX.Element[]
}

export const Slider: React.FC<SliderProps> = props => {
	return (
		<Carousel 
			defaultWait={ 10000 }
			maxTurns={Number.MAX_SAFE_INTEGER}
		>
			{
				props.slides.map( ( item, idx ) => <Slide right key={idx}>{ item }</Slide>)
			}
		</Carousel>
	)
}

// export const Slider: React.FC<SliderProps> = props => {
// 	return (
// 		<div className="carousel"
// 		>
// 			{
// 				props.slides?.map( item => <div className="slide">{ item }</div>)
// 			}
// 		</div>
// 	)
// }
