import Image from "next/image";
import type { ImageComponentProps } from "./image";
import { ErrorBoundary } from "react-error-boundary";
import {ImageIcon} from '@sanity/icons'

export default function ImageComponent(
    { src, alt = "", width = 800, height = 300, lqip

    }: ImageComponentProps) {

    return <ErrorBoundary
    fallback={<FallBackImage width={width} height={height} />}>
        <Image
            src={src}
            alt={alt}
            style={{ width: `${width}px`, height: `${height}px`, objectFit: "cover" }}
            width={width}
            height={height}
            blurDataURL={lqip}
            placeholder="blur"
            loading="lazy"
        />
    </ErrorBoundary>
}

function FallBackImage({width, height}: {width: number, height: number}){

    return (
        <div
        style={{ width: `${width}px`, height: `${height}px`}}
        >
            <ImageIcon 
                 style={{ width: `${width}px`, height: `${height}px`}}
            />
        </div>
    )
}