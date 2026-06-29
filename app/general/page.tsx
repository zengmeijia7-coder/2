import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GeneralPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen px-8 py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold">
            📖 General Reader
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Upload one economics paper and generate comprehensive outputs.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Upload */}

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold mb-5">
                Upload Paper
              </h2>

              <div className="border-2 border-dashed rounded-xl h-56 flex items-center justify-center text-gray-500">

                Drag PDF / HTML Here

              </div>

              <button className="w-full bg-blue-700 text-white mt-6 py-3 rounded-xl">
                Upload
              </button>

            </div>

            {/* Options */}

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold mb-5">
                Generate
              </h2>

              {[
                "Executive Summary",
                "Chinese Translation",
                "Literature Review",
                "Presentation Slides",
                "Research Question",
                "Policy Implication",
                "Key Contribution",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 py-3"
                >
                  <input type="checkbox" defaultChecked />
                  {item}
                </label>
              ))}

            </div>

            {/* Preview */}

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold">
                Preview
              </h2>

              <div className="mt-5 space-y-4">

                <div className="bg-slate-100 rounded-lg p-4">
                  Executive Summary
                </div>

                <div className="bg-slate-100 rounded-lg p-4">
                  Translation
                </div>

                <div className="bg-slate-100 rounded-lg p-4">
                  Literature Review
                </div>

                <div className="bg-slate-100 rounded-lg p-4">
                  PPT Outline
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
