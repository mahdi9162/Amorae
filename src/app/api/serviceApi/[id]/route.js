import { dbConnect } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';

const serviceCollection = dbConnect('services');

export async function GET(request, { params }) {
  const { id } = await params;

  const query = { _id: new ObjectId(id) };

  const result = await serviceCollection.findOne(query);

  return Response.json(result);
}
