import React from 'react';

const TreeList = (props) => {
    return (
      <div>
        <h1>TreeList</h1>
        <ul class="pure-g">
            {props.treeList.map((tree) => (
                <li class="pure-u-1-1">
                    <a href="#!" className="tree-link" key={tree._id} onClick={props.getSingleTree.bind(this, tree)}>{tree.species} | {tree.height} | {tree.yearPlanted} | {tree.circumference}</a>
                </li>
            ))}
        </ul>
        <a href="/tree" class="pure-button">Add Tree</a>
      </div>
    );
  }
  
  export default TreeList;