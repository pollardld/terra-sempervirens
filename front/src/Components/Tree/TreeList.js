import React from 'react';

const TreeList = (props) => {
    return (
      <div>
        <ul>
            {props.treeList.map((tree) => (
                <li><span keys={tree._id}>{tree._id}</span></li>
            ))}
        </ul>
      </div>
    );
  }
  
  export default TreeList;