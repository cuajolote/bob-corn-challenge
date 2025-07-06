import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 text-gray-800">
        {/* Hero */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Bob’s Corn</h1>
          <p className="text-lg max-w-xl mb-6">
            Fast, fair and fresh. Buy one corn per minute — that’s the rule.
          </p>
          <Link
            to="/buy"
            className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Buy Corn Now
          </Link>
        </section>

        {/* Final CTA */}
        <section className="bg-black text-white text-center py-16 px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to buy corn?</h2>
          <p className="mb-6 text-lg">Try it now — just one click away.</p>
          <Link
            to="/buy"
            className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Start Buying
          </Link>
        </section>
      </main>
    </>
  );
}
