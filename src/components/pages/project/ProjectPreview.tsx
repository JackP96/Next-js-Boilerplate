'use client';

import { type QueryResponseInitial } from '@sanity/react-loader';

import { projectBySlugQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import type { ProjectPayload } from '@/types';

import InitialProjectPage from './ProjectPage';

type Props = {
  params: { slug: string };
  initial: QueryResponseInitial<ProjectPayload | null>;
};

export default function ProjectPreview(props: Props) {
  const { params, initial } = props;
  const { data, encodeDataAttribute } = useQuery<ProjectPayload | null>(
    projectBySlugQuery,
    params,
    { initial },
  );

  return (
    <InitialProjectPage
      data={data!}
      encodeDataAttribute={encodeDataAttribute}
    />
  );
}
