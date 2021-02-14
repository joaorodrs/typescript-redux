import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'
import { bindActionCreators, Dispatch } from 'redux'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest: () => void
}

type Props = StateProps & DispatchProps

const RepositoryList: React.FC<Props> = (props) => {
  useEffect(() => props.loadRequest())

  return (
    <ul>
      {props.repositories.map(repo => <li>{repo.name}</li>)}
    </ul>
  )
}


const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)