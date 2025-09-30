declare module 'react-card-slider-component' {
    import * as React from 'react';
    interface Slide {
        image?: string;
        title?: string;
        description?: string;
        clickEvent?: (e?: any) => void;
    }
    interface ReactCardSliderProps {
        slides?: Slide[];
        onCardClick?: (index: number) => void;
        [key: string]: any;
    }
    const ReactCardSlider: React.ComponentType<ReactCardSliderProps>;
    export default ReactCardSlider;
}
