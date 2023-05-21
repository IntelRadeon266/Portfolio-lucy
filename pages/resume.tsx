import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { Bar } from "../components";
import { fadeInUp, routeAnimation } from "../animations";
import { languages, tools } from "../data";

const Resume: NextPage = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web | Tourism Management| portfolio</title>
      </Head>
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Hospitality and Tourism Management</h5>
            <p className="font-semibold">
              Zetech University (2020 - 2022)
            </p>

            <h5 className="my-1 text-xl font-bold"> Bachelor of Science in Travel and Tourism Management</h5>
            <p className="font-semibold">
              2019-2022 (MOUNT KENYA UNIVERSITY)
            </p>

          </div>
          <div>
            <h5 className="my-1 text-xl font-bold"> Diploma in Tourism Management</h5>
            <p className="font-semibold">
              2017-2018 (ZETECH UNIVERSITY)
            </p>

            <h5 className="my-1 text-xl font-bold">Certificate in Hospitality and Tourism Management </h5>
            <p className="font-semibold">
              2016-2017 (ZETECH UNIVERSITY)
            </p>

          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Attache`</h5>
            <p className="font-semibold">Netpap Global Limited (2022 - present)</p>
            <h5 className="my-1 text-xl font-bold">Data Entry</h5>
            <p className="font-semibold">
              Africa Vocation Education Researchers and Consultants [AVERC] (Jan 2020 - March 2020)
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages?.map((language) => (
              <Bar data={language} key={language?.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools?.map((tool) => (
              <Bar data={tool} key={tool?.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
