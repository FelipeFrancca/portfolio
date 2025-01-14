import { render, screen, fireEvent } from "@testing-library/react";
import ProjectList from "../components/pages/projectList";
import "@testing-library/jest-dom";

const projects = [
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

describe("ProjectList Component", () => {
  it("should render the initial project preview", () => {
    render(<ProjectList />);
    const initialPreview = screen.getByAltText(/Preview do projeto Loja virtual/i);
    expect(initialPreview).toBeInTheDocument();
  });

  it("should update the preview when a project is clicked", () => {
    render(<ProjectList />);
    
    const secondProject = screen.getByText("Fake Trello");
    
    fireEvent.click(secondProject);

    const updatedPreview = screen.getByAltText(/Preview do projeto Fake Trello/i);
    expect(updatedPreview).toBeInTheDocument();
  });

  it("should show an arrow when hovering over a project", () => {
    render(<ProjectList />);
    
    const secondProject = screen.getByText("Fake Trello");
    
    fireEvent.mouseEnter(secondProject);

    const arrow = screen.getByText("→");
    expect(arrow).toBeInTheDocument();

    fireEvent.mouseLeave(secondProject);
    expect(screen.queryByText("→")).not.toBeInTheDocument();
  });

  it("should allow selecting a project using the Enter key", async () => {
    render(<ProjectList />);
    
    const thirdProject = screen.getByText("Login page");

    fireEvent.keyDown(thirdProject, { key: "Enter", code: "Enter" });

    const updatedPreview = await screen.findByAltText(/Preview do projeto Login page/i);
    expect(updatedPreview).toBeInTheDocument();
  });
  
});
