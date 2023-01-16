import {
  DetailsContainer,
  DetailsPostContainer,
  DetailsIcons,
  PostContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from '../../components/Link'
import { useParams, NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../../lib/axios'

interface propsUser {
  login: string
}
interface postsProps {
  title: string
  updated_at: Date
  body: string
  comments: string
  user: propsUser
  html_url: string
}

export function Details() {
  const params = useParams()
  const [post, setPost] = useState<postsProps>({
    title: '',
    updated_at: new Date(),
    body: '',
    comments: '',
    user: { login: '' },
    html_url: '',
  })
  useEffect(() => {
    async function PostData() {
      const response = await api.get(
        `/repos/mateusrc-dev/github-blog/issues/${params.id}`,
      )
      setPost(response.data)
    }
    PostData()
  }, [params.id])
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
          <Link content="VER NO GITHUB" url={post.html_url} />
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
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkCold}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.body}
        </ReactMarkdown>
      </PostContainer>
    </DetailsContainer>
  )
}
