import { connect } from '@/app/lib/dbConnect';

const ServiceCollection = connect('services');

export async function GET(request) {
  const result = await ServiceCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const service = await request.json();

  if (!service || typeof service !== 'object') {
    return Response.json({ message: 'Please send a valid service object' }, { status: 400 });
  }

  const newService = { ...service, date: new Date().toISOString() };

  const result = await ServiceCollection.insertOne(newService);
  return Response.json(result);
}
