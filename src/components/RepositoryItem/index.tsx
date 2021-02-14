import React from 'react'
import { Repository } from '../../store/ducks/repositories/types'

interface Props {
  repository: Repository
}

const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <div>
      <h1>{repository.name}</h1>
      <p>{repository.id}</p>
    </div>
  )
}

export default RepositoryItem