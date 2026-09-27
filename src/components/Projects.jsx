import "./Projects.css";

import { FaGithub, FaReact, FaJava, FaDocker } from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiKubernetes,
  SiJenkins,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* =========================
          HEADER
      ========================= */}

      <div className="projects-header">
        <div className="projects-label">
          <span></span>
          PROJECTS
        </div>

        <h2>Selected Work</h2>

        <p>
          A collection of software systems, academic projects and things I'm
          currently building.
        </p>
      </div>

      {/* =========================
          PROJECT GRID
      ========================= */}

      <div className="projects-grid">
        {/* ==================================================
            PROJECT 1 — GREENCHAIN
        ================================================== */}

        <article className="project-card">
          {/* Project visual */}
          <div className="project-visual greenchain-visual">
            <div className="project-visual-icon">🌱</div>

            <div className="project-visual-title">GREENCHAIN</div>
          </div>

          {/* Project content */}
          <div className="project-content">
            <div className="project-title-row">
              <h3>GreenChain</h3>

              <span className="project-status completed">COMPLETED</span>
            </div>

            <p className="project-description">
              A service-oriented software system designed to connect users,
              services and businesses through a scalable microservice
              architecture.
            </p>

            <div className="project-subtitle">WHAT I BUILT</div>

            <p className="project-details">
              Developed the frontend and backend services using React and Spring
              Boot, with MySQL, Docker, Jenkins and Kubernetes for deployment
              and DevOps workflows.
            </p>

            {/* Technologies */}
            <div className="project-tech">
              <span>
                <FaReact />
                REACT
              </span>

              <span>
                <SiSpringboot />
                SPRING BOOT
              </span>

              <span>
                <SiMysql />
                MYSQL
              </span>

              <span>
                <FaDocker />
                DOCKER
              </span>

              <span>
                <SiKubernetes />
                KUBERNETES
              </span>

              <span>
                <SiJenkins />
                JENKINS
              </span>
            </div>

            {/* GitHub button */}
            <a
              href="https://github.com/Mihithap12/SOC_Project.git"
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <FaGithub />
              View on GitHub ↗
            </a>
          </div>
        </article>

        {/* ==================================================
            PROJECT 2 — LIBRARY MOBILE APP
        ================================================== */}

        <article className="project-card">
          {/* Project visual */}
          <div className="project-visual library-visual">
            <div className="project-visual-icon">📚</div>

            <div className="project-visual-title">PERSONAL LIBRARY</div>
          </div>

          {/* Project content */}
          <div className="project-content">
            <div className="project-title-row">
              <h3>Personal Library App</h3>

              <span className="project-status progress">IN PROGRESS</span>
            </div>

            <p className="project-description">
              A personal mobile library application for managing books, tracking
              reading progress, storing quotes and organizing a personal digital
              library.
            </p>

            <div className="project-subtitle">WHAT I'M BUILDING</div>

            <p className="project-details">
              Building a mobile application connected to a backend API and MySQL
              database, with book search, reading status, personal collections
              and reading progress features.
            </p>

            {/* Technologies */}
            <div className="project-tech">
              <span>
                <SiFlutter />
                FLUTTER
              </span>

              <span>
                <SiNodedotjs />
                NODE.JS
              </span>

              <span>
                <SiMysql />
                MYSQL
              </span>

              <span>
                <FaReact />
                REACT
              </span>
            </div>

            {/* Project button */}
            <a
              href="#contact"
              className="project-github project-progress-button"
            >
              View Project ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
