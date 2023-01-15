import {
  DetailsContainer,
  DetailsPostContainer,
  DetailsIcons,
  PostContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "../../components/Link";
import { useParams, NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface propsUser {
  login: string;
}
interface postsProps {
  title: string;
  updated_at: Date;
  body: string;
  comments: string;
  user: propsUser;
}

export function Details() {
  const params = useParams();
  const [post, setPost] = useState<postsProps>({
    title: "",
    updated_at: new Date(),
    body: "",
    comments: "",
    user: { login: "" },
  });
  console.log(post);
  useEffect(() => {
    async function PostData() {
      const response = await fetch(
        `https://api.github.com/repos/mateusrc-dev/github-blog/issues/${params.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    PostData();
  }, []);
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
          <p>{post.title}</p>
          <div className="detailsIcons">
            <DetailsIcons>
              <FontAwesomeIcon icon={faGithub} className="svg" />
              <span>{post.user.login}</span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faCalendarDay} className="svg" />
              <span>
                {formatDistanceToNow(new Date(post.updated_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </DetailsIcons>
            <DetailsIcons>
              <FontAwesomeIcon icon={faComment} className="svg" />
              <span>{post.comments} comentários</span>
            </DetailsIcons>
          </div>
        </main>
      </DetailsPostContainer>
      <PostContainer>
        <ReactMarkdown
          children={post.body}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={coldarkCold}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </PostContainer>
    </DetailsContainer>
  );
}
