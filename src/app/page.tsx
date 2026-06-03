import Link from "next/link";

export default function MiguelPage() {
  return (
    <main className="bg-teal-500 min-h-screen text-black">

      {/* HEADER */}
      <section className="p-10">

        <h1 className="text-[80px] font-bold text-pink-600 leading-tight animate-float">
          MIGUEL DOS SANTOS FARIAS
        </h1>

        <p className="text-lime-600 text-lg">
          HOMEM DE LATA
        </p>

      </section>


      {/* IMAGEM DELE */}
      <section className="px-10 mt-10 justify-center flex flex-col items-center">

        <img
          src="/images/miguelCripi.png"
          alt="miguel"
          className="w-[350px] rotate-1 border-[2px] border-red-500 animate-spin-slow"
        />

        <p className="text-xs text-red-200 mt-2">
          Foto do Miguel, provavelmente tirada por um fã. A imagem é de baixa qualidade, reforçando a aura que ele carrega.
        </p>

      </section>masteryi.jpg


      {/* BIOGRAFIA */}
      <section className="px-10 mt-20 max-w-2xl">

        <h2 className="text-4xl text-purple-600 font-bold animate-drift">
          quem é
        </h2>

        <p className="mt-6 text-lg text-red-600 animate-jump">
          Miguel dos Santos Farias, tambem conhecido como: MIGW, charmes, migs, gueguel, homem de lata, Groud Master, Migwoke, magraum, zoio, costelinha, entre outros. Eh um cantor, compositor, desenvolvedor, programador, pro-player de diversos jogos online, guitarrista, estudante etc. que vem se destacando nos ultimos meses por suas incriveis habilidades no jogo eletronico 
          League of Legends com o personagem Kayn jogando na area da selva.
        </p>

        <p className="mt-4 text-blue-600 animate-shake">
          Não existem registros consistentes sobre o início de sua atividade.
          Algumas fontes afirmam que sua música surgiu de forma espontânea,
          sem anúncio ou intenção clara.
        </p>

        <p className="mt-4 text-green-600">
          Seu comportamento online é inconsistente, alternando entre períodos
          de atividade intensa e completo desaparecimento.
        </p>

      </section>


      {/* MASTER YI */}
      <section className="px-10 mt-20">

        <img
          src="/images/رجل القصدير.png"
          alt="master yi"
          className="w-[400px] -rotate-3 border-[8px] border-red-500 animate-pulse"
        />

        <p className="text-sm text-purple-600 mt-2">
          representação simbólica
        </p>

      </section>


      {/* POLÊMICAS */}
      <section className="px-10 mt-32 max-w-2xl">

        <h2 className="text-4xl text-red-600 font-bold animate-spin-slow">
          polêmicas
        </h2>

        <div className="mt-8 space-y-10">

          <div>

            <h3 className="text-2xl text-blue-600 font-bold animate-drift">
              incidente habilidade exuberada na jungle
            </h3>

            <p className="text-orange-600 mt-2 animate-shake">
              registros indicam que Miguel dos Santos Farias teria utilizado sua habilidade de forma exuberada
              durante as partidas de LOL na posição jungle, causando um desequilíbrio no espaćo e tempo. Por conta disso,
              seus amigos decidiram banir o Miguel da posição da jungle com um abaixo assinado, o que gerou um grande desconforto e revolta por parte do Miguel.
            </p>

            <img
              src="/polemica1.jpg"
              className="w-[300px] mt-4 rotate-1 border-[5px] border-green-500"
            />

          </div>


          <div>

            <h3 className="text-2xl text-purple-600 font-bold animate-jump">
              DESEMPENHO EXUBERANTE EM PARTIDAS RANQUEADAS E NORMAIS E EM JOGOS DE OUTROS GÊNEROS
            </h3>

            <p className="text-pink-600 mt-2">
              Miguel apresenta um desempenho exuberante em partidas ranqueadas e normais, bem como em jogos de outros gêneros, o que tem gerado desconforto e revolta por parte de seus amigos, que se sentem ofendidos e ameaçados por sua habilidade excepcional.
            </p>

            <img
              src="/images/Frag.png"
              className="w-[300px] mt-4 -rotate-2 border-[5px] border-blue-500"
            />

            <a href="/docs/abaixo-assinado.docx" download>
            
            <button className="
              text-2xl
              bg-black
              text-lime-400
              px-8
              py-4
              border-4
              border-pink-500
              animate-shake
              hover:bg-pink-500
              hover:text-black
            ">
              baixar abaixo assinado.docx
            </button>
          </a>

          </div>

        </div>

      </section>


      {/* BOTÃO CREEPYPASTA */}
      <section className="px-10 mt-32 pb-32">

        <Link href="/farias">

          <button className="
            text-2xl
            bg-black
            text-[#f5efe6]
            px-8
            py-4
            border-4
            border-red-600
            hover:bg-red-600
            hover:text-black
            transition
          ">
            Farias
          </button>

        </Link>

        <p className="text-xs text-red-600 mt-4">
          não recomendado
        </p>

      </section>


    </main>
  );
}