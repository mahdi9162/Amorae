import Bookings from '@/components/bookings/Bookings';
import { dbConnect, collections } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';

const getSingleService = async (id) => {
  const col = dbConnect(collections.SERVICES);
  return await col.findOne({ _id: new ObjectId(id) });
};
const BookingPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service) return <h2>Bookings not found</h2>;

  const allServices = {
    ...service,
    _id: service._id.toString(),
  };
  return (
    <>
      <Bookings service={allServices} />
    </>
  );
};
export default BookingPage;
