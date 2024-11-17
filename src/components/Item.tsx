import { IImage, IRect, ItemType, ITransform } from '../types';
import { Image } from './Image';
import { Rect } from './Rect';

interface Props {
    item: ITransform;
}

export const Item = ({
    item
}: Props) => {
    switch (item.type) {
        case ItemType.IMAGE:
            return (<Image item={item as IImage} />);
        case ItemType.RECT:
            return (<Rect item={item as IRect} />);
        default:
            return null;
    }
};