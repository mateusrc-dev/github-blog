import { NavLink } from "react-router-dom";
import { CardContainer, CardHeader, Container } from "./styles";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface CardProps {
  title: string;
  description: string;
  date: Date;
  id: number;
}

export function Card({ title, description, date, id }: CardProps) {
  return (
    <Container>
      <NavLink to={`/details/${id}`}>
        <CardContainer>
          <CardHeader>
            <h1>{title}</h1>
            <span>
              {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR })}
            </span>
          </CardHeader>
          <ReactMarkdown className="markDown">{description}</ReactMarkdown>
        </CardContainer>
      </NavLink>
    </Container>
  );
}
