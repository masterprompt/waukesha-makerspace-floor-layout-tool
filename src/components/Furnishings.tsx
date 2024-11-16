import { useFurniture } from './FurnitureProvider';
import { Furnishing } from './Furnishing';

export const Furnishings = () => {
    const { furniture, onChange } = useFurniture();
    return (
      <>
        {furniture.map((item) => (
          <Furnishing
            item={item}
            key={item.id}
            onChange={onChange}
          />
        ))}
      </>
    )
  }