import React from "react";
import colors from "../../styled-system/colors";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as RespCarousel} from 'react-responsive-carousel';

function Carousel({ images }) {


	

	console.log(images);
	return (
		<CarouselWrapper>
            <RespCarousel>
                {images.map((imageURL, i) => {
                    return <CarouselImageWrap key={i}> <img src={imageURL} /></CarouselImageWrap> 
                     
                })}
            
            </RespCarousel>
		</CarouselWrapper>
	);
}

const CarouselWrapper = styled.div`
	border: 1px solid ${colors.grey};
	background-color: ${colors.white};
	flex: 1;
`; 

const CarouselImageWrap = styled.div`
`
export default Carousel;
