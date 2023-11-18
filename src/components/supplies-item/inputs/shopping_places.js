import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  async () => (await import('@/components/common/lazy-map')),
  {
    ssr: false,
  }
)

export default function ShoppingPlaces({ title, field_name, places_list, handleFieldChange }) {
  return <DynamicMap />;
}
