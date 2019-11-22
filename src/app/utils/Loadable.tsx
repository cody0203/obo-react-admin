import loadable from '@loadable/component';

const AsyncPage = loadable((props: any) => {
  return import(/* webpackPrefetch: true */ `../${props.page}`);
});

export default AsyncPage;
