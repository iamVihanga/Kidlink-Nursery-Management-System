import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutUserInputSchema } from './MemberCreateWithoutUserInputSchema';
import { MemberUncheckedCreateWithoutUserInputSchema } from './MemberUncheckedCreateWithoutUserInputSchema';
import { MemberCreateOrConnectWithoutUserInputSchema } from './MemberCreateOrConnectWithoutUserInputSchema';
import { MemberCreateManyUserInputEnvelopeSchema } from './MemberCreateManyUserInputEnvelopeSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';

export const MemberUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberCreateWithoutUserInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MemberUncheckedCreateNestedManyWithoutUserInputSchema;
