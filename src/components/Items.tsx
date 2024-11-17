import { Item } from './Item';
import { useItems } from './ItemsProvider';

export const Items = () => {
    const { items } = useItems();
    return (
      <>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
          />
        ))}
      </>
    );
};