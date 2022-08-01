import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import Carousel from "../Carousel/Carousel";

function ProductView({images, ...rest}) {
	return (
		<>
			<Carousel images={images} />
			<ProductCard {...rest} />
		</>
	);
}

export default ProductView;
