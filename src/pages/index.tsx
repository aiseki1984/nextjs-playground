import { ReactElement } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <main className="py-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold">Hllo NextJS 13</h1>
          {/* <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1> */}
        </div>
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};
