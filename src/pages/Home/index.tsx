import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import {
  HomeContainer,
  DetailsUserContainer,
  DetailsIcons,
  CardsContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <HomeContainer>
      <DetailsUserContainer>
        <img
          src="https://avatars.githubusercontent.com/u/109779094?v=4"
          alt="imagem do usuário"
        />
        <div className="details">
          <div className="header">
            <h2>Mateus Carvalho</h2>
            <Link content={"GITHUB"} />
          </div>
          <p>qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr sfhkjdshf ksfh ksdhf ksdhf dd d dfsdfdf dfdf</p>
          <div className="detailsIcons">
            <DetailsIcons>
              <FontAwesomeIcon icon={faGithub} className="svg" />
              <span>mateusrc-dev</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faBuilding} className="svg" />
              <span>Freelancer</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faUserGroup} className="svg" />
              <span>11 seguidores</span>
            </DetailsIcons>
          </div>
        </div>
      </DetailsUserContainer>
      <div className="publications">
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <Input />
      <CardsContainer>
        <Card
          title={"qualquer coisa sauhsaush usahsua"}
          description={
            "qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"
          }
          date="há 2 horas"
          id={1}
        />
        <Card
          title={"qualquer coisa sauhsaush usahsua"}
          description={
            "qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"
          }
          date="há 2 horas"
          id={2}
        />
        <Card
          title={"qualquer coisa sauhsaush usahsua"}
          description={
            "qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"
          }
          date="há 2 horas"
          id={3}
        />
        <Card
          title={"qualquer coisa sauhsaush usahsua"}
          description={
            "qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"
          }
          date="há 2 horas"
          id={4}
        />
        <Card
          title={"qualquer coisa sauhsaush usahsua"}
          description={
            "qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"
          }
          date="há 2 horas"
          id={5}
        />
      </CardsContainer>
    </HomeContainer>
  );
}
