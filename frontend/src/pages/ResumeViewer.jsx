import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Absolute module-level lock to destroy lingering React StrictMode ghost closures.
let globalRenderId = 0;

export default function ResumeViewer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const renderId = ++globalRenderId; // Issue a globally unique ID for this mount execution

    const renderPdf = async () => {
      setLoading(true);
      try {
        const loadingTask = window.pdfjsLib.getDocument("/Raunak_Resume.pdf");
        const pdf = await loadingTask.promise;

        if (renderId !== globalRenderId) return; // Abort if a newer component mounted

        const viewer = document.getElementById("pdf-viewer-container");
        if (!viewer) return;
        viewer.innerHTML = ""; // Atomic clear

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (renderId !== globalRenderId) return; // Abort execution if unmounted during loop

          const page = await pdf.getPage(pageNum);
          if (renderId !== globalRenderId) return;

          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.className = "w-full h-auto object-contain mx-auto shadow-2xl bg-white border border-outline-variant/20 rounded-md xl:rounded-xl";

          await page.render({
            canvasContext: ctx,
            viewport: viewport
          }).promise;

          if (renderId !== globalRenderId) return;
          viewer.appendChild(canvas);
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException' && err?.name !== 'AbortException') {
          console.error("Failed to render native PDF:", err);
        }
      } finally {
        if (renderId === globalRenderId) setLoading(false);
      }
    };

    let checkInterval;
    if (!window.pdfjsLib) {
      if (!document.getElementById("pdfjs-cdn-script")) {
        const script = document.createElement("script");
        script.id = "pdfjs-cdn-script";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        script.async = true;
        document.head.appendChild(script);
      }

      checkInterval = setInterval(() => {
        if (window.pdfjsLib && renderId === globalRenderId) {
          clearInterval(checkInterval);
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          renderPdf();
        }
      }, 50);
    } else {
      renderPdf();
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
    };
  }, []);

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="w-full max-w-5xl relative z-10 animate-fade-in">
        {/* Top Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-surface-container-low/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-outline-variant/30 shadow-2xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to
            Portfolio
          </Link>
          <h1 className="font-headline text-lg md:text-xl font-bold text-on-surface tracking-widest uppercase">
            Curriculum Vitae
          </h1>
          <a
            href="/Raunak_Resume.pdf"
            download="Raunak_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-lg font-bold hover:-translate-y-0.5 transition-transform shadow-lg shadow-primary/20 hover:shadow-primary/40 text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">download</span> Download PDF
          </a>
        </div>

        {/* Custom Native Canvas PDF Renderer */}
        <div className="w-full flex flex-col items-center justify-center relative min-h-[500px]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none fade-out">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary animate-spin">autorenew</span>
                <p className="text-secondary font-bold font-label tracking-widest uppercase">Rendering Pages...</p>
              </div>
            </div>
          )}

          <div id="pdf-viewer-container" className="w-full flex flex-col items-center gap-8 relative z-10 transition-opacity duration-1000">
            {/* Canvas elements injected here via PDF.js */}
          </div>
        </div>
      </div>
    </main>
  );
}

