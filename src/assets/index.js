import bestPrice from "./best-price.svg";
import customerSupport from "./customer-support.svg";
import headphones from "./headphones.svg";
import returnPolicy from "./return-policy.svg";
import mGlass from "./magnifying-glass.svg";
import shipping from "./shipping.svg";
import crypto from "./crypto.svg"
import notFound from "./not-found.svg"

const svg = {
    ui: [mGlass],
    
    homePage: [{img: bestPrice, text:"Find it cheaper elsewhere? We will match any price from an authorized dealer." , title:"BEST PRICE ON PREMIUM HEADPHONES, GUARANTEED"}, {img: customerSupport, text:"Receive live customer support from real humans who love headphones as much as you do.", title:"WORLD-CLASS SUPPORT EVERY STEP OF THE WAY"}, {img: headphones, text:"We have curated only the best in premium audio from top brands like Focal, Sennheiser, and Hifiman.", title:"BY AUDIO LOVERS, FOR AUDIO LOVERS"}, {img: returnPolicy, text:"Our unparalleled 365-day return policy* gives you lots of time to fall in love with your new gear.", title:"LOVE AT FIRST (OR SECOND) LISTEN"}],
    
    productCard: [{img: bestPrice, title: "price match available"},{img: shipping, title: "Courier 2-Day shipping"},{img: returnPolicy, title: "365-day returns"},{img: crypto, title: "Pay with Crypto"},],
    notFound: {img: notFound}

};

export default svg;
