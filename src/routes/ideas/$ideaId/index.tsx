import { createFileRoute } from '@tanstack/react-router';

const fetchIdea = async (ideaId: string) => {
  const res = await fetch(`http://localhost:8000/ideas/${ideaId}`);

  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
};

export const Route = createFileRoute('/ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: async ({ params }) => {
    return fetchIdea(params.ideaId);
  },
});

function IdeaDetailsPage() {
  const idea = Route.useLoaderData();

  return <div>{idea.title}</div>;
}
