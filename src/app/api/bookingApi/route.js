import { dbConnect } from '@/app/lib/dbConnect';

const bookingCollection = dbConnect('bookings');

export async function POST(request) {
  const booking = await request.json();

  if (!booking) {
    return Response.json({ message: 'Booking data required' }, { status: 400 });
  }

  const newBooking = { ...booking, createdAt: new Date() };

  const result = await bookingCollection.insertOne(newBooking);

  return Response.json({
    success: true,
    insertedId: result.insertedId,
  });
}
