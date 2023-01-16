import { InputContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface InputProps {
  updateSearch: (data: string) => void
}

export function Input({ updateSearch }: InputProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    updateSearch(data.query)
  }

  return (
    <InputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type="search"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </InputContainer>
  )
}
