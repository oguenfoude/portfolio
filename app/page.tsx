import { getEnrichedProjects } from '@/lib/github';
import ClientPage from './ClientPage';

export default async function Page() {
  const projects = await getEnrichedProjects();
  return <ClientPage projects={projects} />;
}
