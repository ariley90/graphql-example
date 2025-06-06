import { FragmentType, getFragmentData, graphql } from "@/gql";
import Link from "next/link";

const paginationFragment = graphql(`
  fragment Pagination on Info {
    count
    next
    pages
    prev
  }
`);

export type PaginationProps = {
  info: FragmentType<typeof paginationFragment>;
  href: (page: number) => string;
};

export const Pagination = (props: PaginationProps) => {
  const info = getFragmentData(paginationFragment, props.info);
  return (
    <div className="flex mt-4 gap-4">
      <div>Count: {info?.count}</div>
      <div>Pages: {info?.pages}</div>
      {info?.prev && <Link href={props.href(info.prev)}>prev</Link>}
      {info?.next && <Link href={props.href(info.next)}>next</Link>}
    </div>
  );
};
