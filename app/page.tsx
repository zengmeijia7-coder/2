"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            EconPaper Reader
          </h1>
          <p className="mt-2 text-blue-100">
            Read economics papers faster with structured summaries.
          </p>
        </div>
      </header>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Input */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Paste Your Paper
          </h2>

          <textarea
            className="w-full h-60 border rounded-lg p-4"
            placeholder="Paste the abstract or paper here..."
          />

          <button
            className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
          >
            Generate Summary
          </button>

        </div>

        {/* Fake Output */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-xl mb-2">📄 Paper Overview</h3>
            <p>
              This section will contain the paper overview.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-xl mb-2">📊 Methodology</h3>
            <p>
              Difference-in-Differences / OLS / IV ...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-xl mb-2">📈 Main Findings</h3>
            <p>
              The main findings of the paper will appear here.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-xl mb-2">💡 Economic Intuition</h3>
            <p>
              Explain the intuition behind the results in simple language.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}