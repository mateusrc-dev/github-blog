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
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export function Details() {
  const [input, setInput] = useState("# oie asdashdskdhaskldhaklsh kdh klshd kahd __oie__ ajshdsajk lskajdslkd d");
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
      <textarea onChange={e => setInput(e.target.value)} />
      <PostContainer>
        <ReactMarkdown
          children={input}
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={coldarkCold}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </PostContainer>
    </DetailsContainer>
  );
}
