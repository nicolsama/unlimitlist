import React from 'react'; 
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllNodes } from '../../actions/node_actions';
import Sidebar from './sidebar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import { Link, NavLink } from 'react-router-dom';
// import { NodeRoute } from '../../util/route_util';


class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSidebar: {},
            currentSettingsNav: {},
            settingsExpanded: false, 
            sidebarExpanded: false,
            sidebarDocked: false,
            pagesPath: this.props.pagesPath
        }
        this.handleGearClick = this.handleGearClick.bind(this);
        this.handleMenuMouseEnter = this.handleMenuMouseEnter.bind(this);
        this.handleMenuMouseLeave = this.handleMenuMouseLeave.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllNodes();
    }

    handleGearClick(e) {
        this.setState({settingsExpanded: !this.state.settingsExpanded});
    }

    handleMenuMouseEnter() {
        if (!this.state.sidebarExpanded){
            this.setState({ sidebarExpanded: true});
        }
    }

    handleMenuMouseLeave() {
        if (this.state.sidebarExpanded) {
            this.setState({ sidebarExpanded: false });
        }
    }

    handleMenuClick(e) {
        this.setState({ sidebarDocked: !this.state.sidebarDocked });
    }

    render() {    

        let sbDiv = (
            <Sidebar
                key="sidebar"
                allNodes={this.props.allNodes}
                parentNodeIds={this.props.parentNodeIds}
            />)

        // debugger; 
        let currentSidebar = null; 
        let sidebarClass = null; 
        if (this.state.sidebarExpanded && this.state.sidebarDocked) {
            sidebarClass = "docked"; 
            currentSidebar = sbDiv;
        } else if (this.state.sidebarExpanded) {
            sidebarClass = "expanded"; 
            currentSidebar = sbDiv;
        } else if ( this.state.sidebarDocked ) {
            sidebarClass = "docked"; 
            currentSidebar = sbDiv;
        }
        
        let pagination = (this.props.pagesPath) ? this.props.pagesPath.reverse().map(id => {
            let pagename = (this.props.allNodes[id].body.length > 20) ? 
                (this.props.allNodes[id].body).slice(0, 18).concat("...") : (this.props.allNodes[id].body);

            return (<span><a href={`#/nodes/${id}`} pagesPath={this.props.pathsPath}>{pagename}</a></span>)
            }) : null ;  

            
            let settingsDiv = null;
            if (this.state.settingsExpanded) {
                settingsDiv  = (
                <div className="dd-wrapper settingsNav">

                    <ul className="dd-list">
                        <li className="dd-list-item">Undo</li>
                        <li className="dd-list-item">Redo</li>
                        <li className="dd-list-item">Save</li>
                    </ul>
                    <ul className="dd-list">
                        <li className="dd-list-item">Print</li>
                        <li className="dd-list-item">Export All</li>
                    </ul>
                    <ul className="dd-list">
                        <li className="dd-list-item">Show Completed</li>
                        <li className="dd-list-item">Settings</li>
                        <li className="dd-list-item">Help</li>
                        <li className="dd-list-item">Report a Problem</li>
                    </ul>
                    <ul className="dd-list">
                        <li className="dd-list-item" onClick={this.props.logout}>Log Out</li>
                        <span className='userEmail'>{this.props.currentUser.email}</span>
                    </ul>

                </div>)}

        if (this.props.currentUser) {
            return (
            <>
            
            <ReactCSSTransitionGroup
                transitionName="sidebar"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
                className={ sidebarClass ? `sidebar-${sidebarClass}` : "" }
                >
                <div >
                    {currentSidebar}
                </div>

            </ReactCSSTransitionGroup>
           
            <div className='navBar'>
                        <svg
                            onMouseOver={this.handleMenuMouseEnter}
                            onClick={this.handleMenuClick}
                            onMouseOut={this.handleMenuMouseLeave}
                            className="menu-icon"
                            viewBox="0 0 448 512" >
                            <path fill="grey" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z">
                            </path>
                        </svg>
                        
                        { (pagination && pagination.length >= 1) ? ( <div className="pagination">
                            <span><a href="#">HOME</a></span>{pagination}
                        </div>) : null }


                    <div className="navBarLeft">
                        <div className="searchBar">
                            <svg width="20" height="20" viewBox=" 0 0 20 20" stroke="currentColor" fill="none">
                                <circle cx="9" cy="9" r="4.5"></circle>
                                <path d="M13,13 L16.5,16.5"></path>
                            </svg>
                        </div>

                        <div className="gearIcon" onClick={this.handleGearClick}>
                            <svg viewBox="0 0 20 20">
                                <path d="M8.493,3.526 C8.493,2.973 8.94,2.526 9.493,2.526 H10.493 C11.045,2.526 11.493,2.973 11.493,3.526 V4.705 C11.911,4.822 12.308,4.988 12.679,5.196 L13.53,4.344 C13.921,3.954 14.554,3.954 14.944,4.344 L15.651,5.052 C16.042,5.442 16.042,6.075 15.651,6.466 L14.802,7.316 C15.009,7.686 15.175,8.084 15.293,8.501 H16.495 C17.047,8.501 17.495,8.949 17.495,9.501 V10.501 C17.495,11.054 17.047,11.501 16.495,11.501 H15.293 C15.174,11.918 15.008,12.315 14.801,12.686 L15.652,13.537 C16.043,13.928 16.043,14.561 15.652,14.951 L14.945,15.658 C14.554,16.049 13.921,16.049 13.53,15.658 L12.677,14.805 C12.307,15.012 11.91,15.178 11.493,15.295 V16.526 C11.493,17.078 11.045,17.526 10.493,17.526 H9.493 C8.94,17.526 8.493,17.078 8.493,16.526 V15.291 C8.078,15.173 7.684,15.008 7.315,14.802 L6.459,15.658 C6.068,16.049 5.436,16.049 5.045,15.658 L4.338,14.951 C3.947,14.561 3.947,13.927 4.338,13.537 L5.195,12.679 C4.989,12.311 4.825,11.916 4.708,11.501 H3.495 C2.942,11.501 2.495,11.054 2.495,10.501 V9.501 C2.495,8.949 2.942,8.501 3.495,8.501 H4.707 C4.824,8.086 4.988,7.691 5.194,7.323 L4.338,6.466 C3.947,6.075 3.947,5.442 4.338,5.052 L5.045,4.345 C5.436,3.954 6.069,3.954 6.459,4.345 L7.314,5.199 C7.683,4.993 8.078,4.827 8.493,4.709 V3.526 Z M10,12.036 C11.125,12.036 12.037,11.124 12.037,10 C12.037,8.875 11.125,7.963 10,7.963 C8.875,7.963 7.963,8.875 7.963,10 C7.963,11.124 8.875,12.036 10,12.036 Z"
                                    stroke="grey">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <ReactCSSTransitionGroup
                        transitionName="settings"
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={800}>
                    {settingsDiv}
                 </ReactCSSTransitionGroup>
                 
                </>) } else {
            return (null) }
    }
}

const msp = ({ session, entities: { users, nodes } }, ownProps) => {
    // debugger;
    return {
        currentUser: users[session.id],
        linkPath: ownProps.location.pathname,
        allNodes: nodes.allNodes,
        parentNodeIds: nodes.parentNodeIds,
        lastCreated: nodes.lastCreated,
        pagesPath: nodes.pagesPath
    };
};

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()), 
    fetchAllNodes: () => dispatch(fetchAllNodes())
});

export default connect(msp, mdp)(Nav);

