import { useZones } from './ZonesProvider';
import { Zone } from './Zone';

export const Zones = () => {
  const { zones, onChange } = useZones();
  return (
    <>
      {zones.map((item) => (
        <Zone
          item={item}
          key={item.id}
          onChange={onChange}
        />
      ))}
    </>
  )
}