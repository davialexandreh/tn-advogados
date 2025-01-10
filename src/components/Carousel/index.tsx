import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Importar estilos do carrossel
import { Container } from "./styles";
import { motion } from "framer-motion";
import Mission from "../../assets/mission.png";
import Vision from "../../assets/vision.png";
import Values from "../../assets/values.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1221 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1220, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export function ContentMissionVisionValuesComponent() {
  const content = [
    {
      section: "Missão",
      icon: Mission,
      description:
        "Prestar serviços jurídicos de consultoria e de cobrança, sempre com alto nível técnico e de atendimento, preocupando-se com o cliente e o resultado final.",
    },
    {
      section: "Visão",
      icon: Vision,
      description:
        "Ser um escritório referência que atua de forma personalizada junto ao seus clientes, trazendo soluções jurídicas extrajudiciais por intermédio de uma equipe altamente qualificada, processos estruturados e tecnologia avançada.",
    },
    {
      section: "Valores",
      icon: Values,
      description:
        "Integridade, comprometimento, atenção ao cliente, inovação e empreendedorismo, planejamento estratégico, desenvolvimento humano e crescimento profissional através de meritocracia.",
    },
  ];

  return (
    <Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        ssr={true}
      >
        {content.map((item, index) => (
          <motion.div
            key={item.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              className="iconsMissionVisionValues"
              src={item.icon}
              alt={item.section}
            />
            <h2>{item.section.toUpperCase()}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </Carousel>
    </Container>
  );
}
