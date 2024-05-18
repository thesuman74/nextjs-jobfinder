import FilterSection from "@/components/ui/FilterSection";

export default function FilterJob() {
  return (
    <main className="  max-w-6xl mx-auto mt-10 px-4">
      <div className="py-8 border-b border-slate-200 space-y-4">
        <h1 className="text-4xl font-semibold">Collection</h1>
        <p className="text-slate-700 max-w-3xl">
          Find your dream job with advance filters
        </p>
      </div>
      {/* filter section  */}
      <div className="grid grid-cols-8 py-8 gap-10">
        <FilterSection />
      </div>
    </main>
  );
}
