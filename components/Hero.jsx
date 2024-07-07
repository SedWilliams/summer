import Image from 'next/image';
import HeroImage from "../public/imgs/hero.png";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <div className="Hero">
            <Image src={HeroImage} id="HeroImage" alt="Hero" />
        </div>
    );
}
