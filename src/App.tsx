import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

export function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <h1>Olá mundo!</h1>
      <Card
        title={"qualquer coisa sauhsaush usahsua"}
        description={"qualquer coisa suahs aus sfdsf fsdfsd dfsdfhau kkkk kk rsrsr srsrs qualquer coisa suahs aushau kkkk kk rsrsr srsrs qualquer coisa suahs aushau  werewr erwer ere rer werer erwer wrwer rwer rw srsrs"}
        date="há 2 horas"
      />
    </div>
  );
}