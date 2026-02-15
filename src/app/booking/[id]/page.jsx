import Bookings from '@/components/bookings/Bookings';

const getSingleService = async (id) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/serviceApi/${id}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API failed ${res.status}: ${text}`);
  }

  return res.json();
};
const BookingPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service) return <h2>Bookings not found</h2>;
  return (
    <>
      <Bookings service={service} />
    </>
  );
};
export default BookingPage;
