import { CardProjeto } from '@/components/CardProjeto'

export default function Projetos() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projetos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <CardProjeto
          titulo="Chat-Fake"
          descricao="Aplicação de chat com interface amigável e simulação de respostas automáticas."
          tecnologias={['React', 'JavaScript']}
          github="https://github.com/saulo2024/Chat-Fake"
          demo="#"
        />
        {/* Você pode duplicar o CardProjeto para mais projetos */}
      </div>
    </section>
  )
}
