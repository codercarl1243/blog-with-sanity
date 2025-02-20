

export type ImageProps = {
    asset: SanityImageSource;
    alt: string;
    lqip: string;
}

export type ImageComponentProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    lqip?: string;
}
