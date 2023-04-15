import { ReactElement } from "react";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <>
      <main className="py-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold">About Page</h1>
        </div>
      </main>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="About">{page}</Layout>;
};
