import prisma from '@/prisma/client';
import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import IssueDetails from '@/app/issues/list/[id]/IssueDetails';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import { cache } from 'react';
import Modal from './modalcomp';

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId }}));

const IssueDetailPageModal = async ({ params }: Props) => {

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) notFound();



  return (
            
                <Modal>
                 <IssueDetails issue={issue}/>
              </Modal>
  );
};

export default IssueDetailPageModal;
