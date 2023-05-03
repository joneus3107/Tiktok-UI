import { useState } from 'react';
import DefaultImage from '~/assets/images/default_image.png';

function Image({ src, alt = 'image', className, ...props }) {
    const [fallback, setFallback] = useState(src);

    const handleError = () => {
        setFallback(DefaultImage);
    };

    return (
        <img
            className={className}
            src={fallback}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
