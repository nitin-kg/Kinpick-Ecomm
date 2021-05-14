import React, { useState } from "react";
import { useParams, useRouteMatch, Switch, Route } from "react-router";
import Catelogue from "../../components/catelogue/catelogue.component";
import SideNavigation from "../../components/side-navbar/side-navbar.component";
import data from "../../H&MConsolidated";

export const Shop = () => {
  const [collection, setCollection] = useState([]);

  const { type } = useParams();
  const { path, url } = useRouteMatch();
  console.log(path, url);
  console.log(type);

  React.useEffect(() => {
    const selection = data.filter((collection) => {
      if (type === `${collection.title}`) {
        return collection;
      }
    });
    if (collection != selection[0]) {
      setCollection(selection[0]);
    }
  }, []);

  return (
    <div className="shop-page">
      {collection.length != 0 ? (
        <SideNavigation collection={collection} />
      ) : null}

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:section/:category`}>
          <Catelogue className="catelgoue-product-view" />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
