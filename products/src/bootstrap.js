import faker from 'faker';

const mount = el => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which Definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element

// containerとは別に独立してレンダリングしたいケース
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // Assuming our container doesn't have an element
  // with id 'dev-products' ....
  if (el) {
    //   We are probably running in isolation
    // NOT executing products through our container
    mount(el);
  }
}

// Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products'
// We DO NOT WANT to try immediately render the app

// container経由でレンダリングしたいケース
export { mount };
