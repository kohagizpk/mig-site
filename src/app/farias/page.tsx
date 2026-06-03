"use client";

import { useEffect, useRef } from "react";
import { Creepster } from "next/font/google";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
});

export default function FariasPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    // tenta autoplay imediato
    const tryPlay = () => {
      audio.play().catch(() => {teste()});
    };

    tryPlay();

    const teste = () => {
      console.log("teste");
    }
    // fallback: qualquer interação ativa
    const unlockAudio = () => {
      audio.play().catch(() => {teste()});
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
      window.removeEventListener("mousemove", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("scroll", unlockAudio);
    window.addEventListener("mousemove", unlockAudio);
    window.addEventListener("keydown", unlockAudio);

  }, []);

  return (
    <main className={`${creepster.className} bg-zinc-900 min-h-screen text-zinc-300`}>

      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/fundo.mp3" type="audio/mpeg" />
      </audio>

      {/* HEADER */}
      <header className="flex flex-col items-center pt-20">

        <img
          src="/images/titulo.png"
          alt="MIGUEL FARIAS"
          className="
            w-[600px]
            opacity-90
            hover:opacity-100
            transition
            duration-500
            hover:scale-105
          "
        />

        <p className="text-zinc-500 mt-4 text-sm animate-pulse">
          arquivo recuperado parcialmente
        </p>

      </header>

      {/* CONTEÚDO */}
      <section className="max-w-2xl mx-auto mt-20 px-6 space-y-12">

        <p className="text-3xl animate-pulse">
          ninguém sabe exatamente quando começou.
        </p>

        <p className="text-2xl animate-pulse delay-200">
          alguns dizem que foi na jungle.
        </p>

        <p className="text-2xl animate-pulse delay-300">
          outros afirmam que ele sempre esteve lá.
        </p>

        <p className="text-xl animate-pulse delay-500">
          esperando.
        </p>

        <div className="h-40" />

        <p className="text-2xl animate-pulse">
          contas foram criadas.
        </p>

        <p className="text-2xl animate-pulse delay-200">
          contas foram deletadas.
        </p>

        <p className="text-3xl animate-pulse delay-500">
          mas algo permaneceu.
        </p>

        <div className="h-40" />

        <p className="text-5xl text-red-600 animate-pulse">
          MIGUEL FARIAS NUNCA SAIRA DO SEU LUGAR.
        </p>

        <div className="h-40" />

        <p className="text-lg animate-pulse">
          se você está lendo isso, já é tarde demais.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="mt-40 pb-20 text-center">

        <p className="animate-pulse text-zinc-500">
          arquivo_███.log
        </p>

      </footer>

    </main>
  );
}