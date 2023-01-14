import { NavLink } from "react-router-dom";
import { CardContainer, CardHeader } from "./styles";

interface CardProps {
  title: string;
  description: string;
  date: string;
  id: number;
}

export function Card({ title, description, date, id }: CardProps) {
  return (
    <NavLink to={`/details/${id}`}>
      <CardContainer>
        <CardHeader>
          <h1>{title}</h1>
          <span>{date}</span>
        </CardHeader>
        <p>{description}</p>
      </CardContainer>
    </NavLink>
  );
}
