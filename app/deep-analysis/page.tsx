import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  "Abstract",
  "Introduction",
  "Literature Review",
  "Data",
  "Methodology",
  "Identification",
  "Results",
  "Mechanism",
  "Robustness",
  "Conclusion",
  "Policy Implications",
];

export default function DeepAnalysisPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen px-8 py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold">
            🧠 Deep Paper Analysis
          </h1>

          <p className="text-gray-600 mt-3">
            Analyze every section of an economics paper.
          </p>

          <div className="grid lg:grid-cols-4 gap-8 mt-10">

            <div className="bg-white rounded-2xl shadow p-6">

              {sections.map((section)=>(
                <div
                  key={section}
                  className="py-3 px-4 rounded-lg hover:bg-blue-50 cursor-pointer"
                >
                  {section}
                </div>
              ))}

            </div>

            <div className="lg:col-span-3 bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold">
                Section Preview
              </h2>

              <div className="mt-6 bg-slate-100 rounded-xl h-[600px] flex items-center justify-center">

                Detailed AI Analysis Will Appear Here

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
