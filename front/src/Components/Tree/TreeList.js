import React from 'react';

const TreeList = (props) => {
    return (
      <div>
        <h1>TreeList</h1>
        <ul class="pure-g">
            {props.treeList.map((tree) => (
                <li class="pure-u-1-1">
                    <span key={tree._id}>{tree.species} | {tree.height} | {tree.yearPlanted} | {tree.circumference}</ span>
                </li>
            ))}
        </ul>
        <a href="/tree" class="pure-button">Add Tree</a>
      </div>
    );
  }
  
  export default TreeList;