"use client";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/images/bird3.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center h-full ">
        <img src="/images/bird3.png" className="animate-spin border border-yellow-400 w-96" />
      </div>
    </main>
  );
}