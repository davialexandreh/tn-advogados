import { useForm } from "react-hook-form";
import { Container, FormContainer } from "./styles";
import { SocialIcon } from "react-social-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { MdMarkEmailUnread } from "react-icons/md";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export function Footer() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	// Configurando o EmailJS
	const onSubmit = (data: FormData) => {
		emailjs
			.send(
				"service_64ikbh6",
				"template_78zftag",
				{
					to_email: "contato@tnadvogados.com.br",
					name: data.name,
					email: data.email,
					subject: data.subject,
					message: data.message,
				},
				"2c-5elvmu_AZj69Lt",
			)
			.then(() => alert("Mensagem enviada com sucesso!"))
			.catch(() =>
				alert("Erro ao enviar a mensagem. Tente novamente mais tarde."),
			);
	};

	// Configurando o Intersection Observer
	const [formRef, formInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	
	const [socialRef, socialInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<Container>
			<Element name="contacts">
				{/* Formulário */}
				<FormContainer
					onSubmit={handleSubmit(onSubmit)}
					as={motion.form}
					initial={{ opacity: 0, y: 50 }}
					animate={formInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
					ref={formRef}
				>
					<h2>ENTRE EM CONTATO</h2>
					<div>
						<input
							type="text"
							placeholder="Nome"
							{...register("name", { required: "O nome é obrigatório" })}
						/>
						{errors.name && <span>{errors.name.message}</span>}
					</div>
					<div>
						<input
							type="text"
							placeholder="Assunto"
							{...register("subject", { required: "O assunto é obrigatório" })}
						/>
						{errors.subject && <span>{errors.subject.message}</span>}
					</div>
					<div>
						<textarea
							placeholder="Mensagem"
							{...register("message", { required: "A mensagem é obrigatória" })}
							rows={8}
						/>
						{errors.message && <span>{errors.message.message}</span>}
					</div>
					<button type="submit">Enviar</button>
				</FormContainer>

				<motion.h2
					className="titleWhite"
					initial={{ opacity: 0, y: 50 }}
					animate={socialInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
					ref={socialRef}
				>
					MAIS INFORMAÇÕES:
				</motion.h2>

				{/* Redes sociais */}
				<motion.div
					className="socialDiv"
					initial={{ opacity: 0, y: 50 }}
					animate={socialInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, delay: 0.5 }}
					ref={socialRef}
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="iconAdress"
						href="https://maps.app.goo.gl/tEoaseJzqC5cjwWTA"
					>
						<FaMapMarkerAlt color="#fff" size={50} />
					</a>

					<div className="socialIcons">
						<SocialIcon
							className="iconMediaSocial"
							target="_blank"
							rel="noopener noreferrer"
							url="https://www.instagram.com/tn.advogados/"
							bgColor="white"
							fgColor="#022754"
						/>
						<SocialIcon
							className="iconMediaSocial"
							target="_blank"
							rel="noopener noreferrer"
							url="https://www.facebook.com/share/19gcFPBUKv/?mibextid=LQQJ4d"
							bgColor="white"
							fgColor="#022754"
						/>
						<SocialIcon
							className="iconMediaSocial"
							target="_blank"
							rel="noopener noreferrer"
							url="https://www.linkedin.com/in/tarcio-nascimento-52852b59/"
							bgColor="white"
							fgColor="#022754"
						/>
						<SocialIcon
							className="iconMediaSocial"
							target="_blank"
							rel="noopener noreferrer"
							url="https://api.whatsapp.com/send?phone=5511984289568&text=Ol%C3%A1%20seja%20bem%20vindo.%20Como%20podemos%20te%20auxiliar?"
							bgColor="white"
							fgColor="#022754"
						/>
					</div>

					<a
						className="iconEmail"
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:contato@tnadvogados.com.br"
					>
						<MdMarkEmailUnread color="#fff" size={50} />
					</a>
				</motion.div>
			</Element>

			<motion.p
				initial={{ opacity: 0 }}
				animate={socialInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, delay: 1.5 }}
				ref={socialRef}
			>
				Copyright © 2024 TN Advogados | Powered by TN Advogados
			</motion.p>
		</Container>
	);
}
