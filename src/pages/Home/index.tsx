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
import { useEffect, useState } from "react";

interface userProps {
  name: string;
  avatar_url: string;
  bio: string;
  followers: string;
  company: string;
  login: string;
}
interface postsProps {
  title: string;
  updated_at: Date;
  body: string;
  id: number;
  number: number;
}

export function Home() {
  const [user, setUser] = useState<userProps>({} as userProps);
  const [posts, setPosts] = useState<postsProps[]>([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    async function UserData() {
      const response = await fetch("https://api.github.com/users/mateusrc-dev");
      const data = await response.json();
      setUser(data);
    }
    UserData();
  }, []);
  useEffect(() => {
    async function Posts() {
      const response = await fetch(
        `https://api.github.com/search/issues?q=${search}repo:mateusrc-dev/github-blog`
      );
      const data = await response.json();
      setPosts(data.items);
    }
    Posts();
  }, [search]);

  function updateSearch(data: string) {
    setSearch(data)
  }

  return (
    <HomeContainer>
      <DetailsUserContainer>
        <img src={user.avatar_url} alt="imagem do usuário" />
        <div className="details">
          <div className="header">
            <h2>{user.name}</h2>
            <Link content={"GITHUB"} />
          </div>
          <p>{user.bio}</p>
          <div className="detailsIcons">
            <DetailsIcons>
              <FontAwesomeIcon icon={faGithub} className="svg" />
              <span>{user.login}</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faBuilding} className="svg" />
              <span>{user.company}</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faUserGroup} className="svg" />
              <span>{user.followers} seguidores</span>
            </DetailsIcons>
          </div>
        </div>
      </DetailsUserContainer>
      <div className="publications">
        <h1>Publicações</h1>
        <span>{posts.length} publicações</span>
      </div>
      <Input updateSearch={updateSearch} />
      <CardsContainer>
        {posts.map((post) => (
          <Card
            key={String(post.id)}
            title={post.title}
            description={post.body}
            date={post.updated_at}
            id={post.number}
          />
        ))}
      </CardsContainer>
    </HomeContainer>
  );
}
