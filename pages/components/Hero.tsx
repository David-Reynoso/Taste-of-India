import main from "../../styles/main.module.css";
import Image from "next/image";
import heroImage from "../../public/heroImage.jpg";

const Hero = () => {
  return (
    <div className={main.heroContainer}>
      <Image
        className={main.heroImage}
        priority={true}
        src={heroImage}
        alt="Food Image"
      ></Image>
      <h3 className={main.heroTextmain}>
        This is Where Flavor Meets Simplicity!
        <br />
        Discover mouthwatering Indian cuisine and recipes.
        <br />
        Start your culinary adventure now!
      </h3>
    </div>
  );
};

export default Hero;
