import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface LinkProps {
  content: string
  url?: string
}

export function Link({ content, url }: LinkProps) {
  return (
    <LinkContainer href={url} target="_blank">
      {content}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="svg" />
    </LinkContainer>
  )
}
