import { JSX, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  category: string;
  preview: string;
  caminho: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Loja virtual",
    category: "Desenvolvimento web",
    preview: "https://i.ytimg.com/vi/jSJugUaCtFI/maxresdefault.jpg",
    caminho: "/projeto1",
  },
  {
    id: 2,
    name: "Fake Trello",
    category: "Desenvolvimento Web",
    preview: "https://upload.wikimedia.org/wikipedia/pt/6/6e/Zor%C3%A3o.png",
    caminho: "/projeto2",
  },
  {
    id: 3,
    name: "Login page",
    category: "Design UX/UI",
    preview:
      "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width/360?cb=20240727231850&path-prefix=pt",
    caminho: "/projeto3",
  },
  {
    id: 4,
    name: "Consumo de API",
    category: "Desenvolvimento Web",
    preview: "https://i.ytimg.com/vi/jSJugUaCtFI/maxresdefault.jpg",
    caminho: "/projeto4",
  },
];

export default function ProjectList(): JSX.Element {
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-screen text-white">
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {currentProject && (
          <a
            href={currentProject.caminho}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              src={currentProject.preview}
              alt={`Preview do projeto ${currentProject.name}`}
              width={500}
              height={300}
              className="h-80 w-full object-cover rounded-tl-3xl rounded-br-3xl"
            />
          </a>
        )}
      </motion.div>

      <div className="h-64 overflow-y-auto scroll-container">
        <ul className="divide-y divide-gray-700">
          {projects.map((project) => (
            <li
              key={project.id}
              role="link"
              tabIndex={0}
              className={`p-4 flex justify-between items-center cursor-pointer relative group ${
                currentProject.id === project.id
                  ? "bg-gray-800"
                  : "bg-transparent"
              }`}
              onClick={() => {
                console.log(`Projeto ${project.name} selecionado.`);
                setCurrentProject(project);
              }}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setCurrentProject(project);
              }}
            >
              <a href={project.caminho} className="w-full block">
                {hoveredProjectId === project.id && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-300">
                    →
                  </span>
                )}
                <div className="flex justify-between w-full">
                  <span className="text-lg">{project.name}</span>
                  <span className="text-gray-400">{project.category}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
