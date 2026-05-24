export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center font-sans">
      <main className="text-center px-8">
        <div className="mb-6 text-6xl">🚀</div>
        <h1 className="text-5xl font-bold text-white mb-4">My Project</h1>
        <p className="text-slate-300 text-xl mb-10">
          Next.js + Vercel 자동 배포 테스트 성공!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <span className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full">
            ✅ 배포 완료
          </span>
          <span className="px-6 py-3 border border-slate-400 text-slate-300 font-semibold rounded-full">
            GitHub → Vercel 연동 중
          </span>
        </div>
      </main>
    </div>
  );
}
