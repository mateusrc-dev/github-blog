import { DetailsContainer, DetailsPostContainer, DetailsIcons, PostContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "../../components/Link";
import { NavLink } from "react-router-dom";

export function Details() {
  return (
    <DetailsContainer>
      <DetailsPostContainer>
        <header>
          <NavLink to="/">
            <span>
              <FontAwesomeIcon icon={faChevronLeft} />
              <p>VOLTAR</p>
            </span>
          </NavLink>
          <Link content="VER NO GITHUB" />
        </header>
        <main>
          <p>JavaScript data types and data structures</p>
          <div className="detailsIcons">
            <DetailsIcons>
              <FontAwesomeIcon icon={faGithub} className="svg" />
              <span>mateusrc-dev</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faCalendarDay} className="svg" />
              <span>Há 1 dia</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faComment} className="svg" />
              <span>5 comentários</span>
            </DetailsIcons>
          </div>
        </main>
      </DetailsPostContainer>
      <PostContainer>
        adsfhkdjhf ksdhf klsjdhf lksjhf lksdjhf lskjhf lksjhf lskjdfh lskjhf lskjhflk hf kshlkfhslk hkshf lkshdf lkshf lkjadsjfh lksdjfh lskhf lksdhf lkshfkl sjhkfl hslkdfh klsdfh klsfh lkshf
      </PostContainer>
    </DetailsContainer>
  );
}