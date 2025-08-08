type CardProjetoProps = {
    titulo: string
    descricao: string
    tecnologias: string[]
    github: string
    demo: string
  }
  
  export function CardProjeto({ titulo, descricao, tecnologias, github, demo }: CardProjetoProps) {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-md bg-white">
        <h2 className="text-xl font-semibold">{titulo}</h2>
        <p className="text-sm text-gray-600 mt-2">{descricao}</p>
        <ul className="flex flex-wrap gap-2 mt-2 text-xs">
          {tecnologias.map((tech, i) => (
            <li key={i} className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{tech}</li>
          ))}
        </ul>
        <div className="mt-4 flex gap-4 text-sm">
          <a href={github} className="text-blue-600 underline" target="_blank">GitHub</a>
          <a href={demo} className="text-blue-600 underline" target="_blank">Demo</a>
        </div>
      </div>
    )
  }
  