import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, ProjectsNavBar } from "../components";
import { projects as projectsData } from "../data";
import { Category, IProject } from "../types";
import { fadeInUp, stagger, routeAnimation } from "../animations";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [active, setActive] = useState<Category | "all">("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterHandler = (category: Category | "all") => {
    setActive(category);
    if (category === "all") {
      setProjects(projectsData);
      return;
    }

    const filterProject = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filterProject);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll h-[90vh]"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web | Hospitality and Toursim Management| portfolio</title>
      </Head>
      <ProjectsNavBar
        handleFilterHandler={handleFilterHandler}
        activeNav={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects?.map((project) => (
          <motion.div
            key={project?.name}
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
