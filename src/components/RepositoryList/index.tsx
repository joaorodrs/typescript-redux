import React, { useEffect, useState } from 'react'

interface Repository {
  id: number,
  name: string
}

const RepositoryList: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {})
  
  return (
    <h1>Hello World!</h1>
  )
}

export default RepositoryList