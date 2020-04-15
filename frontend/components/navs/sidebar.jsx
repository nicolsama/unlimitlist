import React from 'react';
import NodeList from '../nodes/node_list';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
   

    render() {
        // debugger; 
        if (!this.props.parentNodeIds) return null; 
        let SidebarLis = this.props.parentNodeIds.map( id => {
            let node = this.props.allNodes[id];
            return (<SidebarItem 
                        node={node}
                        allNodes={this.props.allNodes}
                        />)
        })
       
        return (<>
            <svg viewBox="0 0 448 512" className='sidebarArrow'>
            <path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
            </svg>
            <ul className='SidebarUl'>
                <li> HOME </li>
                <ul>
                    {SidebarLis}
                </ul>
            </ul>
            </>)
    }
}

export default Sidebar;