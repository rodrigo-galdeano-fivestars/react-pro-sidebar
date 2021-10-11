import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from 'react-pro-sidebar';
import NavMenuLogo from "./assets/navMenuLogo.svg";
import ExternalLink from "./assets/externalLink.svg";
import DownArrowIcon from "./assets/navMenuArrowDown.svg";
import UpArrowIcon from "./assets/navMenuArrowUp.svg";
import PaymentsIcon from "./assets/navMenuPaymentsIcon.svg";
import OverviewIcon from "./assets/navMenuOverviewIcon.svg";


const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const [arrowIcon, setArrowIcon] = useState(DownArrowIcon);

  const changeArrowIcon = (open) => {
    const newArrowIcon = open ? UpArrowIcon : DownArrowIcon;
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
          padding: '24px 0px 0px 20px'
        }}
      >
        <img src={NavMenuLogo} width="122px" height="24px" />
      </div>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<img src={OverviewIcon} />}>Overview</MenuItem>
          <SubMenu title="Payments" icon={<img src={PaymentsIcon} />} onOpenChange={changeArrowIcon} suffix={<img src={arrowIcon}></img>}>
            <MenuItem>Transactions</MenuItem>
            <SubMenu title="Deposits & fees">
              <MenuItem>Daily summary</MenuItem>
              <MenuItem>Monthly summary</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
        <div className="separator-line" />
        <Menu>
          <MenuItem suffix={<img src={ExternalLink} width="8px" height="8px" />}>Account</MenuItem>
          <MenuItem>Signout</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
