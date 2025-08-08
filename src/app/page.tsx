export default function Home() {
    return (
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Olá, eu sou o Saulo 👋</h1>
        <p className="text-lg">Desenvolvedor Fullstack especializado em JavaScript, React, Node.js</p>
        <div className="space-x-4 mt-6">
          <a href="/projetos" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ver Projetos</a>
          <a href="/contato" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Contato</a>
        </div>
      </section>
    )
  }
  