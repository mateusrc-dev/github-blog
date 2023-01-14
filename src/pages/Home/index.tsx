import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { HomeContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Home() {
  return (
    <HomeContainer>
      <div className="detailsUser">
        <img src="https://avatars.githubusercontent.com/u/109779094?v=4" alt="imagem do usuário" />
        <div className="details">
          <h2>Mateus Carvalho</h2>
          <p>qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr </p>
          <div className="detailsIcons">
            <div className="github">
            <FontAwesomeIcon icon={faGithub} className="svgGit"/>
            <span>shdasudhas</span>
            </div>
            <div className="github">
            <FontAwesomeIcon icon={faGithub} className="svgGit"/>
            <span>shdasudhas</span>
            </div>
          </div>
        </div>
      </div>
      <Input />
      <Link content={"qualquer coisa sdhsudh uhdushdu"}/>
      <h1>Olá mundo!</h1>
      <Card
        title={"qualquer coisa sauhsaush usahsua"}
        description={"qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"}
        date="há 2 horas"
        id={1}
      />
    </HomeContainer>
  );
}