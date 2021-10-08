import React, {useState} from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';
import SideMenuLogo from "./assets/sideMenuLogo.svg";
import ExternalLink from "./assets/externalLink.svg";
import DownArrowIcon from "./assets/navMenuArrowDown.svg";
import UpArrowIcon from "./assets/navMenuArrowUp.svg";


const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const [arrowIcon, setArrowIcon] = useState(<img src={DownArrowIcon}></img>);

  const changeArrowIcon = (open) => {
    const newArrowIcon = open ? (<img src={UpArrowIcon}></img>) : (<img src={DownArrowIcon}></img>);
    setArrowIcon(newArrowIcon);
  }

  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      collapsedWidth="0px"
    >
        <div
          style={{
            padding: '24px'
          }}

        >
          <img src={SideMenuLogo} width="150px" height="30px"/>
        </div>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<FaGem />}>Overview</MenuItem>
          <SubMenu title="Payments" icon={<FaList />} onOpenChange={changeArrowIcon} suffix={arrowIcon}>
            <MenuItem>Transactions</MenuItem>
            <SubMenu title="Deposits & fees">
              <MenuItem>Daily summary</MenuItem>
              <MenuItem>Monthly summary</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
        <div className="separator-line"/>
        <Menu>
          <MenuItem suffix={<img src={ExternalLink} width="8px" height="8px"/>}>Account</MenuItem>
          <MenuItem>Signout</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
