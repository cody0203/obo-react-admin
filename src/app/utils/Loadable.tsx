import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

const AsyncPage = loadable((props: any) => {
  return pMinDelay(import(/* webpackPrefetch: true */ `../${props.page}`), 200);
});

export default AsyncPage;
