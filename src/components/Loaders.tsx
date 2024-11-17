import { SpaceLoader } from './SpaceLoader';
import { FurnitureLoader } from './FurnitureLoader';

type LoaderComponent = () => null;

const loaders: LoaderComponent[] = [
    SpaceLoader,
    FurnitureLoader
]

export const Loaders = () => {
    return (
        <>
            {loaders.map((Loader, key) => (
                <Loader key={key} />
            ))}
        </>
    );
};