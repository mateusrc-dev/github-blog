import { CardContainer, CardHeader } from "./styles";

interface CardProps {
  title: string;
  description: string;
  date: string;
}

export function Card({ title, description, date }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <h1>{title}</h1>
        <span>{date}</span>
      </CardHeader>
      <p>{description}</p>
    </CardContainer>
  );
}
