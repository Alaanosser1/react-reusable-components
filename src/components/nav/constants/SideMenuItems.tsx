import React from "react";
import HomeIcon from "../../../assets/icons/sideMenu/Home";
import CoinsStack from "../../../assets/icons/sideMenu/CoinsStacked";
import Notification from "../../../assets/icons/sideMenu/Notification";
import Users from "../../../assets/icons/sideMenu/Users";
import BarChart from "../../../assets/icons/sideMenu/BarChart";
import Building from "../../../assets/icons/sideMenu/Building";
import UsersPlus from "../../../assets/icons/sideMenu/UserPlus";
import Key from "../../../assets/icons/sideMenu/Key";
import CreditCard from "../../../assets/icons/sideMenu/CreditCard";
import File from "../../../assets/icons/sideMenu/File";
import DataFLow from "../../../assets/icons/sideMenu/DataFlow";
import HelpCircle from "../../../assets/icons/sideMenu/HelpCircle";
import CoinsHand from "../../../assets/icons/sideMenu/CoinsHand";

interface SideMenuItem {
  text: string;
  icon: React.ReactElement;
}

const sideMenuItemsArray: SideMenuItem[] = [
  { text: "Leads home", icon: <HomeIcon /> },
  { text: "Sales", icon: <CoinsStack /> },
  { text: "Next Actions Alerts", icon: <Notification /> },
  { text: "Agents", icon: <Users /> },
  { text: "Dashboard Reporting", icon: <BarChart /> },
  { text: "Nawy Inventory", icon: <Building /> },
  { text: "Update Leads (Bulk)", icon: <UsersPlus /> },
  { text: "Move Now Calculator", icon: <Key /> },
  { text: "Iscore Calculator", icon: <CreditCard /> },
  { text: "Commissions", icon: <CoinsHand /> },
  { text: "landing pages", icon: <File /> },
  { text: "agents tree", icon: <DataFLow /> },
  { text: "help", icon: <HelpCircle /> },
];

export default sideMenuItemsArray;
