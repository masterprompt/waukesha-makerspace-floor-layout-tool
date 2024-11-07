import { composeProvider } from 'react-compose-provider';
import { DownloadImageProvider } from './DownloadImageProvider';
import React from 'react';
import { ZoomProvider } from './ZoomProvider';
import { FurnitureProvider } from './FurnitureProvider';

const Provider = composeProvider(
    DownloadImageProvider,
    ZoomProvider,
    FurnitureProvider,
);

export const Providers = ({ children }: React.PropsWithChildren) => (<Provider>{children}</Provider>);