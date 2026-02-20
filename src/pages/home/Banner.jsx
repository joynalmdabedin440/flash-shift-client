
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/banner/banner1.png"
import img2 from "../../assets/banner/banner2.png"
import img3 from "../../assets/banner/banner3.png"

export const Banner = () => {
    return (
        <Carousel infiniteLoop={true} autoPlay={false} >
            <div>
                <img src={img1} />
                
            </div>
            <div>
                <img src={img2} />
                
            </div>
            <div>
                <img src={img3} />
                
            </div>
        </Carousel>
    )
}
