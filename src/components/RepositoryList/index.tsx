import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'
import { bindActionCreators, Dispatch } from 'redux'
import RepositoryItem from '../RepositoryItem'

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
    <div>
      {props.repositories.map(repo => <RepositoryItem repository={repo} />)}
    </div>
  )
}


const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)