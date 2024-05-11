import Image from "next/image";
import JobFilterSidebar from "@/components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { JobFilterValues } from "@/lib/validation";

interface Props {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}


export default async function Home({
  searchParams: { q, type, location, remote }
}: Props) {
  const filteredValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === 'true'
  }
  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <H1>
          Developer jobs
        </H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4 ">
        <JobFilterSidebar defaultValues={filteredValues} />
        <JobResults filteredValues={filteredValues} />
      </section>
    </main>
  );
}