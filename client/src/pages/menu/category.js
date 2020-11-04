import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { MENU_ITEMS } from '../../menu_items';
import Item from './item';

function Category() {
  let { categoryId } = useParams();
  let match = useRouteMatch();

  const category = MENU_ITEMS.filter(
    (categories) => categories.id === categoryId
  );

  const category_items = category[0].items.map((item) => {
    return (
      <div key={item.id} className="col-span-1 bg-gray-300 rounded">
        <div className="flex">
          <div className="flex-row text-center">
            <h2 className="text-xl text-blue-900 ">{item.name}</h2>
            <p>{item.description}</p>
            <p className="">Price: ${item.price}</p>
            <Link to={`${match.url}/${item.id}`}>
              <button className="w-1/4 bg-blue-400 rounded">Order</button>
            </Link>
          </div>
          <img
            src={item.picture}
            alt={item.name}
            className="w-1/2 rounded justify-center mx-auto row-span-1 my-auto"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto">
      <h1>Category: {category[0].title}</h1>
      <div className="grid grid-cols-2 gap-10">{category_items}</div>
      <Route exact path={`${match.path}/:itemId`}>
        <Item category={category} />
      </Route>
    </div>
  );
}

export default Category;
