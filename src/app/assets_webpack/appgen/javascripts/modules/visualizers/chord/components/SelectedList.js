import React, { PropTypes } from 'react'
import { List } from 'immutable'
import LinearProgress from '../../../../components/LinearProgress'
import { PromiseStatus } from '../../../core/models'
import { NodeList } from '../models'
import loadNodes from '../containers/loadNodes'
import NodeCheckbox from './NodeCheckbox'

const SelectedList = ({ list, nodes, status, onSelect, remove, removeWithRelated }) => (
  <div>
    {status.isLoading && <LinearProgress />}

    {nodes.map(node =>
      <NodeCheckbox
        key={node.uri}
        node={node}
        selected={list.selected.includes(node.uri)}
        onSelect={selected => onSelect(node.uri, selected)}
        remove={() => remove(node.uri)}
        removeWithRelated={() => removeWithRelated(node.uri)}
      />
    )}
  </div>
);

SelectedList.propTypes = {
  list: PropTypes.instanceOf(NodeList).isRequired,
  nodes: PropTypes.instanceOf(List).isRequired,
  status: PropTypes.instanceOf(PromiseStatus).isRequired,
  onSelect: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  removeWithRelated: PropTypes.func.isRequired
};

export default loadNodes(SelectedList);
