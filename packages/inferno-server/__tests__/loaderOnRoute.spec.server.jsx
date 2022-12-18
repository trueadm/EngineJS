import { render } from 'inferno';
import { renderToString } from 'inferno-server'
import { BrowserRouter, StaticRouter, Route, resolveLoaders, useLoaderData } from 'inferno-router';

describe('Resolve loaders during server side rendering', () => {
  let container;

  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function () {
    render(null, container);
    container.innerHTML = '';
    document.body.removeChild(container);
    // Reset history to root
    history.replaceState(undefined, undefined, '/');
  });

  it('SSR renders same result as browser', async () => {
    const TEXT = 'bubblegum';
    const Component = (props, { router }) => {
      const res = useLoaderData(props);
      return <h1>{res?.message}</h1>
    }

    const loaderFuncNoHit = async () => { return { message: 'no' }}
    const loaderFunc = async () => { return { message: TEXT }}

    const loaderData = {
      '/birds': { res: await loaderFunc() }
    }

    const routes = [
        <Route path="/flowers" render={Component} loader={loaderFuncNoHit} />,
        <Route path="/birds" render={Component} loader={loaderFunc} />,
        <Route path="/bees" render={Component} loader={loaderFuncNoHit} />,
    ]

    const initialData = await resolveLoaders('/birds', routes);

    // Render on server
    const html = renderToString(<StaticRouter location="/birds" loaderData={initialData}>{routes}</StaticRouter>);
    
    // Render in browser
    history.replaceState(undefined, undefined, '/birds');
    render(<BrowserRouter loaderData={initialData}>{routes}</BrowserRouter>, container);

    expect(`<!--!-->${container.innerHTML}<!--!-->`).toEqual(html);
  });
})