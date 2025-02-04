import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import React from "react";

export const metadata = {
  title: "Projects",
  description: "My Projects in software development.",
};

const ProjectsPage = () => {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">Projects</h1>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          All Projects worked on recently in different fields
        </p>
      </BlurFade>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsPage;
