import { IImage, ILabel, IRect, ItemType, ITransform } from '../types';
import { Image } from './Image';
import { Label } from './Label';
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
        case ItemType.LABEL:
            return (<Label item={item as ILabel} />)
        default:
            return null;
    }
};