import { dbConnect } from '@/app/lib/dbConnect';

const serviceCollection = dbConnect('services');
export async function GET(request) {
  const result = await serviceCollection.find().toArray();
  return Response.json(result);
}
