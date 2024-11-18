import { composeProvider } from 'react-compose-provider';
import { DownloadImageProvider } from './DownloadImageProvider';
import React from 'react';
import { ZoomProvider } from './ZoomProvider';
import { SelectedTransformProvider } from './SelectedTransformProvider';
import { ItemsProvider } from './ItemsProvider';
import { ModalStackProvider } from '../features/modal-stack';
import { ColorProvider } from './ColorProvider';

const Provider = composeProvider(
    DownloadImageProvider,
    ZoomProvider,
    ItemsProvider,
    SelectedTransformProvider,
    ColorProvider,
    ModalStackProvider
);

export const Providers = ({ children }: React.PropsWithChildren) => (<Provider>{children}</Provider>);