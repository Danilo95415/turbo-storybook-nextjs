import Navbar from '../../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Sign In page</h1>
        </div>
      </main>
    </div>
  );
}
