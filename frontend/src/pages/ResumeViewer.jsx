import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ResumeViewer() {
  useEffect(() => {
    window.scrollTo(0, 0);
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

        {/* Resume PDF Viewer */}
        <div
          className="w-full max-w-5xl mx-auto bg-surface-container rounded-2xl md:rounded-[2rem] shadow-2xl border border-outline-variant/20 overflow-hidden relative z-10"
          style={{ height: 'calc(100vh - 250px)', minHeight: '600px' }}
        >
          <iframe
            src="/Raunak_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
            className="w-full h-full border-none overflow-hidden"
            scrolling="no"
            title="Raunak Gangwal Resume"
          />
        </div>
      </div>
    </main>
  );
}

