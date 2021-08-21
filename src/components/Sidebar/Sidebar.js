import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Progress, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup";

import { changeActiveSidebarItem } from "../../actions/navigation";
import HomeIcon from "../Icons/SidebarIcons/HomeIcon";
import SwapIcon from "../Icons/SidebarIcons/SwapIcon";
import InventoryIcon from "../Icons/SidebarIcons/InventoryIcon";
import NotificationsIcon from "../Icons/SidebarIcons/NotificationsIcon";
import ComponentsIcon from "../Icons/SidebarIcons/ComponentsIcon";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    activeItem: "",
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  componentDidMount() {
    this.element.addEventListener(
      "transitionend",
      () => {
        if (this.props.sidebarOpened) {
          this.element.classList.add(s.sidebarOpen);
        }
      },
      false
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
      if (nextProps.sidebarOpened) {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.classList.remove(s.sidebarOpen);
        setTimeout(() => {
          this.element.style.height = "";
        }, 0);
      }
    }
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    //this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <nav
        className={cx(s.root)}
        ref={(nav) => {
          this.element = nav;
        }}
      >
        <header className={s.logo}>
          <a href="/#">
            PY<span className="fw-bold">CA</span>
          </a>
        </header>
        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header="Home"
            isHeader
            iconName={<HomeIcon className={s.menuIcon} />}
            link="/home"
            index="main"
          />
          <h5 className={[s.navTitle, s.groupTitle].join(" ")}>UTILITY</h5>
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header="Swap"
            isHeader
            iconName={<SwapIcon className={s.menuIcon} />}
            link="/swap"
            index="core"
          />
          <LinksGroup
            onActiveSidebarItemChange={(t) =>
              this.props.dispatch(changeActiveSidebarItem(t))
            }
            activeItem={this.props.activeItem}
            header="Inventory"
            isHeader
            iconName={<InventoryIcon className={s.menuIcon} />}
            link="/inventory"
            index="inventory"
          />
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header="Notifications"
            isHeader
            iconName={<NotificationsIcon className={s.menuIcon} />}
            link="/notifications"
            index="ui"
          />
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header="Components"
            isHeader
            iconName={<ComponentsIcon className={s.menuIcon} />}
            link="/components"
            index="components"
            childrenLinks={[
              {
                header: "Charts",
                link: "/components/charts",
              },
              {
                header: "Icons",
                link: "/components/icons",
              },
              {
                header: "Maps",
                link: "/components/maps",
              },
            ]}
          />
        </ul>
        <h5 className={s.navTitle}>
          SOCIAL
          {/* eslint-disable-next-line */}
        </h5>
        {/* eslint-disable */}
        <ul className={s.sidebarLabels}>
          <li>
            <a href="https://twitter.com/pyca_cc" target="_blank">
              <i className="fa fa-twitter" />
              <span className={s.labelName}>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fa fa-medium" />
              <span className={s.labelName}>Medium</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/pycacc" target="_blank">
              <i className="fa fa-telegram" />
              <span className={s.labelName}>Telegram</span>
            </a>
          </li>
        </ul>
        {/* eslint-enable */}
        <h5 className={s.navTitle}>PROJECTS</h5>
        <div className={s.sidebarAlerts}>
          {this.props.alertsList.map((
            alert // eslint-disable-line
          ) => (
            <Alert
              key={alert.id}
              className={s.sidebarAlert}
              color="transparent"
              isOpen={true} // eslint-disable-line
              toggle={() => {
                this.dismissAlert(alert.id);
              }}
            >
              <span>{alert.title}</span>
              <br />
              <Progress
                className={`bg-subtle-blue progress-xs mt-1`}
                color={alert.color}
                value={alert.value}
              />
              <span className={s.alertFooter}>{alert.footer}</span>
            </Alert>
          ))}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
