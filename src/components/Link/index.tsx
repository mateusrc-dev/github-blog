import { LinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface LinkProps {
  content: string;
}

export function Link({ content }: LinkProps) {
  return (
    <LinkContainer>
      {content}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="svg"/>
    </LinkContainer>
  );
}
