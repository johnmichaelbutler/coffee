import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { MENU_ITEMS } from '../../menu_items';
import Category from './category';

function Categories() {
  let match = useRouteMatch();

  const categories = MENU_ITEMS.map((category) => {
    return (
      <li key={category.id}>
        <Link to={`${match.url}/${category.id}`}>{category.title}</Link>
      </li>
    );
  });

  return (
    <div>
      <ul>{categories}</ul>
      <Route path={`${match.url}/:categoryId`}>
        <Category />
      </Route>
      <Route exact path={match.url}>
        <p>Please select a Category</p>
      </Route>
    </div>
  );
}

export default Categories;
