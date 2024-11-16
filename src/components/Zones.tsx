import { useZones } from './ZonesProvider';
import { Zone } from './Zone';

export const Zones = () => {
  const { zones } = useZones();
  return (
    <>
      {zones.map((item) => (
        <Zone
          item={item}
          key={item.id}
        />
      ))}
    </>
  )
}