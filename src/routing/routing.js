import Home from "../pages/Home";

import Headphones from "../pages/Headphones";
import MixPults from "../pages/MixPults";
import Speakers from "../pages/Speakers";
import Product from "../pages/Product";

export const routing = [
	{ name: "home", path: "/", component: Home, exact: true },
	{ name: "headphones", path: "/headphones", component: Headphones },
	{ name: "speakers", path: "/speakers", component: Speakers },
	{ name: "mix pults", path: "/mix-pults", component: MixPults },
	{ name: "product", path: "/:category/:productId", component: Product },


];
