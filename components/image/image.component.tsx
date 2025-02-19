import Image from "next/image";

type TProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function ImageComponent({src, alt = "", width = 800, height = 300}: TProps){

    return (
        <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
        />
    )
}