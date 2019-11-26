import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const AsyncPage = loadable((props: any) => {
  return pMinDelay(
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "[request]" */ `../${props.page}`
    ),
    10
  );
});

export default AsyncPage;
