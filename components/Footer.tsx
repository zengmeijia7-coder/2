export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Product */}
          <div>

            <h3 className="text-xl font-bold">
              EconScholar AI
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              AI-powered research assistant designed for economics students,
              researchers and professionals.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>General Reader</li>

              <li>Field Analysis</li>

              <li>Comparative Analysis</li>

              <li>Deep Analysis</li>

            </ul>

          </div>

          {/* Roadmap */}
          <div>

            <h3 className="font-semibold mb-4">
              Future Features
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>PDF Upload</li>

              <li>HTML Parser</li>

              <li>AI Summary</li>

              <li>PPT Generator</li>

              <li>Literature Review</li>

              <li>Citation Export</li>

            </ul>

          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500">

          © 2026 EconScholar AI.
          Designed for Economics Research.

        </div>

      </div>

    </footer>
  );
}
