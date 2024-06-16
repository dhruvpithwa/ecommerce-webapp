
type CenteredImageType = {
    src: string;
    alt: string;
    height: number;
}

export const CenteredImage  = ({ src, alt, height}: CenteredImageType) => {
    return (
          <img
            src={src}
            alt={alt}
            style={{
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
              maxHeight: height
            }}
          />
    );
};
    