export const metadata = {
  title: "CV — tuil4tu",
  description: "Curriculum Vitae của tuil4tu",
};

export default function CVPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-10 py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">CV — tuil4tu</h1>
        <a
          href="/api/cv.pdf"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:bg-card transition"
          download
        >
          Tải PDF
        </a>
      </div>

      <div className="glass rounded-xl p-6 border border-border">
        <p className="text-muted">CV đang cập nhật. Vui lòng tải file PDF để xem phiên bản mới nhất.</p>
      </div>
    </main>
  );
}


