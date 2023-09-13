export const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            // opacity: 0,
        }
    },
}

export const dotsVariants = {
    initial: {
        y: 0,
    },
    animate: {
        y: -10,
        scale: 1.2,
        transition: { type: 'spring', stiffness: 1000, damping: '10' },
    },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
}
