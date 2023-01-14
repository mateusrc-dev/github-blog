import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { HomeContainer } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Input />
      <Link content={"qualquer coisa sdhsudh uhdushdu"}/>
      <h1>Olá mundo!</h1>
      <Card
        title={"qualquer coisa sauhsaush usahsua"}
        description={"qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"}
        date="há 2 horas"
      />
    </HomeContainer>
  );
}