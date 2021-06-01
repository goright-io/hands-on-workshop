import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { Text, CtaLink } from "@goright/design-system";

const MDXComponents = {
  a: (props) => {
    return props.href.startsWith("http") ? (
      <a target="_blank" rel="noopener" {...props} />
    ) : (
      <Link {...props} />
    );
  },
};
function Layout(props) {
  const mainPagePath = props.meta.path
    ? `/handout/${props.meta.path}/`
    : `/handout/`;
  return (
    <>
      <div className="flex-grow py-8 bg-white border-b">
        <div className="flex bg-white min-w-100">
          <div className="container max-w-2xl py-2 pl-8 mx-auto mb-8 text-xl text-left underline">
            <CtaLink arrow="start" href={mainPagePath}>
              Back to the Main page
            </CtaLink>
          </div>
        </div>
        <Text
          variant="6Xl"
          className="w-full my-2 text-center text-light-on-background-900"
        >
          {props.meta.title}
        </Text>
        <div className="px-4 mx-auto my-8 prose text-justify ">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}

export default Layout;
