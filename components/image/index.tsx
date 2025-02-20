import { urlFor } from "@/sanity/lib/image";
import ImageComponent from "./image.component";
import type { ImageProps } from "./image";


export default function Image({asset, alt, lqip}: ImageProps){

    return <ImageComponent src={urlFor(asset).url()} alt={alt} lqip={lqip} />
}