import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fields = [
  "Development Economics",
  "Environmental Economics",
  "Urban Economics",
  "Labor Economics",
  "Behavioral Economics",
  "Public Economics",
  "Industrial Organization",
  "Political Economy",
];

export default function FieldPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen px-8 py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold">
            🌍 Field-specific Analysis
          </h1>

          <p className="text-gray-600 mt-3">
            Tailored analytical frameworks for each economics discipline.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold mb-5">
                Select Field
              </h2>

              {fields.map((field) => (
                <div
                  key={field}
                  className="border rounded-xl p-4 mb-3 hover:bg-blue-50 cursor-pointer"
                >
                  {field}
                </div>
              ))}

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold">
                Framework Preview
              </h2>

              <ul className="space-y-3 mt-5">

                <li>Research Question</li>
                <li>Identification Strategy</li>
                <li>Data Quality</li>
                <li>Internal Validity</li>
                <li>External Validity</li>
                <li>Policy Implications</li>

              </ul>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold">
                Output Preview
              </h2>

              <div className="bg-slate-100 rounded-xl h-96 mt-6 flex items-center justify-center">

                AI Output Preview

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
