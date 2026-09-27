import "./Skills.css";

import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiR,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMlflow,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiVite,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* =========================
          HEADER
      ========================= */}

      <div className="skills-header">
        <div className="skills-label">
          <span></span>
          SKILLS
        </div>

        <h2>Technical Toolkit</h2>

        <p>
          A focused toolkit for building software, developing models and
          shipping reliable systems.
        </p>
      </div>

      {/* =========================
          SKILLS GRID
      ========================= */}

      <div className="skills-grid">
        {/* =========================
            LANGUAGES
        ========================= */}

        <SkillCard title="LANGUAGES">
          <Skill icon={<FaPython />} name="Python" color="#3776AB" />

          <Skill icon={<FaJava />} name="Java" color="#E76F00" />

          <Skill icon={<FaJsSquare />} name="JavaScript" color="#F7DF1E" />

          <Skill icon={<FaPhp />} name="PHP" color="#777BB4" />

          <Skill icon={<SiCplusplus />} name="C++" color="#00599C" />

          <Skill icon={<SiR />} name="R" color="#276DC3" />
        </SkillCard>

        {/* =========================
            MACHINE LEARNING & AI
        ========================= */}

        <SkillCard title="MACHINE LEARNING & AI">
          <Skill icon={<SiScikitlearn />} name="Scikit-learn" color="#F7931E" />

          <Skill icon={<SiPandas />} name="Pandas" color="#150458" />

          <Skill icon={<SiNumpy />} name="NumPy" color="#4D77CF" />

          <Skill icon={<FaPython />} name="Python ML" color="#3776AB" />

          <Skill icon={<FaCode />} name="XGBoost" color="#F28C28" />

          <Skill icon={<SiMlflow />} name="MLflow" color="#0194E2" />
        </SkillCard>

        {/* =========================
            DEVOPS
        ========================= */}

        <SkillCard title="DEVOPS">
          <Skill icon={<FaDocker />} name="Docker" color="#2496ED" />

          <Skill icon={<SiKubernetes />} name="Kubernetes" color="#326CE5" />

          <Skill icon={<FaLinux />} name="Linux" color="#FCC624" />

          <Skill icon={<SiJenkins />} name="Jenkins" color="#D24939" />

          <Skill icon={<FaCode />} name="SonarQube" color="#4E9BCD" />

          <Skill icon={<SiNginx />} name="Nginx" color="#009639" />
        </SkillCard>

        {/* =========================
            BACKEND
        ========================= */}

        <SkillCard title="BACKEND">
          <Skill icon={<SiSpringboot />} name="Spring Boot" color="#6DB33F" />

          <Skill icon={<FaNodeJs />} name="Node.js" color="#339933" />

          <Skill icon={<FaJava />} name="Java" color="#E76F00" />

          <Skill icon={<FaPhp />} name="PHP" color="#777BB4" />
        </SkillCard>

        {/* =========================
            FRONTEND
        ========================= */}

        <SkillCard title="FRONTEND">
          <Skill icon={<FaReact />} name="React" color="#61DAFB" />

          <Skill icon={<FaHtml5 />} name="HTML5" color="#E34F26" />

          <Skill icon={<FaCss3Alt />} name="CSS3" color="#1572B6" />

          <Skill icon={<SiVite />} name="Vite" color="#646CFF" />

          <Skill icon={<FaJsSquare />} name="JavaScript" color="#F7DF1E" />
        </SkillCard>

        {/* =========================
            DATABASES
        ========================= */}

        <SkillCard title="DATABASES">
          <Skill icon={<SiMysql />} name="MySQL" color="#4479A1" />

          <Skill icon={<SiPostgresql />} name="PostgreSQL" color="#4169E1" />

          <Skill icon={<SiMongodb />} name="MongoDB" color="#47A248" />
        </SkillCard>

        {/* =========================
            TOOLS
        ========================= */}

        <SkillCard title="TOOLS">
          <Skill icon={<FaGitAlt />} name="Git" color="#F05032" />

          <Skill icon={<FaGithub />} name="GitHub" color="#FFFFFF" />

          <Skill
            icon={<SiIntellijidea />}
            name="IntelliJ IDEA"
            color="#FE315D"
          />

          <Skill icon={<SiPostman />} name="Postman" color="#FF6C37" />
        </SkillCard>
      </div>
    </section>
  );
}

/* =====================================================
   REUSABLE SKILL CARD
===================================================== */

function SkillCard({ title, children }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-divider"></div>

      <div className="skill-items">{children}</div>
    </div>
  );
}

/* =====================================================
   INDIVIDUAL SKILL
===================================================== */

function Skill({ icon, name, color }) {
  return (
    <div className="skill-item">
      <span className="skill-icon" style={{ color: color }}>
        {icon}
      </span>

      <span className="skill-name">{name}</span>
    </div>
  );
}

export default Skills;
