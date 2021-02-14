import React from 'react'

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

const RepositoryList: React.FC<Props> = ({ repositories }) => {
  return (
    <h1>{repositories.map(repo => repo.id)}</h1>
  )
}


const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(RepositoriesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)