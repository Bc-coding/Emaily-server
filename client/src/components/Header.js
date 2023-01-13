import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
// hook up our Header component to redux store, to pull the auth state to tell us if the user logged in
import { connect } from "react-redux";

import Payments from "./Payments";

const AppHeader = (props) => {
  console.log(props);

  // render content depending on if the user is logged in
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;

      case false:
        return (
          <HeaderMenuItem href="/auth/google">Login with Google</HeaderMenuItem>
        );

      default:
        return [
          <HeaderMenuItem key="1">
            <Payments />
          </HeaderMenuItem>,
          <HeaderMenuItem key="3">
            Credits: {props.auth.credits}
          </HeaderMenuItem>,
          <HeaderMenuItem key="2" href="/api/logout">
            Log out
          </HeaderMenuItem>,
        ];
    }
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="Carbon">
            Emaily
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Emaily">
            <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
            {renderContent()}
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                <HeaderMenuItem>
                  <Payments />
                </HeaderMenuItem>
                <HeaderMenuItem href="/auth/google">
                  Login with Google
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar />
        </Header>
      )}
    />
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AppHeader);
