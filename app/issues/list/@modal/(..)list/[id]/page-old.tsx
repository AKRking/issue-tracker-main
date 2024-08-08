import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import IssueDetails from '@/app/issues/list/[id]/IssueDetails';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import { cache } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';
import DialogCloseButton from './modalcomp';
import Modal from './modalcomp';

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId }}));

const IssueDetailPageModal = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) notFound();

  return (
                <Modal> <IssueDetails issue={issue}/></Modal>
  );
};

export default IssueDetailPageModal;
