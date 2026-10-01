import { useState } from "react";
import {
  Download,
  ExternalLink,
  Eye,
  FileText,
  X,
} from "lucide-react";
import { resumeData } from "../data/profile";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = resumeData.pdfUrl;
    link.download = "Chanchal_Kumar_Mandal_Frontend_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoogleDocs = () => {
    window.open(
      resumeData.googleDocsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Resume
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              My latest professional resume
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Preview */}
            <button
              type="button"
              onClick={handlePreview}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>

            {/* Download */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>

        {/* Resume Card */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Resume Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <FileText className="h-6 w-6" />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">
                  {resumeData.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {resumeData.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  PDF Resume • {resumeData.lastUpdated}
                </p>
              </div>
            </div>

            {/* Google Docs */}
            <button
              type="button"
              onClick={handleGoogleDocs}
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4" />
              Google Docs
            </button>
          </div>

          {/* Resume Details */}
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 sm:grid-cols-4">
            <div>
              <p className="text-xs text-slate-500">
                Experience
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                12+ Years
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Specialization
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Frontend Engineering
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Primary Stack
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                React • TypeScript
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Status
              </p>

              <p className="mt-1 text-sm font-semibold text-emerald-600">
                Latest Version
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-indigo-600" />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Resume Preview
                  </h3>

                  <p className="text-xs text-slate-500">
                    {resumeData.name}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close resume preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* PDF */}
            <div className="min-h-0 flex-1 bg-slate-100">
              <iframe
                src={`${resumeData.pdfUrl}#toolbar=1&navpanes=0`}
                title="Resume Preview"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;