import { dbConnect } from '@/app/lib/dbConnect';

export async function GET(request) {
  const serviceCollection = dbConnect('services');
  const result = await serviceCollection.find().toArray();
  return Response.json(result);
}
