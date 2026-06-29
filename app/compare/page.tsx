import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComparePage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen px-8 py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold">
            ⚖ Comparative Analysis
          </h1>

          <p className="text-gray-600 mt-3">
            Compare multiple economics papers side by side.
          </p>

          <div className="bg-white rounded-2xl shadow p-8 mt-10">

            <div className="grid md:grid-cols-3 gap-6">

              {["Paper A","Paper B","Paper C"].map((paper)=>(
                <div
                  key={paper}
                  className="border-2 border-dashed rounded-xl h-48 flex items-center justify-center"
                >
                  {paper}
                </div>
              ))}

            </div>

            <h2 className="text-2xl font-bold mt-10">
              Comparison Dimensions
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-5">

              {[
                "Research Question",
                "Data",
                "Methodology",
                "Identification Strategy",
                "Contribution",
                "Limitation",
                "Future Research",
                "Policy Relevance",
              ].map(item=>(
                <label key={item} className="flex gap-3">
                  <input type="checkbox" defaultChecked/>
                  {item}
                </label>
              ))}

            </div>

            <div className="mt-10 bg-slate-100 rounded-xl h-80 flex items-center justify-center">

              Comparison Table Preview

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
