import { urlFor } from "@/sanity/lib/image";
import ImageComponent from "./image.component";


export default function Image({asset, alt}){


    const imageUrl = urlFor(asset).url()




    return <ImageComponent src={imageUrl} alt={alt}/>
}

