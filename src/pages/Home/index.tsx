import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import BannerHome from "../../assets/bannerHome.png";
import ImgOffice from "../../assets/office.png";
import Partner from "../../assets/partner.jpg";
import Performace from "../../assets/performance.png";
import Expertise from "../../assets/expertise.png";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { ContentMissionVisionValuesComponent } from "../../components/Carousel";

export function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Container>
      <Header />
      <Element name="home">
        <motion.img
          className="bannerHome"
          src={BannerHome}
          alt="banner"
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          transition={{ duration: 1.5 }}
        />
      </Element>
      {/* ESCRITÓRIO */}
      <Element name="office">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          ESCRITÓRIO
        </motion.h2>

        <Content>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 1 }}
          >
            TN ADVOGADOS é um escritório especializado em Recuperação de
            Crédito, judicial e/ou extrajudicial, e em Recuperação Judicial.
            Atende também demandas contenciosas e consultivas nas áreas Cível,
            Trabalhista e Tributária, contando com um quadro técnico formado por
            profissionais experientes que acreditam que a pessoalidade no
            atendimento e o trabalho em parceria são os principais diferenciais
            na busca por soluções e resultados eficientes para seus clientes. O
            escritório está totalmente adequado e em conformidade com todas as
            determinações da Lei 13.709/2018, LGPD.
          </motion.p>

          <motion.img
            src={ImgOffice}
            alt="escritório"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 1 }}
          />
        </Content>
      </Element>
      {/* SÓCIO */}
      <motion.h2
        className="partner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        SÓCIO
      </motion.h2>
      <Content>
        <motion.img
          src={Partner}
          alt="sócio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          transition={{ duration: 1 }}
        >
          Tarcio Nascimento, especializado em Direito Processual Civil, possui
          experiência profissional em escritórios de advocacia de grande porte,
          com foco no atendimento a instituições financeiras. Atuou em grandes
          negociações (corporate e middle) e na reestruturação de empresas,
          contando com 14 anos de experiência no mercado empresarial. Já lidou
          com operações de grande porte, desenvolvendo soluções para pendências.
          Por fim, possui ampla experiência na gestão de rotinas negociais,
          tanto em contratos complexos quanto em contratos de varejo.
        </motion.p>
      </Content>
      {/* ATUAÇÃO */}
      <Element name="performance">
        <motion.h2
          className="performance"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          ATUAÇÃO
        </motion.h2>

        <Content>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 1 }}
          >
            • Recuperação de Crédito, Cobranças Judicial e negociação
            <br />• Recuperação Judicial e Falência <br />• Retomada e/ou
            manutenção de bens <br />• Ações contrárias e revisionais
            <br />• Direito Tributário <br />• Direito do Trabalho <br />•
            Cobrança extrajudiciais e Conciliações extrajudiciais <br />•
            Imóveis, Atos cantoriais e Consolidação <br /> • Audiências <br />
            • Pareceres e Área consultiva <br />• Contratos em geral <br />•
            Localização de deverores
          </motion.p>

          <motion.img
            src={Performace}
            alt="atuação"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 1 }}
          />
        </Content>
      </Element>
      <motion.h2
        className="expertise"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        EXPERTISE
      </motion.h2>
      <Content>
        <motion.img
          src={Expertise}
          alt="expertise"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          transition={{ duration: 1 }}
        >
          <span>RECUPERAÇÃO DE CRÉDITO E RECUPERAÇÃO JUDICIAL</span>
          <p>
            A equipe TN ADVOGADOS atua de maneira multidisciplinar, buscando
            sempre a melhor negociação para seus clientes. Nossos negociadores
            são experientes e totalmente focados nos resultados e desafios
            apresentados pelos clientes. O escritório alia tecnologia e uma
            equipe jurídica estratégica para alcançar resultados progressivos na
            recuperação de diversos modelos de crédito. A estrutura da TN
            ADVOGADOS é completa, reforçada por um departamento de tecnologia da
            informação que impulsiona a inovação contínua e proporciona
            excelentes resultados.
          </p>
        </motion.p>
      </Content>

      <ContentMissionVisionValuesComponent />

      <Footer />
    </Container>
  );
}
