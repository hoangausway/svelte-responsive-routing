<script>
  import watchMedia from 'svelte-media';
  import page from 'page';

  import routes, {redirectPath} from './routes';
  import {auth} from '../services/auth'

  import Single from './Single.svelte';
  import Double from './Double.svelte';

  const media = watchMedia({small: '(max-width: 600px)'});
  $: isSmall = $media.small;

  $: {
    console.log('===AUTHENTICATED===', $auth.authed ? 'AUTHED' : 'NOT AUTHED');
    console.log('===RESPONSIVE===', isSmall ? 'SMALL' : 'LARGE');
  }

  let component;
  let props;

  // def: set 'props' variable to params and route
  const setProps = route => (ctx, next) => {
    props =
      ctx.params && Object.keys(ctx.params).length > 0
        ? {params: {...ctx.params}, route}
        : {route};
    next();
  };

  // def: set component, reactive to authed and media
  // reactive: $authed, $media.small
  $: setComponent = route => ctx => {
    if (route.public || $auth.authed) {
      component = isSmall ? Single : Double;
      return;
    }
    $redirectPath = ctx.pathname;
    page.redirect('/login');
  };

  // routing by setup porps and component for specified path
  $: routing = routes => path =>
    page(path, setProps(routes[path]), setComponent(routes[path]));

  // do routing: reactive to setupComponent
  $: {
    Object.keys(routes).forEach(routing(routes));
    page.start({hashbang: true});
  }
</script>

<svelte:component this={component} {props} />
