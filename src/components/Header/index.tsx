import Logo from "../../assets/logo_white_transparent.png";
import { Container } from "./styles";
import { Link } from "react-scroll";

export function Header() {
	return (
		<Container>
			<Link
				to="home"
				smooth={true}
				duration={900}
				offset={-70}
				className="header-link"
			>
				<img alt="logo" src={Logo} />
			</Link>

			<div>
				<Link
					to="home"
					smooth={true}
					duration={900}
					offset={-70}
					className="header-link"
				>
					Início
				</Link>
				<Link
					to="office"
					smooth={true}
					duration={900}
					offset={-70}
					className="header-link"
				>
					Escritório
				</Link>

				<Link
					to="performance"
					smooth={true}
					duration={900}
					offset={-70}
					className="header-link"
				>
					Atuação
				</Link>

				<Link
					to="contacts"
					smooth={true}
					duration={900}
					offset={-70}
					className="header-link"
				>
					Contatos
				</Link>
			</div>
		</Container>
	);
}