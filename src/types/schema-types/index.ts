import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','createdAt','updatedAt','twoFactorEnabled','role','banned','banReason','banExpires']);

export const SessionScalarFieldEnumSchema = z.enum(['id','expiresAt','token','createdAt','updatedAt','ipAddress','userAgent','userId','activeOrganizationId','impersonatedBy']);

export const AccountScalarFieldEnumSchema = z.enum(['id','accountId','providerId','userId','accessToken','refreshToken','idToken','accessTokenExpiresAt','refreshTokenExpiresAt','scope','password','createdAt','updatedAt']);

export const VerificationScalarFieldEnumSchema = z.enum(['id','identifier','value','expiresAt','createdAt','updatedAt']);

export const OrganizationScalarFieldEnumSchema = z.enum(['id','name','slug','logo','createdAt','metadata']);

export const MemberScalarFieldEnumSchema = z.enum(['id','organizationId','userId','role','createdAt']);

export const InvitationScalarFieldEnumSchema = z.enum(['id','organizationId','email','role','status','expiresAt','inviterId']);

export const TwoFactorScalarFieldEnumSchema = z.enum(['id','secret','backupCodes','userId']);

export const TasksScalarFieldEnumSchema = z.enum(['id','name','done']);

export const BankDetailsScalarFieldEnumSchema = z.enum(['id','bankName','accountHolderName','accountNumber','swiftCode','currency','branch','createdAt','updatedAt','nurseryDetailsId']);

export const NurseryDetailsScalarFieldEnumSchema = z.enum(['id','address','phoneNumber','email','themePrimaryColor','themeSecondaryColor','createdAt','updatedAt','organizationId']);

export const ClassScalarFieldEnumSchema = z.enum(['id','name','description','createdAt','updatedAt','organizationId','teacherId']);

export const ChildScalarFieldEnumSchema = z.enum(['id','firstName','lastName','dateOfBirth','createdAt','updatedAt','parentId','nurseryId']);

export const ChildClassScalarFieldEnumSchema = z.enum(['id','childId','classId','joinedAt']);

export const BadgeScalarFieldEnumSchema = z.enum(['id','name','description','imageUrl','createdAt','updatedAt']);

export const ChildBadgeScalarFieldEnumSchema = z.enum(['id','childId','badgeId','awardedAt']);

export const ChildFeedbackScalarFieldEnumSchema = z.enum(['id','content','rating','createdAt','updatedAt','childId','teacherId']);

export const PaymentScalarFieldEnumSchema = z.enum(['id','amount','currency','status','paymentMethod','description','paymentDate','createdAt','updatedAt','memberId','organizationId']);

export const NotificationTagScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const NotificationScalarFieldEnumSchema = z.enum(['id','content','read','createdAt','updatedAt','senderId']);

export const NotificationTag_NotificationScalarFieldEnumSchema = z.enum(['id','notificationId','notificationTagId']);

export const NotificationRecipientScalarFieldEnumSchema = z.enum(['id','notificationId','recipientId','readAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().nullable(),
  role: z.string().nullable(),
  banned: z.boolean().nullable(),
  banReason: z.string().nullable(),
  banExpires: z.coerce.date().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
  activeOrganizationId: z.string().nullable(),
  impersonatedBy: z.string().nullable(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  idToken: z.string().nullable(),
  accessTokenExpiresAt: z.coerce.date().nullable(),
  refreshTokenExpiresAt: z.coerce.date().nullable(),
  scope: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
})

export type Verification = z.infer<typeof VerificationSchema>

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().nullable(),
  logo: z.string().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().nullable(),
})

export type Organization = z.infer<typeof OrganizationSchema>

/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////

export const MemberSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
})

export type Member = z.infer<typeof MemberSchema>

/////////////////////////////////////////
// INVITATION SCHEMA
/////////////////////////////////////////

export const InvitationSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string(),
})

export type Invitation = z.infer<typeof InvitationSchema>

/////////////////////////////////////////
// TWO FACTOR SCHEMA
/////////////////////////////////////////

export const TwoFactorSchema = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string(),
})

export type TwoFactor = z.infer<typeof TwoFactorSchema>

/////////////////////////////////////////
// TASKS SCHEMA
/////////////////////////////////////////

export const TasksSchema = z.object({
  id: z.string(),
  name: z.string(),
  done: z.boolean(),
})

export type Tasks = z.infer<typeof TasksSchema>

/////////////////////////////////////////
// BANK DETAILS SCHEMA
/////////////////////////////////////////

export const BankDetailsSchema = z.object({
  id: z.string(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  nurseryDetailsId: z.string().nullable(),
})

export type BankDetails = z.infer<typeof BankDetailsSchema>

/////////////////////////////////////////
// NURSERY DETAILS SCHEMA
/////////////////////////////////////////

export const NurseryDetailsSchema = z.object({
  id: z.string(),
  address: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  email: z.string().nullable(),
  themePrimaryColor: z.string().nullable(),
  themeSecondaryColor: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  organizationId: z.string(),
})

export type NurseryDetails = z.infer<typeof NurseryDetailsSchema>

/////////////////////////////////////////
// CLASS SCHEMA
/////////////////////////////////////////

export const ClassSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  organizationId: z.string(),
  teacherId: z.string(),
})

export type Class = z.infer<typeof ClassSchema>

/////////////////////////////////////////
// CHILD SCHEMA
/////////////////////////////////////////

export const ChildSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  parentId: z.string(),
  nurseryId: z.string(),
})

export type Child = z.infer<typeof ChildSchema>

/////////////////////////////////////////
// CHILD CLASS SCHEMA
/////////////////////////////////////////

export const ChildClassSchema = z.object({
  id: z.string(),
  childId: z.string(),
  classId: z.string(),
  joinedAt: z.coerce.date(),
})

export type ChildClass = z.infer<typeof ChildClassSchema>

/////////////////////////////////////////
// BADGE SCHEMA
/////////////////////////////////////////

export const BadgeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  imageUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Badge = z.infer<typeof BadgeSchema>

/////////////////////////////////////////
// CHILD BADGE SCHEMA
/////////////////////////////////////////

export const ChildBadgeSchema = z.object({
  id: z.string(),
  childId: z.string(),
  badgeId: z.string(),
  awardedAt: z.coerce.date(),
})

export type ChildBadge = z.infer<typeof ChildBadgeSchema>

/////////////////////////////////////////
// CHILD FEEDBACK SCHEMA
/////////////////////////////////////////

export const ChildFeedbackSchema = z.object({
  id: z.string(),
  content: z.string(),
  rating: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  childId: z.string(),
  teacherId: z.string(),
})

export type ChildFeedback = z.infer<typeof ChildFeedbackSchema>

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  id: z.string(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().nullable(),
  description: z.string().nullable(),
  paymentDate: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  memberId: z.string(),
  organizationId: z.string(),
})

export type Payment = z.infer<typeof PaymentSchema>

/////////////////////////////////////////
// NOTIFICATION TAG SCHEMA
/////////////////////////////////////////

export const NotificationTagSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NotificationTag = z.infer<typeof NotificationTagSchema>

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  id: z.string(),
  content: z.string(),
  read: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  senderId: z.string(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// NOTIFICATION TAG NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationTag_NotificationSchema = z.object({
  id: z.string(),
  notificationId: z.string(),
  notificationTagId: z.string(),
})

export type NotificationTag_Notification = z.infer<typeof NotificationTag_NotificationSchema>

/////////////////////////////////////////
// NOTIFICATION RECIPIENT SCHEMA
/////////////////////////////////////////

export const NotificationRecipientSchema = z.object({
  id: z.string(),
  notificationId: z.string(),
  recipientId: z.string(),
  readAt: z.coerce.date().nullable(),
})

export type NotificationRecipient = z.infer<typeof NotificationRecipientSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  sessions: z.boolean().optional(),
  accounts: z.boolean().optional(),
  members: z.boolean().optional(),
  invitations: z.boolean().optional(),
  twofactors: z.boolean().optional(),
  children: z.boolean().optional(),
  sentNotifications: z.boolean().optional(),
  receivedNotifications: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  twoFactorEnabled: z.boolean().optional(),
  role: z.boolean().optional(),
  banned: z.boolean().optional(),
  banReason: z.boolean().optional(),
  banExpires: z.boolean().optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  invitations: z.union([z.boolean(),z.lazy(() => InvitationArgsSchema)]).optional(),
  twofactors: z.union([z.boolean(),z.lazy(() => TwoFactorArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => ChildArgsSchema)]).optional(),
  sentNotifications: z.union([z.boolean(),z.lazy(() => NotificationArgsSchema)]).optional(),
  receivedNotifications: z.union([z.boolean(),z.lazy(() => NotificationRecipientArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  token: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  userId: z.boolean().optional(),
  activeOrganizationId: z.boolean().optional(),
  impersonatedBy: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  accountId: z.boolean().optional(),
  providerId: z.boolean().optional(),
  userId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  idToken: z.boolean().optional(),
  accessTokenExpiresAt: z.boolean().optional(),
  refreshTokenExpiresAt: z.boolean().optional(),
  scope: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION
//------------------------------------------------------

export const VerificationArgsSchema: z.ZodType<Prisma.VerificationDefaultArgs> = z.object({
  select: z.lazy(() => VerificationSelectSchema).optional(),
}).strict();

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  value: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// ORGANIZATION
//------------------------------------------------------

export const OrganizationIncludeSchema: z.ZodType<Prisma.OrganizationInclude> = z.object({
}).strict()

export const OrganizationArgsSchema: z.ZodType<Prisma.OrganizationDefaultArgs> = z.object({
  select: z.lazy(() => OrganizationSelectSchema).optional(),
  include: z.lazy(() => OrganizationIncludeSchema).optional(),
}).strict();

export const OrganizationCountOutputTypeArgsSchema: z.ZodType<Prisma.OrganizationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrganizationCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrganizationCountOutputTypeSelectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = z.object({
  members: z.boolean().optional(),
  invitations: z.boolean().optional(),
  classes: z.boolean().optional(),
  children: z.boolean().optional(),
  payments: z.boolean().optional(),
}).strict();

export const OrganizationSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  logo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  metadata: z.boolean().optional(),
  members: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  invitations: z.union([z.boolean(),z.lazy(() => InvitationArgsSchema)]).optional(),
  nurseryDetails: z.union([z.boolean(),z.lazy(() => NurseryDetailsArgsSchema)]).optional(),
  classes: z.union([z.boolean(),z.lazy(() => ClassArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => ChildArgsSchema)]).optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MEMBER
//------------------------------------------------------

export const MemberIncludeSchema: z.ZodType<Prisma.MemberInclude> = z.object({
}).strict()

export const MemberArgsSchema: z.ZodType<Prisma.MemberDefaultArgs> = z.object({
  select: z.lazy(() => MemberSelectSchema).optional(),
  include: z.lazy(() => MemberIncludeSchema).optional(),
}).strict();

export const MemberCountOutputTypeArgsSchema: z.ZodType<Prisma.MemberCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MemberCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MemberCountOutputTypeSelectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = z.object({
  teachingClasses: z.boolean().optional(),
  ChildFeedback: z.boolean().optional(),
  payments: z.boolean().optional(),
}).strict();

export const MemberSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  userId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  teachingClasses: z.union([z.boolean(),z.lazy(() => ClassArgsSchema)]).optional(),
  ChildFeedback: z.union([z.boolean(),z.lazy(() => ChildFeedbackArgsSchema)]).optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVITATION
//------------------------------------------------------

export const InvitationIncludeSchema: z.ZodType<Prisma.InvitationInclude> = z.object({
}).strict()

export const InvitationArgsSchema: z.ZodType<Prisma.InvitationDefaultArgs> = z.object({
  select: z.lazy(() => InvitationSelectSchema).optional(),
  include: z.lazy(() => InvitationIncludeSchema).optional(),
}).strict();

export const InvitationSelectSchema: z.ZodType<Prisma.InvitationSelect> = z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  status: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  inviterId: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// TWO FACTOR
//------------------------------------------------------

export const TwoFactorIncludeSchema: z.ZodType<Prisma.TwoFactorInclude> = z.object({
}).strict()

export const TwoFactorArgsSchema: z.ZodType<Prisma.TwoFactorDefaultArgs> = z.object({
  select: z.lazy(() => TwoFactorSelectSchema).optional(),
  include: z.lazy(() => TwoFactorIncludeSchema).optional(),
}).strict();

export const TwoFactorSelectSchema: z.ZodType<Prisma.TwoFactorSelect> = z.object({
  id: z.boolean().optional(),
  secret: z.boolean().optional(),
  backupCodes: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// TASKS
//------------------------------------------------------

export const TasksArgsSchema: z.ZodType<Prisma.TasksDefaultArgs> = z.object({
  select: z.lazy(() => TasksSelectSchema).optional(),
}).strict();

export const TasksSelectSchema: z.ZodType<Prisma.TasksSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  done: z.boolean().optional(),
}).strict()

// BANK DETAILS
//------------------------------------------------------

export const BankDetailsIncludeSchema: z.ZodType<Prisma.BankDetailsInclude> = z.object({
}).strict()

export const BankDetailsArgsSchema: z.ZodType<Prisma.BankDetailsDefaultArgs> = z.object({
  select: z.lazy(() => BankDetailsSelectSchema).optional(),
  include: z.lazy(() => BankDetailsIncludeSchema).optional(),
}).strict();

export const BankDetailsSelectSchema: z.ZodType<Prisma.BankDetailsSelect> = z.object({
  id: z.boolean().optional(),
  bankName: z.boolean().optional(),
  accountHolderName: z.boolean().optional(),
  accountNumber: z.boolean().optional(),
  swiftCode: z.boolean().optional(),
  currency: z.boolean().optional(),
  branch: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  nurseryDetailsId: z.boolean().optional(),
  nurseryDetails: z.union([z.boolean(),z.lazy(() => NurseryDetailsArgsSchema)]).optional(),
}).strict()

// NURSERY DETAILS
//------------------------------------------------------

export const NurseryDetailsIncludeSchema: z.ZodType<Prisma.NurseryDetailsInclude> = z.object({
}).strict()

export const NurseryDetailsArgsSchema: z.ZodType<Prisma.NurseryDetailsDefaultArgs> = z.object({
  select: z.lazy(() => NurseryDetailsSelectSchema).optional(),
  include: z.lazy(() => NurseryDetailsIncludeSchema).optional(),
}).strict();

export const NurseryDetailsSelectSchema: z.ZodType<Prisma.NurseryDetailsSelect> = z.object({
  id: z.boolean().optional(),
  address: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  email: z.boolean().optional(),
  themePrimaryColor: z.boolean().optional(),
  themeSecondaryColor: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  bankDetails: z.union([z.boolean(),z.lazy(() => BankDetailsArgsSchema)]).optional(),
}).strict()

// CLASS
//------------------------------------------------------

export const ClassIncludeSchema: z.ZodType<Prisma.ClassInclude> = z.object({
}).strict()

export const ClassArgsSchema: z.ZodType<Prisma.ClassDefaultArgs> = z.object({
  select: z.lazy(() => ClassSelectSchema).optional(),
  include: z.lazy(() => ClassIncludeSchema).optional(),
}).strict();

export const ClassCountOutputTypeArgsSchema: z.ZodType<Prisma.ClassCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClassCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClassCountOutputTypeSelectSchema: z.ZodType<Prisma.ClassCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
}).strict();

export const ClassSelectSchema: z.ZodType<Prisma.ClassSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  teacherId: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => ChildClassArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClassCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHILD
//------------------------------------------------------

export const ChildIncludeSchema: z.ZodType<Prisma.ChildInclude> = z.object({
}).strict()

export const ChildArgsSchema: z.ZodType<Prisma.ChildDefaultArgs> = z.object({
  select: z.lazy(() => ChildSelectSchema).optional(),
  include: z.lazy(() => ChildIncludeSchema).optional(),
}).strict();

export const ChildCountOutputTypeArgsSchema: z.ZodType<Prisma.ChildCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChildCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ChildCountOutputTypeSelectSchema: z.ZodType<Prisma.ChildCountOutputTypeSelect> = z.object({
  classes: z.boolean().optional(),
  badges: z.boolean().optional(),
  feedbacks: z.boolean().optional(),
}).strict();

export const ChildSelectSchema: z.ZodType<Prisma.ChildSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  parentId: z.boolean().optional(),
  nurseryId: z.boolean().optional(),
  classes: z.union([z.boolean(),z.lazy(() => ChildClassArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  nursery: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  badges: z.union([z.boolean(),z.lazy(() => ChildBadgeArgsSchema)]).optional(),
  feedbacks: z.union([z.boolean(),z.lazy(() => ChildFeedbackArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChildCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHILD CLASS
//------------------------------------------------------

export const ChildClassIncludeSchema: z.ZodType<Prisma.ChildClassInclude> = z.object({
}).strict()

export const ChildClassArgsSchema: z.ZodType<Prisma.ChildClassDefaultArgs> = z.object({
  select: z.lazy(() => ChildClassSelectSchema).optional(),
  include: z.lazy(() => ChildClassIncludeSchema).optional(),
}).strict();

export const ChildClassSelectSchema: z.ZodType<Prisma.ChildClassSelect> = z.object({
  id: z.boolean().optional(),
  childId: z.boolean().optional(),
  classId: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  child: z.union([z.boolean(),z.lazy(() => ChildArgsSchema)]).optional(),
  class: z.union([z.boolean(),z.lazy(() => ClassArgsSchema)]).optional(),
}).strict()

// BADGE
//------------------------------------------------------

export const BadgeIncludeSchema: z.ZodType<Prisma.BadgeInclude> = z.object({
}).strict()

export const BadgeArgsSchema: z.ZodType<Prisma.BadgeDefaultArgs> = z.object({
  select: z.lazy(() => BadgeSelectSchema).optional(),
  include: z.lazy(() => BadgeIncludeSchema).optional(),
}).strict();

export const BadgeCountOutputTypeArgsSchema: z.ZodType<Prisma.BadgeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BadgeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BadgeCountOutputTypeSelectSchema: z.ZodType<Prisma.BadgeCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
}).strict();

export const BadgeSelectSchema: z.ZodType<Prisma.BadgeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  children: z.union([z.boolean(),z.lazy(() => ChildBadgeArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BadgeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHILD BADGE
//------------------------------------------------------

export const ChildBadgeIncludeSchema: z.ZodType<Prisma.ChildBadgeInclude> = z.object({
}).strict()

export const ChildBadgeArgsSchema: z.ZodType<Prisma.ChildBadgeDefaultArgs> = z.object({
  select: z.lazy(() => ChildBadgeSelectSchema).optional(),
  include: z.lazy(() => ChildBadgeIncludeSchema).optional(),
}).strict();

export const ChildBadgeSelectSchema: z.ZodType<Prisma.ChildBadgeSelect> = z.object({
  id: z.boolean().optional(),
  childId: z.boolean().optional(),
  badgeId: z.boolean().optional(),
  awardedAt: z.boolean().optional(),
  child: z.union([z.boolean(),z.lazy(() => ChildArgsSchema)]).optional(),
  badge: z.union([z.boolean(),z.lazy(() => BadgeArgsSchema)]).optional(),
}).strict()

// CHILD FEEDBACK
//------------------------------------------------------

export const ChildFeedbackIncludeSchema: z.ZodType<Prisma.ChildFeedbackInclude> = z.object({
}).strict()

export const ChildFeedbackArgsSchema: z.ZodType<Prisma.ChildFeedbackDefaultArgs> = z.object({
  select: z.lazy(() => ChildFeedbackSelectSchema).optional(),
  include: z.lazy(() => ChildFeedbackIncludeSchema).optional(),
}).strict();

export const ChildFeedbackSelectSchema: z.ZodType<Prisma.ChildFeedbackSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  childId: z.boolean().optional(),
  teacherId: z.boolean().optional(),
  child: z.union([z.boolean(),z.lazy(() => ChildArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

// PAYMENT
//------------------------------------------------------

export const PaymentIncludeSchema: z.ZodType<Prisma.PaymentInclude> = z.object({
}).strict()

export const PaymentArgsSchema: z.ZodType<Prisma.PaymentDefaultArgs> = z.object({
  select: z.lazy(() => PaymentSelectSchema).optional(),
  include: z.lazy(() => PaymentIncludeSchema).optional(),
}).strict();

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  status: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  description: z.boolean().optional(),
  paymentDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  memberId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

// NOTIFICATION TAG
//------------------------------------------------------

export const NotificationTagIncludeSchema: z.ZodType<Prisma.NotificationTagInclude> = z.object({
}).strict()

export const NotificationTagArgsSchema: z.ZodType<Prisma.NotificationTagDefaultArgs> = z.object({
  select: z.lazy(() => NotificationTagSelectSchema).optional(),
  include: z.lazy(() => NotificationTagIncludeSchema).optional(),
}).strict();

export const NotificationTagCountOutputTypeArgsSchema: z.ZodType<Prisma.NotificationTagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => NotificationTagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const NotificationTagCountOutputTypeSelectSchema: z.ZodType<Prisma.NotificationTagCountOutputTypeSelect> = z.object({
  notifications: z.boolean().optional(),
}).strict();

export const NotificationTagSelectSchema: z.ZodType<Prisma.NotificationTagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationTag_NotificationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NotificationTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// NOTIFICATION
//------------------------------------------------------

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
}).strict()

export const NotificationArgsSchema: z.ZodType<Prisma.NotificationDefaultArgs> = z.object({
  select: z.lazy(() => NotificationSelectSchema).optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
}).strict();

export const NotificationCountOutputTypeArgsSchema: z.ZodType<Prisma.NotificationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => NotificationCountOutputTypeSelectSchema).nullish(),
}).strict();

export const NotificationCountOutputTypeSelectSchema: z.ZodType<Prisma.NotificationCountOutputTypeSelect> = z.object({
  recipients: z.boolean().optional(),
  tags: z.boolean().optional(),
}).strict();

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  read: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  senderId: z.boolean().optional(),
  sender: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  recipients: z.union([z.boolean(),z.lazy(() => NotificationRecipientArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => NotificationTag_NotificationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NotificationCountOutputTypeArgsSchema)]).optional(),
}).strict()

// NOTIFICATION TAG NOTIFICATION
//------------------------------------------------------

export const NotificationTag_NotificationIncludeSchema: z.ZodType<Prisma.NotificationTag_NotificationInclude> = z.object({
}).strict()

export const NotificationTag_NotificationArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationDefaultArgs> = z.object({
  select: z.lazy(() => NotificationTag_NotificationSelectSchema).optional(),
  include: z.lazy(() => NotificationTag_NotificationIncludeSchema).optional(),
}).strict();

export const NotificationTag_NotificationSelectSchema: z.ZodType<Prisma.NotificationTag_NotificationSelect> = z.object({
  id: z.boolean().optional(),
  notificationId: z.boolean().optional(),
  notificationTagId: z.boolean().optional(),
  notification: z.union([z.boolean(),z.lazy(() => NotificationArgsSchema)]).optional(),
  notificationTag: z.union([z.boolean(),z.lazy(() => NotificationTagArgsSchema)]).optional(),
}).strict()

// NOTIFICATION RECIPIENT
//------------------------------------------------------

export const NotificationRecipientIncludeSchema: z.ZodType<Prisma.NotificationRecipientInclude> = z.object({
}).strict()

export const NotificationRecipientArgsSchema: z.ZodType<Prisma.NotificationRecipientDefaultArgs> = z.object({
  select: z.lazy(() => NotificationRecipientSelectSchema).optional(),
  include: z.lazy(() => NotificationRecipientIncludeSchema).optional(),
}).strict();

export const NotificationRecipientSelectSchema: z.ZodType<Prisma.NotificationRecipientSelect> = z.object({
  id: z.boolean().optional(),
  notificationId: z.boolean().optional(),
  recipientId: z.boolean().optional(),
  readAt: z.boolean().optional(),
  notification: z.union([z.boolean(),z.lazy(() => NotificationArgsSchema)]).optional(),
  recipient: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  twoFactorEnabled: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banned: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  banReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banExpires: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterSchema).optional(),
  twofactors: z.lazy(() => TwoFactorListRelationFilterSchema).optional(),
  children: z.lazy(() => ChildListRelationFilterSchema).optional(),
  sentNotifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  twoFactorEnabled: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  banned: z.lazy(() => SortOrderSchema).optional(),
  banReason: z.lazy(() => SortOrderSchema).optional(),
  banExpires: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputSchema).optional(),
  invitations: z.lazy(() => InvitationOrderByRelationAggregateInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorOrderByRelationAggregateInputSchema).optional(),
  children: z.lazy(() => ChildOrderByRelationAggregateInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  twoFactorEnabled: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banned: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  banReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banExpires: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterSchema).optional(),
  twofactors: z.lazy(() => TwoFactorListRelationFilterSchema).optional(),
  children: z.lazy(() => ChildListRelationFilterSchema).optional(),
  sentNotifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  twoFactorEnabled: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  banned: z.lazy(() => SortOrderSchema).optional(),
  banReason: z.lazy(() => SortOrderSchema).optional(),
  banExpires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  twoFactorEnabled: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  banned: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  banReason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  banExpires: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeOrganizationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  impersonatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  activeOrganizationId: z.lazy(() => SortOrderSchema).optional(),
  impersonatedBy: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    token: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    token: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  token: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeOrganizationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  impersonatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  activeOrganizationId: z.lazy(() => SortOrderSchema).optional(),
  impersonatedBy: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  activeOrganizationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  impersonatedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationWhereInputSchema),z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationWhereInputSchema),z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const VerificationOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationWhereUniqueInputSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => VerificationWhereInputSchema),z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationWhereInputSchema),z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const VerificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const OrganizationWhereInputSchema: z.ZodType<Prisma.OrganizationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  metadata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterSchema).optional(),
  nurseryDetails: z.union([ z.lazy(() => NurseryDetailsNullableScalarRelationFilterSchema),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional().nullable(),
  classes: z.lazy(() => ClassListRelationFilterSchema).optional(),
  children: z.lazy(() => ChildListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional()
}).strict();

export const OrganizationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputSchema).optional(),
  invitations: z.lazy(() => InvitationOrderByRelationAggregateInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsOrderByWithRelationInputSchema).optional(),
  classes: z.lazy(() => ClassOrderByRelationAggregateInputSchema).optional(),
  children: z.lazy(() => ChildOrderByRelationAggregateInputSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const OrganizationWhereUniqueInputSchema: z.ZodType<Prisma.OrganizationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    slug: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  metadata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterSchema).optional(),
  nurseryDetails: z.union([ z.lazy(() => NurseryDetailsNullableScalarRelationFilterSchema),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional().nullable(),
  classes: z.lazy(() => ClassListRelationFilterSchema).optional(),
  children: z.lazy(() => ChildListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional()
}).strict());

export const OrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizationMinOrderByAggregateInputSchema).optional()
}).strict();

export const OrganizationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrganizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  metadata: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MemberWhereInputSchema: z.ZodType<Prisma.MemberWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassListRelationFilterSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional()
}).strict();

export const MemberOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassOrderByRelationAggregateInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackOrderByRelationAggregateInputSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MemberWhereUniqueInputSchema: z.ZodType<Prisma.MemberWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassListRelationFilterSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional()
}).strict());

export const MemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberMinOrderByAggregateInputSchema).optional()
}).strict();

export const MemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MemberScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InvitationWhereInputSchema: z.ZodType<Prisma.InvitationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvitationWhereInputSchema),z.lazy(() => InvitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationWhereInputSchema),z.lazy(() => InvitationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  inviterId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const InvitationOrderByWithRelationInputSchema: z.ZodType<Prisma.InvitationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  inviterId: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const InvitationWhereUniqueInputSchema: z.ZodType<Prisma.InvitationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InvitationWhereInputSchema),z.lazy(() => InvitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationWhereInputSchema),z.lazy(() => InvitationWhereInputSchema).array() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  inviterId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const InvitationOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvitationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  inviterId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InvitationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvitationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvitationMinOrderByAggregateInputSchema).optional()
}).strict();

export const InvitationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InvitationScalarWhereWithAggregatesInputSchema),z.lazy(() => InvitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationScalarWhereWithAggregatesInputSchema),z.lazy(() => InvitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  inviterId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TwoFactorWhereInputSchema: z.ZodType<Prisma.TwoFactorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TwoFactorWhereInputSchema),z.lazy(() => TwoFactorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TwoFactorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TwoFactorWhereInputSchema),z.lazy(() => TwoFactorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  backupCodes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const TwoFactorOrderByWithRelationInputSchema: z.ZodType<Prisma.TwoFactorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  backupCodes: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const TwoFactorWhereUniqueInputSchema: z.ZodType<Prisma.TwoFactorWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TwoFactorWhereInputSchema),z.lazy(() => TwoFactorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TwoFactorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TwoFactorWhereInputSchema),z.lazy(() => TwoFactorWhereInputSchema).array() ]).optional(),
  secret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  backupCodes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const TwoFactorOrderByWithAggregationInputSchema: z.ZodType<Prisma.TwoFactorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  backupCodes: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TwoFactorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TwoFactorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TwoFactorMinOrderByAggregateInputSchema).optional()
}).strict();

export const TwoFactorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TwoFactorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TwoFactorScalarWhereWithAggregatesInputSchema),z.lazy(() => TwoFactorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TwoFactorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TwoFactorScalarWhereWithAggregatesInputSchema),z.lazy(() => TwoFactorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  backupCodes: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TasksWhereInputSchema: z.ZodType<Prisma.TasksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TasksWhereInputSchema),z.lazy(() => TasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TasksWhereInputSchema),z.lazy(() => TasksWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  done: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const TasksOrderByWithRelationInputSchema: z.ZodType<Prisma.TasksOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  done: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TasksWhereUniqueInputSchema: z.ZodType<Prisma.TasksWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TasksWhereInputSchema),z.lazy(() => TasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TasksWhereInputSchema),z.lazy(() => TasksWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  done: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict());

export const TasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.TasksOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  done: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TasksCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TasksMinOrderByAggregateInputSchema).optional()
}).strict();

export const TasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TasksScalarWhereWithAggregatesInputSchema),z.lazy(() => TasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TasksScalarWhereWithAggregatesInputSchema),z.lazy(() => TasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  done: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const BankDetailsWhereInputSchema: z.ZodType<Prisma.BankDetailsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BankDetailsWhereInputSchema),z.lazy(() => BankDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankDetailsWhereInputSchema),z.lazy(() => BankDetailsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bankName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountHolderName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  swiftCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nurseryDetailsId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nurseryDetails: z.union([ z.lazy(() => NurseryDetailsNullableScalarRelationFilterSchema),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional().nullable(),
}).strict();

export const BankDetailsOrderByWithRelationInputSchema: z.ZodType<Prisma.BankDetailsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountHolderName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  swiftCode: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetailsId: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsOrderByWithRelationInputSchema).optional()
}).strict();

export const BankDetailsWhereUniqueInputSchema: z.ZodType<Prisma.BankDetailsWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    nurseryDetailsId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    nurseryDetailsId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  nurseryDetailsId: z.string().optional(),
  AND: z.union([ z.lazy(() => BankDetailsWhereInputSchema),z.lazy(() => BankDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankDetailsWhereInputSchema),z.lazy(() => BankDetailsWhereInputSchema).array() ]).optional(),
  bankName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountHolderName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  swiftCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nurseryDetails: z.union([ z.lazy(() => NurseryDetailsNullableScalarRelationFilterSchema),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional().nullable(),
}).strict());

export const BankDetailsOrderByWithAggregationInputSchema: z.ZodType<Prisma.BankDetailsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountHolderName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  swiftCode: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetailsId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BankDetailsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BankDetailsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BankDetailsMinOrderByAggregateInputSchema).optional()
}).strict();

export const BankDetailsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BankDetailsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BankDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => BankDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankDetailsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => BankDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bankName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountHolderName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  swiftCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  currency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  branch: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  nurseryDetailsId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const NurseryDetailsWhereInputSchema: z.ZodType<Prisma.NurseryDetailsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NurseryDetailsWhereInputSchema),z.lazy(() => NurseryDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NurseryDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NurseryDetailsWhereInputSchema),z.lazy(() => NurseryDetailsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phoneNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  themePrimaryColor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  bankDetails: z.union([ z.lazy(() => BankDetailsNullableScalarRelationFilterSchema),z.lazy(() => BankDetailsWhereInputSchema) ]).optional().nullable(),
}).strict();

export const NurseryDetailsOrderByWithRelationInputSchema: z.ZodType<Prisma.NurseryDetailsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  themePrimaryColor: z.lazy(() => SortOrderSchema).optional(),
  themeSecondaryColor: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  bankDetails: z.lazy(() => BankDetailsOrderByWithRelationInputSchema).optional()
}).strict();

export const NurseryDetailsWhereUniqueInputSchema: z.ZodType<Prisma.NurseryDetailsWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    organizationId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    organizationId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  organizationId: z.string().optional(),
  AND: z.union([ z.lazy(() => NurseryDetailsWhereInputSchema),z.lazy(() => NurseryDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NurseryDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NurseryDetailsWhereInputSchema),z.lazy(() => NurseryDetailsWhereInputSchema).array() ]).optional(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phoneNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  themePrimaryColor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  bankDetails: z.union([ z.lazy(() => BankDetailsNullableScalarRelationFilterSchema),z.lazy(() => BankDetailsWhereInputSchema) ]).optional().nullable(),
}).strict());

export const NurseryDetailsOrderByWithAggregationInputSchema: z.ZodType<Prisma.NurseryDetailsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  themePrimaryColor: z.lazy(() => SortOrderSchema).optional(),
  themeSecondaryColor: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NurseryDetailsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NurseryDetailsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NurseryDetailsMinOrderByAggregateInputSchema).optional()
}).strict();

export const NurseryDetailsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NurseryDetailsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NurseryDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => NurseryDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NurseryDetailsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NurseryDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => NurseryDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  phoneNumber: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  themePrimaryColor: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ClassWhereInputSchema: z.ZodType<Prisma.ClassWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClassWhereInputSchema),z.lazy(() => ClassWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassWhereInputSchema),z.lazy(() => ClassWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  children: z.lazy(() => ChildClassListRelationFilterSchema).optional()
}).strict();

export const ClassOrderByWithRelationInputSchema: z.ZodType<Prisma.ClassOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  teacher: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
  children: z.lazy(() => ChildClassOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ClassWhereUniqueInputSchema: z.ZodType<Prisma.ClassWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ClassWhereInputSchema),z.lazy(() => ClassWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassWhereInputSchema),z.lazy(() => ClassWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  children: z.lazy(() => ChildClassListRelationFilterSchema).optional()
}).strict());

export const ClassOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClassOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClassCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClassMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClassMinOrderByAggregateInputSchema).optional()
}).strict();

export const ClassScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClassScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClassScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ChildWhereInputSchema: z.ZodType<Prisma.ChildWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildWhereInputSchema),z.lazy(() => ChildWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildWhereInputSchema),z.lazy(() => ChildWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nurseryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classes: z.lazy(() => ChildClassListRelationFilterSchema).optional(),
  parent: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  nursery: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  badges: z.lazy(() => ChildBadgeListRelationFilterSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackListRelationFilterSchema).optional()
}).strict();

export const ChildOrderByWithRelationInputSchema: z.ZodType<Prisma.ChildOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  nurseryId: z.lazy(() => SortOrderSchema).optional(),
  classes: z.lazy(() => ChildClassOrderByRelationAggregateInputSchema).optional(),
  parent: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  nursery: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeOrderByRelationAggregateInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ChildWhereUniqueInputSchema: z.ZodType<Prisma.ChildWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ChildWhereInputSchema),z.lazy(() => ChildWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildWhereInputSchema),z.lazy(() => ChildWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nurseryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classes: z.lazy(() => ChildClassListRelationFilterSchema).optional(),
  parent: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  nursery: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  badges: z.lazy(() => ChildBadgeListRelationFilterSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackListRelationFilterSchema).optional()
}).strict());

export const ChildOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChildOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  nurseryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChildCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChildMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChildMinOrderByAggregateInputSchema).optional()
}).strict();

export const ChildScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChildScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChildScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  parentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nurseryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ChildClassWhereInputSchema: z.ZodType<Prisma.ChildClassWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildClassWhereInputSchema),z.lazy(() => ChildClassWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildClassWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildClassWhereInputSchema),z.lazy(() => ChildClassWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  class: z.union([ z.lazy(() => ClassScalarRelationFilterSchema),z.lazy(() => ClassWhereInputSchema) ]).optional(),
}).strict();

export const ChildClassOrderByWithRelationInputSchema: z.ZodType<Prisma.ChildClassOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  classId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  child: z.lazy(() => ChildOrderByWithRelationInputSchema).optional(),
  class: z.lazy(() => ClassOrderByWithRelationInputSchema).optional()
}).strict();

export const ChildClassWhereUniqueInputSchema: z.ZodType<Prisma.ChildClassWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    childId_classId: z.lazy(() => ChildClassChildIdClassIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    childId_classId: z.lazy(() => ChildClassChildIdClassIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  childId_classId: z.lazy(() => ChildClassChildIdClassIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ChildClassWhereInputSchema),z.lazy(() => ChildClassWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildClassWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildClassWhereInputSchema),z.lazy(() => ChildClassWhereInputSchema).array() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  class: z.union([ z.lazy(() => ClassScalarRelationFilterSchema),z.lazy(() => ClassWhereInputSchema) ]).optional(),
}).strict());

export const ChildClassOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChildClassOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  classId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChildClassCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChildClassMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChildClassMinOrderByAggregateInputSchema).optional()
}).strict();

export const ChildClassScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChildClassScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChildClassScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildClassScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildClassScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildClassScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildClassScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BadgeWhereInputSchema: z.ZodType<Prisma.BadgeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BadgeWhereInputSchema),z.lazy(() => BadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BadgeWhereInputSchema),z.lazy(() => BadgeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  children: z.lazy(() => ChildBadgeListRelationFilterSchema).optional()
}).strict();

export const BadgeOrderByWithRelationInputSchema: z.ZodType<Prisma.BadgeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  children: z.lazy(() => ChildBadgeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BadgeWhereUniqueInputSchema: z.ZodType<Prisma.BadgeWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => BadgeWhereInputSchema),z.lazy(() => BadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BadgeWhereInputSchema),z.lazy(() => BadgeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  children: z.lazy(() => ChildBadgeListRelationFilterSchema).optional()
}).strict());

export const BadgeOrderByWithAggregationInputSchema: z.ZodType<Prisma.BadgeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BadgeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BadgeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BadgeMinOrderByAggregateInputSchema).optional()
}).strict();

export const BadgeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BadgeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => BadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BadgeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => BadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChildBadgeWhereInputSchema: z.ZodType<Prisma.ChildBadgeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildBadgeWhereInputSchema),z.lazy(() => ChildBadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildBadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildBadgeWhereInputSchema),z.lazy(() => ChildBadgeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  badgeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  awardedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  badge: z.union([ z.lazy(() => BadgeScalarRelationFilterSchema),z.lazy(() => BadgeWhereInputSchema) ]).optional(),
}).strict();

export const ChildBadgeOrderByWithRelationInputSchema: z.ZodType<Prisma.ChildBadgeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  badgeId: z.lazy(() => SortOrderSchema).optional(),
  awardedAt: z.lazy(() => SortOrderSchema).optional(),
  child: z.lazy(() => ChildOrderByWithRelationInputSchema).optional(),
  badge: z.lazy(() => BadgeOrderByWithRelationInputSchema).optional()
}).strict();

export const ChildBadgeWhereUniqueInputSchema: z.ZodType<Prisma.ChildBadgeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    childId_badgeId: z.lazy(() => ChildBadgeChildIdBadgeIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    childId_badgeId: z.lazy(() => ChildBadgeChildIdBadgeIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  childId_badgeId: z.lazy(() => ChildBadgeChildIdBadgeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ChildBadgeWhereInputSchema),z.lazy(() => ChildBadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildBadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildBadgeWhereInputSchema),z.lazy(() => ChildBadgeWhereInputSchema).array() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  badgeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  awardedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  badge: z.union([ z.lazy(() => BadgeScalarRelationFilterSchema),z.lazy(() => BadgeWhereInputSchema) ]).optional(),
}).strict());

export const ChildBadgeOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChildBadgeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  badgeId: z.lazy(() => SortOrderSchema).optional(),
  awardedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChildBadgeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChildBadgeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChildBadgeMinOrderByAggregateInputSchema).optional()
}).strict();

export const ChildBadgeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChildBadgeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChildBadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildBadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildBadgeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildBadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildBadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  badgeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  awardedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChildFeedbackWhereInputSchema: z.ZodType<Prisma.ChildFeedbackWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildFeedbackWhereInputSchema),z.lazy(() => ChildFeedbackWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildFeedbackWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildFeedbackWhereInputSchema),z.lazy(() => ChildFeedbackWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackOrderByWithRelationInputSchema: z.ZodType<Prisma.ChildFeedbackOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  child: z.lazy(() => ChildOrderByWithRelationInputSchema).optional(),
  teacher: z.lazy(() => MemberOrderByWithRelationInputSchema).optional()
}).strict();

export const ChildFeedbackWhereUniqueInputSchema: z.ZodType<Prisma.ChildFeedbackWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ChildFeedbackWhereInputSchema),z.lazy(() => ChildFeedbackWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildFeedbackWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildFeedbackWhereInputSchema),z.lazy(() => ChildFeedbackWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  child: z.union([ z.lazy(() => ChildScalarRelationFilterSchema),z.lazy(() => ChildWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
}).strict());

export const ChildFeedbackOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChildFeedbackOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChildFeedbackCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ChildFeedbackAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChildFeedbackMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChildFeedbackMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ChildFeedbackSumOrderByAggregateInputSchema).optional()
}).strict();

export const ChildFeedbackScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChildFeedbackScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChildFeedbackScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildFeedbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildFeedbackScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildFeedbackScalarWhereWithAggregatesInputSchema),z.lazy(() => ChildFeedbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  childId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PaymentWhereInputSchema: z.ZodType<Prisma.PaymentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
}).strict();

export const PaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  paymentDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional()
}).strict();

export const PaymentWhereUniqueInputSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
}).strict());

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  paymentDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional()
}).strict();

export const PaymentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  paymentMethod: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  paymentDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  memberId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationTagWhereInputSchema: z.ZodType<Prisma.NotificationTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTagWhereInputSchema),z.lazy(() => NotificationTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTagWhereInputSchema),z.lazy(() => NotificationTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  notifications: z.lazy(() => NotificationTag_NotificationListRelationFilterSchema).optional()
}).strict();

export const NotificationTagOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  notifications: z.lazy(() => NotificationTag_NotificationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const NotificationTagWhereUniqueInputSchema: z.ZodType<Prisma.NotificationTagWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => NotificationTagWhereInputSchema),z.lazy(() => NotificationTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTagWhereInputSchema),z.lazy(() => NotificationTagWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  notifications: z.lazy(() => NotificationTag_NotificationListRelationFilterSchema).optional()
}).strict());

export const NotificationTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationTagMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTagScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTagScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sender: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientListRelationFilterSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationListRelationFilterSchema).optional()
}).strict();

export const NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  sender: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  recipients: z.lazy(() => NotificationRecipientOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sender: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientListRelationFilterSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationListRelationFilterSchema).optional()
}).strict());

export const NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  senderId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationTag_NotificationWhereInputSchema: z.ZodType<Prisma.NotificationTag_NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTag_NotificationWhereInputSchema),z.lazy(() => NotificationTag_NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTag_NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTag_NotificationWhereInputSchema),z.lazy(() => NotificationTag_NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationTagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notification: z.union([ z.lazy(() => NotificationScalarRelationFilterSchema),z.lazy(() => NotificationWhereInputSchema) ]).optional(),
  notificationTag: z.union([ z.lazy(() => NotificationTagScalarRelationFilterSchema),z.lazy(() => NotificationTagWhereInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  notificationTagId: z.lazy(() => SortOrderSchema).optional(),
  notification: z.lazy(() => NotificationOrderByWithRelationInputSchema).optional(),
  notificationTag: z.lazy(() => NotificationTagOrderByWithRelationInputSchema).optional()
}).strict();

export const NotificationTag_NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationTag_NotificationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    notificationId_notificationTagId: z.lazy(() => NotificationTag_NotificationNotificationIdNotificationTagIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    notificationId_notificationTagId: z.lazy(() => NotificationTag_NotificationNotificationIdNotificationTagIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  notificationId_notificationTagId: z.lazy(() => NotificationTag_NotificationNotificationIdNotificationTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => NotificationTag_NotificationWhereInputSchema),z.lazy(() => NotificationTag_NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTag_NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTag_NotificationWhereInputSchema),z.lazy(() => NotificationTag_NotificationWhereInputSchema).array() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationTagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notification: z.union([ z.lazy(() => NotificationScalarRelationFilterSchema),z.lazy(() => NotificationWhereInputSchema) ]).optional(),
  notificationTag: z.union([ z.lazy(() => NotificationTagScalarRelationFilterSchema),z.lazy(() => NotificationTagWhereInputSchema) ]).optional(),
}).strict());

export const NotificationTag_NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  notificationTagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationTag_NotificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationTag_NotificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationTag_NotificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationTag_NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationTag_NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTag_NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notificationTagId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationRecipientWhereInputSchema: z.ZodType<Prisma.NotificationRecipientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationRecipientWhereInputSchema),z.lazy(() => NotificationRecipientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationRecipientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationRecipientWhereInputSchema),z.lazy(() => NotificationRecipientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  notification: z.union([ z.lazy(() => NotificationScalarRelationFilterSchema),z.lazy(() => NotificationWhereInputSchema) ]).optional(),
  recipient: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const NotificationRecipientOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationRecipientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional(),
  notification: z.lazy(() => NotificationOrderByWithRelationInputSchema).optional(),
  recipient: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const NotificationRecipientWhereUniqueInputSchema: z.ZodType<Prisma.NotificationRecipientWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    notificationId_recipientId: z.lazy(() => NotificationRecipientNotificationIdRecipientIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    notificationId_recipientId: z.lazy(() => NotificationRecipientNotificationIdRecipientIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  notificationId_recipientId: z.lazy(() => NotificationRecipientNotificationIdRecipientIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => NotificationRecipientWhereInputSchema),z.lazy(() => NotificationRecipientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationRecipientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationRecipientWhereInputSchema),z.lazy(() => NotificationRecipientWhereInputSchema).array() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  notification: z.union([ z.lazy(() => NotificationScalarRelationFilterSchema),z.lazy(() => NotificationWhereInputSchema) ]).optional(),
  recipient: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const NotificationRecipientOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationRecipientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationRecipientCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationRecipientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationRecipientMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationRecipientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationRecipientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationRecipientScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationRecipientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationRecipientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationRecipientScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationRecipientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  recipientId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  userId: z.string(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  userId: z.string(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationCreateInputSchema: z.ZodType<Prisma.VerificationCreateInput> = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export const VerificationUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationCreateInputSchema: z.ZodType<Prisma.OrganizationCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUpdateInputSchema: z.ZodType<Prisma.OrganizationUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationCreateManyInputSchema: z.ZodType<Prisma.OrganizationCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable()
}).strict();

export const OrganizationUpdateManyMutationInputSchema: z.ZodType<Prisma.OrganizationUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MemberCreateInputSchema: z.ZodType<Prisma.MemberCreateInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputSchema),
  teachingClasses: z.lazy(() => ClassCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUncheckedCreateInputSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  teachingClasses: z.lazy(() => ClassUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUpdateInputSchema: z.ZodType<Prisma.MemberUpdateInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberCreateManyInputSchema: z.ZodType<Prisma.MemberCreateManyInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date()
}).strict();

export const MemberUpdateManyMutationInputSchema: z.ZodType<Prisma.MemberUpdateManyMutationInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationCreateInputSchema: z.ZodType<Prisma.InvitationCreateInput> = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutInvitationsInputSchema)
}).strict();

export const InvitationUncheckedCreateInputSchema: z.ZodType<Prisma.InvitationUncheckedCreateInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();

export const InvitationUpdateInputSchema: z.ZodType<Prisma.InvitationUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutInvitationsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInvitationsNestedInputSchema).optional()
}).strict();

export const InvitationUncheckedUpdateInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  inviterId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationCreateManyInputSchema: z.ZodType<Prisma.InvitationCreateManyInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();

export const InvitationUpdateManyMutationInputSchema: z.ZodType<Prisma.InvitationUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  inviterId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorCreateInputSchema: z.ZodType<Prisma.TwoFactorCreateInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTwofactorsInputSchema)
}).strict();

export const TwoFactorUncheckedCreateInputSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string()
}).strict();

export const TwoFactorUpdateInputSchema: z.ZodType<Prisma.TwoFactorUpdateInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTwofactorsNestedInputSchema).optional()
}).strict();

export const TwoFactorUncheckedUpdateInputSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorCreateManyInputSchema: z.ZodType<Prisma.TwoFactorCreateManyInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string()
}).strict();

export const TwoFactorUpdateManyMutationInputSchema: z.ZodType<Prisma.TwoFactorUpdateManyMutationInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateManyInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TasksCreateInputSchema: z.ZodType<Prisma.TasksCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  done: z.boolean().optional()
}).strict();

export const TasksUncheckedCreateInputSchema: z.ZodType<Prisma.TasksUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  done: z.boolean().optional()
}).strict();

export const TasksUpdateInputSchema: z.ZodType<Prisma.TasksUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  done: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TasksUncheckedUpdateInputSchema: z.ZodType<Prisma.TasksUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  done: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TasksCreateManyInputSchema: z.ZodType<Prisma.TasksCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  done: z.boolean().optional()
}).strict();

export const TasksUpdateManyMutationInputSchema: z.ZodType<Prisma.TasksUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  done: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TasksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TasksUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  done: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BankDetailsCreateInputSchema: z.ZodType<Prisma.BankDetailsCreateInput> = z.object({
  id: z.string().optional(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutBankDetailsInputSchema).optional()
}).strict();

export const BankDetailsUncheckedCreateInputSchema: z.ZodType<Prisma.BankDetailsUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  nurseryDetailsId: z.string().optional().nullable()
}).strict();

export const BankDetailsUpdateInputSchema: z.ZodType<Prisma.BankDetailsUpdateInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutBankDetailsNestedInputSchema).optional()
}).strict();

export const BankDetailsUncheckedUpdateInputSchema: z.ZodType<Prisma.BankDetailsUncheckedUpdateInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryDetailsId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BankDetailsCreateManyInputSchema: z.ZodType<Prisma.BankDetailsCreateManyInput> = z.object({
  id: z.string().optional(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  nurseryDetailsId: z.string().optional().nullable()
}).strict();

export const BankDetailsUpdateManyMutationInputSchema: z.ZodType<Prisma.BankDetailsUpdateManyMutationInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BankDetailsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BankDetailsUncheckedUpdateManyInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryDetailsId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NurseryDetailsCreateInputSchema: z.ZodType<Prisma.NurseryDetailsCreateInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutNurseryDetailsInputSchema),
  bankDetails: z.lazy(() => BankDetailsCreateNestedOneWithoutNurseryDetailsInputSchema).optional()
}).strict();

export const NurseryDetailsUncheckedCreateInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string(),
  bankDetails: z.lazy(() => BankDetailsUncheckedCreateNestedOneWithoutNurseryDetailsInputSchema).optional()
}).strict();

export const NurseryDetailsUpdateInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutNurseryDetailsNestedInputSchema).optional(),
  bankDetails: z.lazy(() => BankDetailsUpdateOneWithoutNurseryDetailsNestedInputSchema).optional()
}).strict();

export const NurseryDetailsUncheckedUpdateInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedUpdateInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bankDetails: z.lazy(() => BankDetailsUncheckedUpdateOneWithoutNurseryDetailsNestedInputSchema).optional()
}).strict();

export const NurseryDetailsCreateManyInputSchema: z.ZodType<Prisma.NurseryDetailsCreateManyInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string()
}).strict();

export const NurseryDetailsUpdateManyMutationInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateManyMutationInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NurseryDetailsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedUpdateManyInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassCreateInputSchema: z.ZodType<Prisma.ClassCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutClassesInputSchema),
  teacher: z.lazy(() => MemberCreateNestedOneWithoutTeachingClassesInputSchema),
  children: z.lazy(() => ChildClassCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassUncheckedCreateInputSchema: z.ZodType<Prisma.ClassUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string(),
  teacherId: z.string(),
  children: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassUpdateInputSchema: z.ZodType<Prisma.ClassUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutClassesNestedInputSchema).optional(),
  teacher: z.lazy(() => MemberUpdateOneRequiredWithoutTeachingClassesNestedInputSchema).optional(),
  children: z.lazy(() => ChildClassUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ChildClassUncheckedUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassCreateManyInputSchema: z.ZodType<Prisma.ClassCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string(),
  teacherId: z.string()
}).strict();

export const ClassUpdateManyMutationInputSchema: z.ZodType<Prisma.ClassUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildCreateInputSchema: z.ZodType<Prisma.ChildCreateInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classes: z.lazy(() => ChildClassCreateNestedManyWithoutChildInputSchema).optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutChildrenInputSchema),
  nursery: z.lazy(() => OrganizationCreateNestedOneWithoutChildrenInputSchema),
  badges: z.lazy(() => ChildBadgeCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateInputSchema: z.ZodType<Prisma.ChildUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  nurseryId: z.string(),
  classes: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUpdateInputSchema: z.ZodType<Prisma.ChildUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUpdateManyWithoutChildNestedInputSchema).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  nursery: z.lazy(() => OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildCreateManyInputSchema: z.ZodType<Prisma.ChildCreateManyInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  nurseryId: z.string()
}).strict();

export const ChildUpdateManyMutationInputSchema: z.ZodType<Prisma.ChildUpdateManyMutationInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateManyInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassCreateInputSchema: z.ZodType<Prisma.ChildClassCreateInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutClassesInputSchema),
  class: z.lazy(() => ClassCreateNestedOneWithoutChildrenInputSchema)
}).strict();

export const ChildClassUncheckedCreateInputSchema: z.ZodType<Prisma.ChildClassUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  classId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildClassUpdateInputSchema: z.ZodType<Prisma.ChildClassUpdateInput> = z.object({
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutClassesNestedInputSchema).optional(),
  class: z.lazy(() => ClassUpdateOneRequiredWithoutChildrenNestedInputSchema).optional()
}).strict();

export const ChildClassUncheckedUpdateInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassCreateManyInputSchema: z.ZodType<Prisma.ChildClassCreateManyInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  classId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildClassUpdateManyMutationInputSchema: z.ZodType<Prisma.ChildClassUpdateManyMutationInput> = z.object({
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateManyInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BadgeCreateInputSchema: z.ZodType<Prisma.BadgeCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => ChildBadgeCreateNestedManyWithoutBadgeInputSchema).optional()
}).strict();

export const BadgeUncheckedCreateInputSchema: z.ZodType<Prisma.BadgeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutBadgeInputSchema).optional()
}).strict();

export const BadgeUpdateInputSchema: z.ZodType<Prisma.BadgeUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ChildBadgeUpdateManyWithoutBadgeNestedInputSchema).optional()
}).strict();

export const BadgeUncheckedUpdateInputSchema: z.ZodType<Prisma.BadgeUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutBadgeNestedInputSchema).optional()
}).strict();

export const BadgeCreateManyInputSchema: z.ZodType<Prisma.BadgeCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BadgeUpdateManyMutationInputSchema: z.ZodType<Prisma.BadgeUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BadgeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BadgeUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeCreateInputSchema: z.ZodType<Prisma.ChildBadgeCreateInput> = z.object({
  id: z.string().optional(),
  awardedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutBadgesInputSchema),
  badge: z.lazy(() => BadgeCreateNestedOneWithoutChildrenInputSchema)
}).strict();

export const ChildBadgeUncheckedCreateInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  badgeId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeUpdateInputSchema: z.ZodType<Prisma.ChildBadgeUpdateInput> = z.object({
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutBadgesNestedInputSchema).optional(),
  badge: z.lazy(() => BadgeUpdateOneRequiredWithoutChildrenNestedInputSchema).optional()
}).strict();

export const ChildBadgeUncheckedUpdateInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  badgeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeCreateManyInputSchema: z.ZodType<Prisma.ChildBadgeCreateManyInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  badgeId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeUpdateManyMutationInputSchema: z.ZodType<Prisma.ChildBadgeUpdateManyMutationInput> = z.object({
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateManyInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  badgeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackCreateInputSchema: z.ZodType<Prisma.ChildFeedbackCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutFeedbacksInputSchema),
  teacher: z.lazy(() => MemberCreateNestedOneWithoutChildFeedbackInputSchema)
}).strict();

export const ChildFeedbackUncheckedCreateInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  childId: z.string(),
  teacherId: z.string()
}).strict();

export const ChildFeedbackUpdateInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutFeedbacksNestedInputSchema).optional(),
  teacher: z.lazy(() => MemberUpdateOneRequiredWithoutChildFeedbackNestedInputSchema).optional()
}).strict();

export const ChildFeedbackUncheckedUpdateInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackCreateManyInputSchema: z.ZodType<Prisma.ChildFeedbackCreateManyInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  childId: z.string(),
  teacherId: z.string()
}).strict();

export const ChildFeedbackUpdateManyMutationInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateManyInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateInputSchema: z.ZodType<Prisma.PaymentCreateInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutPaymentsInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPaymentsInputSchema)
}).strict();

export const PaymentUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberId: z.string(),
  organizationId: z.string()
}).strict();

export const PaymentUpdateInputSchema: z.ZodType<Prisma.PaymentUpdateInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateManyInputSchema: z.ZodType<Prisma.PaymentCreateManyInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberId: z.string(),
  organizationId: z.string()
}).strict();

export const PaymentUpdateManyMutationInputSchema: z.ZodType<Prisma.PaymentUpdateManyMutationInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTagCreateInputSchema: z.ZodType<Prisma.NotificationTagCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  notifications: z.lazy(() => NotificationTag_NotificationCreateNestedManyWithoutNotificationTagInputSchema).optional()
}).strict();

export const NotificationTagUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationTagUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  notifications: z.lazy(() => NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationTagInputSchema).optional()
}).strict();

export const NotificationTagUpdateInputSchema: z.ZodType<Prisma.NotificationTagUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  notifications: z.lazy(() => NotificationTag_NotificationUpdateManyWithoutNotificationTagNestedInputSchema).optional()
}).strict();

export const NotificationTagUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationTagUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  notifications: z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagNestedInputSchema).optional()
}).strict();

export const NotificationTagCreateManyInputSchema: z.ZodType<Prisma.NotificationTagCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NotificationTagUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationTagUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationTagUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateInputSchema: z.ZodType<Prisma.NotificationCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentNotificationsInputSchema),
  recipients: z.lazy(() => NotificationRecipientCreateNestedManyWithoutNotificationInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  senderId: z.string(),
  recipients: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutNotificationInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutSentNotificationsNestedInputSchema).optional(),
  recipients: z.lazy(() => NotificationRecipientUpdateManyWithoutNotificationNestedInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationCreateManyInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  senderId: z.string()
}).strict();

export const NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationCreateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateInput> = z.object({
  id: z.string().optional(),
  notification: z.lazy(() => NotificationCreateNestedOneWithoutTagsInputSchema),
  notificationTag: z.lazy(() => NotificationTagCreateNestedOneWithoutNotificationsInputSchema)
}).strict();

export const NotificationTag_NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  notificationTagId: z.string()
}).strict();

export const NotificationTag_NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateInput> = z.object({
  notification: z.lazy(() => NotificationUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  notificationTag: z.lazy(() => NotificationTagUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationTag_NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notificationTagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  notificationTagId: z.string()
}).strict();

export const NotificationTag_NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyMutationInput> = z.object({
}).strict();

export const NotificationTag_NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateManyInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notificationTagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationRecipientCreateInputSchema: z.ZodType<Prisma.NotificationRecipientCreateInput> = z.object({
  id: z.string().optional(),
  readAt: z.coerce.date().optional().nullable(),
  notification: z.lazy(() => NotificationCreateNestedOneWithoutRecipientsInputSchema),
  recipient: z.lazy(() => UserCreateNestedOneWithoutReceivedNotificationsInputSchema)
}).strict();

export const NotificationRecipientUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  recipientId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const NotificationRecipientUpdateInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notification: z.lazy(() => NotificationUpdateOneRequiredWithoutRecipientsNestedInputSchema).optional(),
  recipient: z.lazy(() => UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationRecipientUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationRecipientCreateManyInputSchema: z.ZodType<Prisma.NotificationRecipientCreateManyInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  recipientId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const NotificationRecipientUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyMutationInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationRecipientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateManyInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const MemberListRelationFilterSchema: z.ZodType<Prisma.MemberListRelationFilter> = z.object({
  every: z.lazy(() => MemberWhereInputSchema).optional(),
  some: z.lazy(() => MemberWhereInputSchema).optional(),
  none: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const InvitationListRelationFilterSchema: z.ZodType<Prisma.InvitationListRelationFilter> = z.object({
  every: z.lazy(() => InvitationWhereInputSchema).optional(),
  some: z.lazy(() => InvitationWhereInputSchema).optional(),
  none: z.lazy(() => InvitationWhereInputSchema).optional()
}).strict();

export const TwoFactorListRelationFilterSchema: z.ZodType<Prisma.TwoFactorListRelationFilter> = z.object({
  every: z.lazy(() => TwoFactorWhereInputSchema).optional(),
  some: z.lazy(() => TwoFactorWhereInputSchema).optional(),
  none: z.lazy(() => TwoFactorWhereInputSchema).optional()
}).strict();

export const ChildListRelationFilterSchema: z.ZodType<Prisma.ChildListRelationFilter> = z.object({
  every: z.lazy(() => ChildWhereInputSchema).optional(),
  some: z.lazy(() => ChildWhereInputSchema).optional(),
  none: z.lazy(() => ChildWhereInputSchema).optional()
}).strict();

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> = z.object({
  every: z.lazy(() => NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const NotificationRecipientListRelationFilterSchema: z.ZodType<Prisma.NotificationRecipientListRelationFilter> = z.object({
  every: z.lazy(() => NotificationRecipientWhereInputSchema).optional(),
  some: z.lazy(() => NotificationRecipientWhereInputSchema).optional(),
  none: z.lazy(() => NotificationRecipientWhereInputSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MemberOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvitationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TwoFactorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TwoFactorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChildOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationRecipientOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationRecipientOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  twoFactorEnabled: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  banned: z.lazy(() => SortOrderSchema).optional(),
  banReason: z.lazy(() => SortOrderSchema).optional(),
  banExpires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  twoFactorEnabled: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  banned: z.lazy(() => SortOrderSchema).optional(),
  banReason: z.lazy(() => SortOrderSchema).optional(),
  banExpires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  twoFactorEnabled: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  banned: z.lazy(() => SortOrderSchema).optional(),
  banReason: z.lazy(() => SortOrderSchema).optional(),
  banExpires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  activeOrganizationId: z.lazy(() => SortOrderSchema).optional(),
  impersonatedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  activeOrganizationId: z.lazy(() => SortOrderSchema).optional(),
  impersonatedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  activeOrganizationId: z.lazy(() => SortOrderSchema).optional(),
  impersonatedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NurseryDetailsNullableScalarRelationFilterSchema: z.ZodType<Prisma.NurseryDetailsNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => NurseryDetailsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NurseryDetailsWhereInputSchema).optional().nullable()
}).strict();

export const ClassListRelationFilterSchema: z.ZodType<Prisma.ClassListRelationFilter> = z.object({
  every: z.lazy(() => ClassWhereInputSchema).optional(),
  some: z.lazy(() => ClassWhereInputSchema).optional(),
  none: z.lazy(() => ClassWhereInputSchema).optional()
}).strict();

export const PaymentListRelationFilterSchema: z.ZodType<Prisma.PaymentListRelationFilter> = z.object({
  every: z.lazy(() => PaymentWhereInputSchema).optional(),
  some: z.lazy(() => PaymentWhereInputSchema).optional(),
  none: z.lazy(() => PaymentWhereInputSchema).optional()
}).strict();

export const ClassOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClassOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PaymentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationScalarRelationFilterSchema: z.ZodType<Prisma.OrganizationScalarRelationFilter> = z.object({
  is: z.lazy(() => OrganizationWhereInputSchema).optional(),
  isNot: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const ChildFeedbackListRelationFilterSchema: z.ZodType<Prisma.ChildFeedbackListRelationFilter> = z.object({
  every: z.lazy(() => ChildFeedbackWhereInputSchema).optional(),
  some: z.lazy(() => ChildFeedbackWhereInputSchema).optional(),
  none: z.lazy(() => ChildFeedbackWhereInputSchema).optional()
}).strict();

export const ChildFeedbackOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberCountOrderByAggregateInputSchema: z.ZodType<Prisma.MemberCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberMinOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationCountOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  inviterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  inviterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  inviterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TwoFactorCountOrderByAggregateInputSchema: z.ZodType<Prisma.TwoFactorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  backupCodes: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TwoFactorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TwoFactorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  backupCodes: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TwoFactorMinOrderByAggregateInputSchema: z.ZodType<Prisma.TwoFactorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  backupCodes: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TasksCountOrderByAggregateInputSchema: z.ZodType<Prisma.TasksCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  done: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TasksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TasksMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  done: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TasksMinOrderByAggregateInputSchema: z.ZodType<Prisma.TasksMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  done: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BankDetailsCountOrderByAggregateInputSchema: z.ZodType<Prisma.BankDetailsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountHolderName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  swiftCode: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetailsId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BankDetailsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BankDetailsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountHolderName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  swiftCode: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetailsId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BankDetailsMinOrderByAggregateInputSchema: z.ZodType<Prisma.BankDetailsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountHolderName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  swiftCode: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  nurseryDetailsId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BankDetailsNullableScalarRelationFilterSchema: z.ZodType<Prisma.BankDetailsNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => BankDetailsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BankDetailsWhereInputSchema).optional().nullable()
}).strict();

export const NurseryDetailsCountOrderByAggregateInputSchema: z.ZodType<Prisma.NurseryDetailsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  themePrimaryColor: z.lazy(() => SortOrderSchema).optional(),
  themeSecondaryColor: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NurseryDetailsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NurseryDetailsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  themePrimaryColor: z.lazy(() => SortOrderSchema).optional(),
  themeSecondaryColor: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NurseryDetailsMinOrderByAggregateInputSchema: z.ZodType<Prisma.NurseryDetailsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  themePrimaryColor: z.lazy(() => SortOrderSchema).optional(),
  themeSecondaryColor: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberScalarRelationFilterSchema: z.ZodType<Prisma.MemberScalarRelationFilter> = z.object({
  is: z.lazy(() => MemberWhereInputSchema).optional(),
  isNot: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const ChildClassListRelationFilterSchema: z.ZodType<Prisma.ChildClassListRelationFilter> = z.object({
  every: z.lazy(() => ChildClassWhereInputSchema).optional(),
  some: z.lazy(() => ChildClassWhereInputSchema).optional(),
  none: z.lazy(() => ChildClassWhereInputSchema).optional()
}).strict();

export const ChildClassOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChildClassOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClassCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClassMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClassMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildBadgeListRelationFilterSchema: z.ZodType<Prisma.ChildBadgeListRelationFilter> = z.object({
  every: z.lazy(() => ChildBadgeWhereInputSchema).optional(),
  some: z.lazy(() => ChildBadgeWhereInputSchema).optional(),
  none: z.lazy(() => ChildBadgeWhereInputSchema).optional()
}).strict();

export const ChildBadgeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChildBadgeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChildCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  nurseryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChildMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  nurseryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChildMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  nurseryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildScalarRelationFilterSchema: z.ZodType<Prisma.ChildScalarRelationFilter> = z.object({
  is: z.lazy(() => ChildWhereInputSchema).optional(),
  isNot: z.lazy(() => ChildWhereInputSchema).optional()
}).strict();

export const ClassScalarRelationFilterSchema: z.ZodType<Prisma.ClassScalarRelationFilter> = z.object({
  is: z.lazy(() => ClassWhereInputSchema).optional(),
  isNot: z.lazy(() => ClassWhereInputSchema).optional()
}).strict();

export const ChildClassChildIdClassIdCompoundUniqueInputSchema: z.ZodType<Prisma.ChildClassChildIdClassIdCompoundUniqueInput> = z.object({
  childId: z.string(),
  classId: z.string()
}).strict();

export const ChildClassCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChildClassCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  classId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildClassMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChildClassMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  classId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildClassMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChildClassMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  classId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BadgeCountOrderByAggregateInputSchema: z.ZodType<Prisma.BadgeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BadgeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BadgeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BadgeMinOrderByAggregateInputSchema: z.ZodType<Prisma.BadgeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BadgeScalarRelationFilterSchema: z.ZodType<Prisma.BadgeScalarRelationFilter> = z.object({
  is: z.lazy(() => BadgeWhereInputSchema).optional(),
  isNot: z.lazy(() => BadgeWhereInputSchema).optional()
}).strict();

export const ChildBadgeChildIdBadgeIdCompoundUniqueInputSchema: z.ZodType<Prisma.ChildBadgeChildIdBadgeIdCompoundUniqueInput> = z.object({
  childId: z.string(),
  badgeId: z.string()
}).strict();

export const ChildBadgeCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChildBadgeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  badgeId: z.lazy(() => SortOrderSchema).optional(),
  awardedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildBadgeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChildBadgeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  badgeId: z.lazy(() => SortOrderSchema).optional(),
  awardedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildBadgeMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChildBadgeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  badgeId: z.lazy(() => SortOrderSchema).optional(),
  awardedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const ChildFeedbackCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildFeedbackAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackAvgOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildFeedbackMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildFeedbackMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  childId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChildFeedbackSumOrderByAggregateInputSchema: z.ZodType<Prisma.ChildFeedbackSumOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const PaymentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  paymentDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  paymentDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  paymentDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NotificationTag_NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationTag_NotificationListRelationFilter> = z.object({
  every: z.lazy(() => NotificationTag_NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationTag_NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationTag_NotificationWhereInputSchema).optional()
}).strict();

export const NotificationTag_NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationScalarRelationFilterSchema: z.ZodType<Prisma.NotificationScalarRelationFilter> = z.object({
  is: z.lazy(() => NotificationWhereInputSchema).optional(),
  isNot: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const NotificationTagScalarRelationFilterSchema: z.ZodType<Prisma.NotificationTagScalarRelationFilter> = z.object({
  is: z.lazy(() => NotificationTagWhereInputSchema).optional(),
  isNot: z.lazy(() => NotificationTagWhereInputSchema).optional()
}).strict();

export const NotificationTag_NotificationNotificationIdNotificationTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.NotificationTag_NotificationNotificationIdNotificationTagIdCompoundUniqueInput> = z.object({
  notificationId: z.string(),
  notificationTagId: z.string()
}).strict();

export const NotificationTag_NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  notificationTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationTag_NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  notificationTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationTag_NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationTag_NotificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  notificationTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationRecipientNotificationIdRecipientIdCompoundUniqueInputSchema: z.ZodType<Prisma.NotificationRecipientNotificationIdRecipientIdCompoundUniqueInput> = z.object({
  notificationId: z.string(),
  recipientId: z.string()
}).strict();

export const NotificationRecipientCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationRecipientCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationRecipientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationRecipientMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationRecipientMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationRecipientMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  notificationId: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MemberCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberCreateWithoutUserInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InvitationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.InvitationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationCreateWithoutUserInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TwoFactorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorCreateWithoutUserInputSchema).array(),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema),z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.ChildCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildCreateWithoutParentInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema),z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationCreateNestedManyWithoutSenderInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutSenderInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientCreateNestedManyWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientCreateNestedManyWithoutRecipientInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyRecipientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MemberUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberCreateWithoutUserInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InvitationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationCreateWithoutUserInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorCreateWithoutUserInputSchema).array(),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema),z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.ChildUncheckedCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildCreateWithoutParentInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema),z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedCreateNestedManyWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyRecipientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MemberUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MemberUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberCreateWithoutUserInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MemberUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InvitationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.InvitationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationCreateWithoutUserInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InvitationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InvitationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => InvitationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TwoFactorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TwoFactorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorCreateWithoutUserInputSchema).array(),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema),z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TwoFactorScalarWhereInputSchema),z.lazy(() => TwoFactorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.ChildUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildCreateWithoutParentInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema),z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ChildUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ChildUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => ChildUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUpdateManyWithoutSenderNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutSenderNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyWithoutRecipientNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyRecipientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutRecipientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MemberUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberCreateWithoutUserInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MemberUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InvitationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationCreateWithoutUserInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InvitationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InvitationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => InvitationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorCreateWithoutUserInputSchema).array(),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema),z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TwoFactorWhereUniqueInputSchema),z.lazy(() => TwoFactorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TwoFactorScalarWhereInputSchema),z.lazy(() => TwoFactorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildUncheckedUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildCreateWithoutParentInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema),z.lazy(() => ChildCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ChildUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ChildUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => ChildUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutRecipientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyRecipientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutRecipientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const MemberCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InvitationCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsCreateNestedOneWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional()
}).strict();

export const ClassCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildCreateNestedManyWithoutNurseryInputSchema: z.ZodType<Prisma.ChildCreateNestedManyWithoutNurseryInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildCreateWithoutNurseryInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema),z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyNurseryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateWithoutOrganizationInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional()
}).strict();

export const ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildUncheckedCreateNestedManyWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUncheckedCreateNestedManyWithoutNurseryInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildCreateWithoutNurseryInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema),z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyNurseryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateWithoutOrganizationInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MemberUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.MemberUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MemberUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MemberUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => MemberUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InvitationUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.InvitationUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => InvitationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => InvitationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => InvitationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateOneWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutOrganizationInputSchema).optional(),
  upsert: z.lazy(() => NurseryDetailsUpsertWithoutOrganizationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NurseryDetailsUpdateToOneWithWhereWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUpdateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutOrganizationInputSchema) ]).optional(),
}).strict();

export const ClassUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.ClassUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ClassUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ClassUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => ClassUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildUpdateManyWithoutNurseryNestedInputSchema: z.ZodType<Prisma.ChildUpdateManyWithoutNurseryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildCreateWithoutNurseryInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema),z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildUpsertWithWhereUniqueWithoutNurseryInputSchema),z.lazy(() => ChildUpsertWithWhereUniqueWithoutNurseryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyNurseryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildUpdateWithWhereUniqueWithoutNurseryInputSchema),z.lazy(() => ChildUpdateWithWhereUniqueWithoutNurseryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildUpdateManyWithWhereWithoutNurseryInputSchema),z.lazy(() => ChildUpdateManyWithWhereWithoutNurseryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateWithoutOrganizationInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MemberCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MemberUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MemberUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => MemberUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => InvitationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationWhereUniqueInputSchema),z.lazy(() => InvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => InvitationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => InvitationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutOrganizationInputSchema).optional(),
  upsert: z.lazy(() => NurseryDetailsUpsertWithoutOrganizationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NurseryDetailsUpdateToOneWithWhereWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUpdateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutOrganizationInputSchema) ]).optional(),
}).strict();

export const ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ClassCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ClassUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ClassUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => ClassUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateManyWithoutNurseryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildCreateWithoutNurseryInputSchema).array(),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema),z.lazy(() => ChildCreateOrConnectWithoutNurseryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildUpsertWithWhereUniqueWithoutNurseryInputSchema),z.lazy(() => ChildUpsertWithWhereUniqueWithoutNurseryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildCreateManyNurseryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildWhereUniqueInputSchema),z.lazy(() => ChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildUpdateWithWhereUniqueWithoutNurseryInputSchema),z.lazy(() => ChildUpdateWithWhereUniqueWithoutNurseryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildUpdateManyWithWhereWithoutNurseryInputSchema),z.lazy(() => ChildUpdateManyWithWhereWithoutNurseryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateWithoutOrganizationInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganizationCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutMembersInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMembersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMembersInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ClassCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.ClassCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassCreateWithoutTeacherInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutMemberInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClassUncheckedCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUncheckedCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassCreateWithoutTeacherInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutMemberInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutMembersInputSchema),z.lazy(() => OrganizationUpdateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMembersInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutMembersInputSchema),z.lazy(() => UserUpdateWithoutMembersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
}).strict();

export const ClassUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.ClassUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassCreateWithoutTeacherInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ClassUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ClassUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => ClassUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutMemberNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassCreateWithoutTeacherInputSchema).array(),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ClassCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ClassUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassWhereUniqueInputSchema),z.lazy(() => ClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ClassUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => ClassUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutMemberNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganizationCreateNestedOneWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutInvitationsInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutInvitationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationUpdateOneRequiredWithoutInvitationsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutInvitationsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutInvitationsInputSchema),z.lazy(() => OrganizationUpdateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutInvitationsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutInvitationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutInvitationsInputSchema),z.lazy(() => UserUpdateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitationsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTwofactorsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwofactorsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutTwofactorsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTwofactorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwofactorsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTwofactorsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTwofactorsInputSchema),z.lazy(() => UserUpdateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputSchema) ]).optional(),
}).strict();

export const NurseryDetailsCreateNestedOneWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsCreateNestedOneWithoutBankDetailsInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutBankDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutBankDetailsInputSchema).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional()
}).strict();

export const NurseryDetailsUpdateOneWithoutBankDetailsNestedInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateOneWithoutBankDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutBankDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NurseryDetailsCreateOrConnectWithoutBankDetailsInputSchema).optional(),
  upsert: z.lazy(() => NurseryDetailsUpsertWithoutBankDetailsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NurseryDetailsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NurseryDetailsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NurseryDetailsUpdateToOneWithWhereWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUpdateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutBankDetailsInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateNestedOneWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutNurseryDetailsInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const BankDetailsCreateNestedOneWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsCreateNestedOneWithoutNurseryDetailsInput> = z.object({
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankDetailsCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  connect: z.lazy(() => BankDetailsWhereUniqueInputSchema).optional()
}).strict();

export const BankDetailsUncheckedCreateNestedOneWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUncheckedCreateNestedOneWithoutNurseryDetailsInput> = z.object({
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankDetailsCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  connect: z.lazy(() => BankDetailsWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationUpdateOneRequiredWithoutNurseryDetailsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutNurseryDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutNurseryDetailsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutNurseryDetailsInputSchema) ]).optional(),
}).strict();

export const BankDetailsUpdateOneWithoutNurseryDetailsNestedInputSchema: z.ZodType<Prisma.BankDetailsUpdateOneWithoutNurseryDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankDetailsCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  upsert: z.lazy(() => BankDetailsUpsertWithoutNurseryDetailsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BankDetailsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BankDetailsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BankDetailsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BankDetailsUpdateToOneWithWhereWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedUpdateWithoutNurseryDetailsInputSchema) ]).optional(),
}).strict();

export const BankDetailsUncheckedUpdateOneWithoutNurseryDetailsNestedInputSchema: z.ZodType<Prisma.BankDetailsUncheckedUpdateOneWithoutNurseryDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankDetailsCreateOrConnectWithoutNurseryDetailsInputSchema).optional(),
  upsert: z.lazy(() => BankDetailsUpsertWithoutNurseryDetailsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BankDetailsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BankDetailsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BankDetailsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BankDetailsUpdateToOneWithWhereWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedUpdateWithoutNurseryDetailsInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateNestedOneWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutClassesInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutClassesInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const MemberCreateNestedOneWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutTeachingClassesInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedCreateWithoutTeachingClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutTeachingClassesInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export const ChildClassCreateNestedManyWithoutClassInputSchema: z.ZodType<Prisma.ChildClassCreateNestedManyWithoutClassInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassCreateWithoutClassInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyClassInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildClassUncheckedCreateNestedManyWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUncheckedCreateNestedManyWithoutClassInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassCreateWithoutClassInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyClassInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganizationUpdateOneRequiredWithoutClassesNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutClassesNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutClassesInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutClassesInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutClassesInputSchema),z.lazy(() => OrganizationUpdateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutClassesInputSchema) ]).optional(),
}).strict();

export const MemberUpdateOneRequiredWithoutTeachingClassesNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutTeachingClassesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedCreateWithoutTeachingClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutTeachingClassesInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutTeachingClassesInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutTeachingClassesInputSchema),z.lazy(() => MemberUpdateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutTeachingClassesInputSchema) ]).optional(),
}).strict();

export const ChildClassUpdateManyWithoutClassNestedInputSchema: z.ZodType<Prisma.ChildClassUpdateManyWithoutClassNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassCreateWithoutClassInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutClassInputSchema),z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutClassInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyClassInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutClassInputSchema),z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutClassInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildClassUpdateManyWithWhereWithoutClassInputSchema),z.lazy(() => ChildClassUpdateManyWithWhereWithoutClassInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildClassUncheckedUpdateManyWithoutClassNestedInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateManyWithoutClassNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassCreateWithoutClassInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutClassInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutClassInputSchema),z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutClassInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyClassInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutClassInputSchema),z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutClassInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildClassUpdateManyWithWhereWithoutClassInputSchema),z.lazy(() => ChildClassUpdateManyWithWhereWithoutClassInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildClassCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildClassCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassCreateWithoutChildInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const ChildBadgeCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateWithoutChildInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildClassUncheckedCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUncheckedCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassCreateWithoutChildInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateWithoutChildInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedCreateNestedManyWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyChildInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildClassUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildClassUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassCreateWithoutChildInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildClassUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildClassUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutChildrenNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutChildrenInputSchema),z.lazy(() => UserUpdateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict();

export const OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutChildrenInputSchema),z.lazy(() => OrganizationUpdateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict();

export const ChildBadgeUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildBadgeUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateWithoutChildInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassCreateWithoutChildInputSchema).array(),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildClassCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildClassUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildClassCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildClassWhereUniqueInputSchema),z.lazy(() => ChildClassWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildClassUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildClassUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildClassUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateWithoutChildInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateManyWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema).array(),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema),z.lazy(() => ChildFeedbackCreateOrConnectWithoutChildInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpsertWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildFeedbackCreateManyChildInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildFeedbackWhereUniqueInputSchema),z.lazy(() => ChildFeedbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpdateWithWhereUniqueWithoutChildInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutChildInputSchema),z.lazy(() => ChildFeedbackUpdateManyWithWhereWithoutChildInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildCreateNestedOneWithoutClassesInputSchema: z.ZodType<Prisma.ChildCreateNestedOneWithoutClassesInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutClassesInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional()
}).strict();

export const ClassCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.ClassCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => ClassWhereUniqueInputSchema).optional()
}).strict();

export const ChildUpdateOneRequiredWithoutClassesNestedInputSchema: z.ZodType<Prisma.ChildUpdateOneRequiredWithoutClassesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutClassesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutClassesInputSchema).optional(),
  upsert: z.lazy(() => ChildUpsertWithoutClassesInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChildUpdateToOneWithWhereWithoutClassesInputSchema),z.lazy(() => ChildUpdateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutClassesInputSchema) ]).optional(),
}).strict();

export const ClassUpdateOneRequiredWithoutChildrenNestedInputSchema: z.ZodType<Prisma.ClassUpdateOneRequiredWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassCreateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => ClassUpsertWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => ClassWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClassUpdateToOneWithWhereWithoutChildrenInputSchema),z.lazy(() => ClassUpdateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict();

export const ChildBadgeCreateNestedManyWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeCreateNestedManyWithoutBadgeInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyBadgeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildBadgeUncheckedCreateNestedManyWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedCreateNestedManyWithoutBadgeInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyBadgeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChildBadgeUpdateManyWithoutBadgeNestedInputSchema: z.ZodType<Prisma.ChildBadgeUpdateManyWithoutBadgeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutBadgeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyBadgeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutBadgeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutBadgeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildBadgeUncheckedUpdateManyWithoutBadgeNestedInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateManyWithoutBadgeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema).array(),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema),z.lazy(() => ChildBadgeCreateOrConnectWithoutBadgeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpsertWithWhereUniqueWithoutBadgeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChildBadgeCreateManyBadgeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChildBadgeWhereUniqueInputSchema),z.lazy(() => ChildBadgeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpdateWithWhereUniqueWithoutBadgeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUpdateManyWithWhereWithoutBadgeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChildCreateNestedOneWithoutBadgesInputSchema: z.ZodType<Prisma.ChildCreateNestedOneWithoutBadgesInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutBadgesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutBadgesInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional()
}).strict();

export const BadgeCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => BadgeCreateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BadgeCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => BadgeWhereUniqueInputSchema).optional()
}).strict();

export const ChildUpdateOneRequiredWithoutBadgesNestedInputSchema: z.ZodType<Prisma.ChildUpdateOneRequiredWithoutBadgesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutBadgesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutBadgesInputSchema).optional(),
  upsert: z.lazy(() => ChildUpsertWithoutBadgesInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChildUpdateToOneWithWhereWithoutBadgesInputSchema),z.lazy(() => ChildUpdateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutBadgesInputSchema) ]).optional(),
}).strict();

export const BadgeUpdateOneRequiredWithoutChildrenNestedInputSchema: z.ZodType<Prisma.BadgeUpdateOneRequiredWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => BadgeCreateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BadgeCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => BadgeUpsertWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => BadgeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BadgeUpdateToOneWithWhereWithoutChildrenInputSchema),z.lazy(() => BadgeUpdateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict();

export const ChildCreateNestedOneWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildCreateNestedOneWithoutFeedbacksInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedCreateWithoutFeedbacksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutFeedbacksInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional()
}).strict();

export const MemberCreateNestedOneWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutChildFeedbackInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedCreateWithoutChildFeedbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutChildFeedbackInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
  unset: z.boolean().optional()
}).strict();

export const ChildUpdateOneRequiredWithoutFeedbacksNestedInputSchema: z.ZodType<Prisma.ChildUpdateOneRequiredWithoutFeedbacksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChildCreateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedCreateWithoutFeedbacksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChildCreateOrConnectWithoutFeedbacksInputSchema).optional(),
  upsert: z.lazy(() => ChildUpsertWithoutFeedbacksInputSchema).optional(),
  connect: z.lazy(() => ChildWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChildUpdateToOneWithWhereWithoutFeedbacksInputSchema),z.lazy(() => ChildUpdateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutFeedbacksInputSchema) ]).optional(),
}).strict();

export const MemberUpdateOneRequiredWithoutChildFeedbackNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutChildFeedbackNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedCreateWithoutChildFeedbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutChildFeedbackInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutChildFeedbackInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutChildFeedbackInputSchema),z.lazy(() => MemberUpdateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutChildFeedbackInputSchema) ]).optional(),
}).strict();

export const MemberCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export const OrganizationUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => OrganizationUpdateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationCreateNestedManyWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateNestedManyWithoutNotificationTagInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationTagInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUpdateManyWithoutNotificationTagNestedInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyWithoutNotificationTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagNestedInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSentNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NotificationRecipientCreateNestedManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientCreateNestedManyWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyNotificationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationCreateNestedManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateNestedManyWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientUncheckedCreateNestedManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedCreateNestedManyWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyNotificationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutSentNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSentNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSentNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema),z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]).optional(),
}).strict();

export const NotificationRecipientUpdateManyWithoutNotificationNestedInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyNotificationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutNotificationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUpdateManyWithoutNotificationNestedInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationRecipientUncheckedUpdateManyWithoutNotificationNestedInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateManyWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationRecipientCreateManyNotificationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationRecipientWhereUniqueInputSchema),z.lazy(() => NotificationRecipientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUpdateManyWithWhereWithoutNotificationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationNestedInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema).array(),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.NotificationCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => NotificationWhereUniqueInputSchema).optional()
}).strict();

export const NotificationTagCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagCreateNestedOneWithoutNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTagCreateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationTagCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => NotificationTagWhereUniqueInputSchema).optional()
}).strict();

export const NotificationUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.NotificationUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => NotificationUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => NotificationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => NotificationUpdateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export const NotificationTagUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.NotificationTagUpdateOneRequiredWithoutNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTagCreateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationTagCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => NotificationTagUpsertWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => NotificationTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NotificationTagUpdateToOneWithWhereWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUpdateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateNestedOneWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationCreateNestedOneWithoutRecipientsInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutRecipientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationCreateOrConnectWithoutRecipientsInputSchema).optional(),
  connect: z.lazy(() => NotificationWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceivedNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NotificationUpdateOneRequiredWithoutRecipientsNestedInputSchema: z.ZodType<Prisma.NotificationUpdateOneRequiredWithoutRecipientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutRecipientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationCreateOrConnectWithoutRecipientsInputSchema).optional(),
  upsert: z.lazy(() => NotificationUpsertWithoutRecipientsInputSchema).optional(),
  connect: z.lazy(() => NotificationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateToOneWithWhereWithoutRecipientsInputSchema),z.lazy(() => NotificationUpdateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutRecipientsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReceivedNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
}).strict();

export const MemberCreateWithoutUserInputSchema: z.ZodType<Prisma.MemberCreateWithoutUserInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputSchema),
  teachingClasses: z.lazy(() => ClassCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  teachingClasses: z.lazy(() => ClassUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MemberCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MemberCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MemberCreateManyUserInputSchema),z.lazy(() => MemberCreateManyUserInputSchema).array() ]),
}).strict();

export const InvitationCreateWithoutUserInputSchema: z.ZodType<Prisma.InvitationCreateWithoutUserInput> = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputSchema)
}).strict();

export const InvitationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const InvitationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InvitationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.InvitationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvitationCreateManyUserInputSchema),z.lazy(() => InvitationCreateManyUserInputSchema).array() ]),
}).strict();

export const TwoFactorCreateWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorCreateWithoutUserInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();

export const TwoFactorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();

export const TwoFactorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TwoFactorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TwoFactorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TwoFactorCreateManyUserInputSchema),z.lazy(() => TwoFactorCreateManyUserInputSchema).array() ]),
}).strict();

export const ChildCreateWithoutParentInputSchema: z.ZodType<Prisma.ChildCreateWithoutParentInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classes: z.lazy(() => ChildClassCreateNestedManyWithoutChildInputSchema).optional(),
  nursery: z.lazy(() => OrganizationCreateNestedOneWithoutChildrenInputSchema),
  badges: z.lazy(() => ChildBadgeCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateWithoutParentInputSchema: z.ZodType<Prisma.ChildUncheckedCreateWithoutParentInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  nurseryId: z.string(),
  classes: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.ChildCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export const ChildCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.ChildCreateManyParentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildCreateManyParentInputSchema),z.lazy(() => ChildCreateManyParentInputSchema).array() ]),
}).strict();

export const NotificationCreateWithoutSenderInputSchema: z.ZodType<Prisma.NotificationCreateWithoutSenderInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => NotificationRecipientCreateNestedManyWithoutNotificationInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationUncheckedCreateWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutSenderInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutNotificationInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationCreateOrConnectWithoutSenderInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export const NotificationCreateManySenderInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManySenderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManySenderInputSchema),z.lazy(() => NotificationCreateManySenderInputSchema).array() ]),
}).strict();

export const NotificationRecipientCreateWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientCreateWithoutRecipientInput> = z.object({
  id: z.string().optional(),
  readAt: z.coerce.date().optional().nullable(),
  notification: z.lazy(() => NotificationCreateNestedOneWithoutRecipientsInputSchema)
}).strict();

export const NotificationRecipientUncheckedCreateWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedCreateWithoutRecipientInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const NotificationRecipientCreateOrConnectWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientCreateOrConnectWithoutRecipientInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema) ]),
}).strict();

export const NotificationRecipientCreateManyRecipientInputEnvelopeSchema: z.ZodType<Prisma.NotificationRecipientCreateManyRecipientInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationRecipientCreateManyRecipientInputSchema),z.lazy(() => NotificationRecipientCreateManyRecipientInputSchema).array() ]),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeOrganizationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  impersonatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MemberUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MemberUpdateWithoutUserInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutUserInputSchema),z.lazy(() => MemberUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MemberUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateWithoutUserInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MemberUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateManyMutationInputSchema),z.lazy(() => MemberUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const MemberScalarWhereInputSchema: z.ZodType<Prisma.MemberScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InvitationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvitationUpdateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationCreateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InvitationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvitationUpdateWithoutUserInputSchema),z.lazy(() => InvitationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const InvitationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => InvitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvitationUpdateManyMutationInputSchema),z.lazy(() => InvitationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const InvitationScalarWhereInputSchema: z.ZodType<Prisma.InvitationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationScalarWhereInputSchema),z.lazy(() => InvitationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  inviterId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const TwoFactorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TwoFactorUpdateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TwoFactorCreateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TwoFactorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TwoFactorUpdateWithoutUserInputSchema),z.lazy(() => TwoFactorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TwoFactorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TwoFactorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TwoFactorUpdateManyMutationInputSchema),z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TwoFactorScalarWhereInputSchema: z.ZodType<Prisma.TwoFactorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TwoFactorScalarWhereInputSchema),z.lazy(() => TwoFactorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TwoFactorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TwoFactorScalarWhereInputSchema),z.lazy(() => TwoFactorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  backupCodes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ChildUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ChildUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildUpdateWithoutParentInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => ChildCreateWithoutParentInputSchema),z.lazy(() => ChildUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export const ChildUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ChildUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildUpdateWithoutParentInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutParentInputSchema) ]),
}).strict();

export const ChildUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.ChildUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => ChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildUpdateManyMutationInputSchema),z.lazy(() => ChildUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict();

export const ChildScalarWhereInputSchema: z.ZodType<Prisma.ChildScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildScalarWhereInputSchema),z.lazy(() => ChildScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nurseryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationUpsertWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutSenderInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export const NotificationUpdateWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutSenderInputSchema) ]),
}).strict();

export const NotificationUpdateManyWithWhereWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderInputSchema) ]),
}).strict();

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUpsertWithWhereUniqueWithoutRecipientInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateWithoutRecipientInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutRecipientInputSchema) ]),
}).strict();

export const NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateWithWhereUniqueWithoutRecipientInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationRecipientUpdateWithoutRecipientInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateWithoutRecipientInputSchema) ]),
}).strict();

export const NotificationRecipientUpdateManyWithWhereWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyWithWhereWithoutRecipientInput> = z.object({
  where: z.lazy(() => NotificationRecipientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationRecipientUpdateManyMutationInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientInputSchema) ]),
}).strict();

export const NotificationRecipientScalarWhereInputSchema: z.ZodType<Prisma.NotificationRecipientScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationRecipientScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationRecipientScalarWhereInputSchema),z.lazy(() => NotificationRecipientScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const MemberCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberCreateWithoutOrganizationInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputSchema),
  teachingClasses: z.lazy(() => ClassCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  teachingClasses: z.lazy(() => ClassUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const MemberCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.MemberCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MemberCreateManyOrganizationInputSchema),z.lazy(() => MemberCreateManyOrganizationInputSchema).array() ]),
}).strict();

export const InvitationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationCreateWithoutOrganizationInput> = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutInvitationsInputSchema)
}).strict();

export const InvitationUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();

export const InvitationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const InvitationCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.InvitationCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvitationCreateManyOrganizationInputSchema),z.lazy(() => InvitationCreateManyOrganizationInputSchema).array() ]),
}).strict();

export const NurseryDetailsCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bankDetails: z.lazy(() => BankDetailsCreateNestedOneWithoutNurseryDetailsInputSchema).optional()
}).strict();

export const NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bankDetails: z.lazy(() => BankDetailsUncheckedCreateNestedOneWithoutNurseryDetailsInputSchema).optional()
}).strict();

export const NurseryDetailsCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => NurseryDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const ClassCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacher: z.lazy(() => MemberCreateNestedOneWithoutTeachingClassesInputSchema),
  children: z.lazy(() => ChildClassCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacherId: z.string(),
  children: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const ClassCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.ClassCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassCreateManyOrganizationInputSchema),z.lazy(() => ClassCreateManyOrganizationInputSchema).array() ]),
}).strict();

export const ChildCreateWithoutNurseryInputSchema: z.ZodType<Prisma.ChildCreateWithoutNurseryInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classes: z.lazy(() => ChildClassCreateNestedManyWithoutChildInputSchema).optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutChildrenInputSchema),
  badges: z.lazy(() => ChildBadgeCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUncheckedCreateWithoutNurseryInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  classes: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildCreateOrConnectWithoutNurseryInputSchema: z.ZodType<Prisma.ChildCreateOrConnectWithoutNurseryInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema) ]),
}).strict();

export const ChildCreateManyNurseryInputEnvelopeSchema: z.ZodType<Prisma.ChildCreateManyNurseryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildCreateManyNurseryInputSchema),z.lazy(() => ChildCreateManyNurseryInputSchema).array() ]),
}).strict();

export const PaymentCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutPaymentsInputSchema)
}).strict();

export const PaymentUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberId: z.string()
}).strict();

export const PaymentCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const PaymentCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyOrganizationInputSchema),z.lazy(() => PaymentCreateManyOrganizationInputSchema).array() ]),
}).strict();

export const MemberUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MemberUpdateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const MemberUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateWithoutOrganizationInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const MemberUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateManyMutationInputSchema),z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export const InvitationUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvitationUpdateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationCreateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const InvitationUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => InvitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvitationUpdateWithoutOrganizationInputSchema),z.lazy(() => InvitationUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const InvitationUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => InvitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvitationUpdateManyMutationInputSchema),z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export const NurseryDetailsUpsertWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUpsertWithoutOrganizationInput> = z.object({
  update: z.union([ z.lazy(() => NurseryDetailsUpdateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutOrganizationInputSchema) ]),
  where: z.lazy(() => NurseryDetailsWhereInputSchema).optional()
}).strict();

export const NurseryDetailsUpdateToOneWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateToOneWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => NurseryDetailsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NurseryDetailsUpdateWithoutOrganizationInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const NurseryDetailsUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateWithoutOrganizationInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bankDetails: z.lazy(() => BankDetailsUpdateOneWithoutNurseryDetailsNestedInputSchema).optional()
}).strict();

export const NurseryDetailsUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedUpdateWithoutOrganizationInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bankDetails: z.lazy(() => BankDetailsUncheckedUpdateOneWithoutNurseryDetailsNestedInputSchema).optional()
}).strict();

export const ClassUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassUpdateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => ClassCreateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const ClassUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassUpdateWithoutOrganizationInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const ClassUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ClassScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassUpdateManyMutationInputSchema),z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export const ClassScalarWhereInputSchema: z.ZodType<Prisma.ClassScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassScalarWhereInputSchema),z.lazy(() => ClassScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ChildUpsertWithWhereUniqueWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUpsertWithWhereUniqueWithoutNurseryInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildUpdateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutNurseryInputSchema) ]),
  create: z.union([ z.lazy(() => ChildCreateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedCreateWithoutNurseryInputSchema) ]),
}).strict();

export const ChildUpdateWithWhereUniqueWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUpdateWithWhereUniqueWithoutNurseryInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildUpdateWithoutNurseryInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutNurseryInputSchema) ]),
}).strict();

export const ChildUpdateManyWithWhereWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUpdateManyWithWhereWithoutNurseryInput> = z.object({
  where: z.lazy(() => ChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildUpdateManyMutationInputSchema),z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryInputSchema) ]),
}).strict();

export const PaymentUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const PaymentUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutOrganizationInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const PaymentUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export const PaymentScalarWhereInputSchema: z.ZodType<Prisma.PaymentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const OrganizationCreateWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutMembersInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutMembersInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export const UserCreateWithoutMembersInputSchema: z.ZodType<Prisma.UserCreateWithoutMembersInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMembersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMembersInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export const ClassCreateWithoutTeacherInputSchema: z.ZodType<Prisma.ClassCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutClassesInputSchema),
  children: z.lazy(() => ChildClassCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassUncheckedCreateWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUncheckedCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string(),
  children: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutClassInputSchema).optional()
}).strict();

export const ClassCreateOrConnectWithoutTeacherInputSchema: z.ZodType<Prisma.ClassCreateOrConnectWithoutTeacherInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const ClassCreateManyTeacherInputEnvelopeSchema: z.ZodType<Prisma.ClassCreateManyTeacherInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassCreateManyTeacherInputSchema),z.lazy(() => ClassCreateManyTeacherInputSchema).array() ]),
}).strict();

export const ChildFeedbackCreateWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutFeedbacksInputSchema)
}).strict();

export const ChildFeedbackUncheckedCreateWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  childId: z.string()
}).strict();

export const ChildFeedbackCreateOrConnectWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackCreateOrConnectWithoutTeacherInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const ChildFeedbackCreateManyTeacherInputEnvelopeSchema: z.ZodType<Prisma.ChildFeedbackCreateManyTeacherInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildFeedbackCreateManyTeacherInputSchema),z.lazy(() => ChildFeedbackCreateManyTeacherInputSchema).array() ]),
}).strict();

export const PaymentCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateWithoutMemberInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPaymentsInputSchema)
}).strict();

export const PaymentUncheckedCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutMemberInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string()
}).strict();

export const PaymentCreateOrConnectWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export const PaymentCreateManyMemberInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyMemberInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyMemberInputSchema),z.lazy(() => PaymentCreateManyMemberInputSchema).array() ]),
}).strict();

export const OrganizationUpsertWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutMembersInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutMembersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutMembersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutMembersInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutMembersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutMembersInputSchema: z.ZodType<Prisma.UserUpsertWithoutMembersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMembersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMembersInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutMembersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export const UserUpdateWithoutMembersInputSchema: z.ZodType<Prisma.UserUpdateWithoutMembersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMembersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMembersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const ClassUpsertWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUpsertWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassUpdateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => ClassCreateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const ClassUpdateWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUpdateWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassUpdateWithoutTeacherInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutTeacherInputSchema) ]),
}).strict();

export const ClassUpdateManyWithWhereWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUpdateManyWithWhereWithoutTeacherInput> = z.object({
  where: z.lazy(() => ClassScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassUpdateManyMutationInputSchema),z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherInputSchema) ]),
}).strict();

export const ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUpsertWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateWithoutTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildFeedbackUpdateWithoutTeacherInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateWithoutTeacherInputSchema) ]),
}).strict();

export const ChildFeedbackUpdateManyWithWhereWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyWithWhereWithoutTeacherInput> = z.object({
  where: z.lazy(() => ChildFeedbackScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildFeedbackUpdateManyMutationInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherInputSchema) ]),
}).strict();

export const ChildFeedbackScalarWhereInputSchema: z.ZodType<Prisma.ChildFeedbackScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildFeedbackScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildFeedbackScalarWhereInputSchema),z.lazy(() => ChildFeedbackScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PaymentUpsertWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export const PaymentUpdateWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
}).strict();

export const PaymentUpdateManyWithWhereWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberInputSchema) ]),
}).strict();

export const OrganizationCreateWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutInvitationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutInvitationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutInvitationsInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutInvitationsInputSchema) ]),
}).strict();

export const UserCreateWithoutInvitationsInputSchema: z.ZodType<Prisma.UserCreateWithoutInvitationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutInvitationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutInvitationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutInvitationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitationsInputSchema) ]),
}).strict();

export const OrganizationUpsertWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutInvitationsInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutInvitationsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutInvitationsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutInvitationsInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutInvitationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutInvitationsInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutInvitationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutInvitationsInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutInvitationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutInvitationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutInvitationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutInvitationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutInvitationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutInvitationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutInvitationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInvitationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserCreateWithoutTwofactorsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTwofactorsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTwofactorsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputSchema) ]),
}).strict();

export const UserUpsertWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserUpsertWithoutTwofactorsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTwofactorsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTwofactorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputSchema) ]),
}).strict();

export const UserUpdateWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTwofactorsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTwofactorsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTwofactorsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const NurseryDetailsCreateWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsCreateWithoutBankDetailsInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutNurseryDetailsInputSchema)
}).strict();

export const NurseryDetailsUncheckedCreateWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedCreateWithoutBankDetailsInput> = z.object({
  id: z.string().optional(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  themePrimaryColor: z.string().optional().nullable(),
  themeSecondaryColor: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string()
}).strict();

export const NurseryDetailsCreateOrConnectWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsCreateOrConnectWithoutBankDetailsInput> = z.object({
  where: z.lazy(() => NurseryDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutBankDetailsInputSchema) ]),
}).strict();

export const NurseryDetailsUpsertWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsUpsertWithoutBankDetailsInput> = z.object({
  update: z.union([ z.lazy(() => NurseryDetailsUpdateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutBankDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => NurseryDetailsCreateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedCreateWithoutBankDetailsInputSchema) ]),
  where: z.lazy(() => NurseryDetailsWhereInputSchema).optional()
}).strict();

export const NurseryDetailsUpdateToOneWithWhereWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateToOneWithWhereWithoutBankDetailsInput> = z.object({
  where: z.lazy(() => NurseryDetailsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NurseryDetailsUpdateWithoutBankDetailsInputSchema),z.lazy(() => NurseryDetailsUncheckedUpdateWithoutBankDetailsInputSchema) ]),
}).strict();

export const NurseryDetailsUpdateWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsUpdateWithoutBankDetailsInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutNurseryDetailsNestedInputSchema).optional()
}).strict();

export const NurseryDetailsUncheckedUpdateWithoutBankDetailsInputSchema: z.ZodType<Prisma.NurseryDetailsUncheckedUpdateWithoutBankDetailsInput> = z.object({
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themePrimaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  themeSecondaryColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutNurseryDetailsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutNurseryDetailsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutNurseryDetailsInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutNurseryDetailsInputSchema) ]),
}).strict();

export const BankDetailsCreateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsCreateWithoutNurseryDetailsInput> = z.object({
  id: z.string().optional(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUncheckedCreateWithoutNurseryDetailsInput> = z.object({
  id: z.string().optional(),
  bankName: z.string(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  currency: z.string(),
  branch: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BankDetailsCreateOrConnectWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsCreateOrConnectWithoutNurseryDetailsInput> = z.object({
  where: z.lazy(() => BankDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]),
}).strict();

export const OrganizationUpsertWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutNurseryDetailsInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutNurseryDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutNurseryDetailsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutNurseryDetailsInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutNurseryDetailsInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutNurseryDetailsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutNurseryDetailsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const BankDetailsUpsertWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUpsertWithoutNurseryDetailsInput> = z.object({
  update: z.union([ z.lazy(() => BankDetailsUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedUpdateWithoutNurseryDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => BankDetailsCreateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedCreateWithoutNurseryDetailsInputSchema) ]),
  where: z.lazy(() => BankDetailsWhereInputSchema).optional()
}).strict();

export const BankDetailsUpdateToOneWithWhereWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUpdateToOneWithWhereWithoutNurseryDetailsInput> = z.object({
  where: z.lazy(() => BankDetailsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BankDetailsUpdateWithoutNurseryDetailsInputSchema),z.lazy(() => BankDetailsUncheckedUpdateWithoutNurseryDetailsInputSchema) ]),
}).strict();

export const BankDetailsUpdateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUpdateWithoutNurseryDetailsInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BankDetailsUncheckedUpdateWithoutNurseryDetailsInputSchema: z.ZodType<Prisma.BankDetailsUncheckedUpdateWithoutNurseryDetailsInput> = z.object({
  bankName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountHolderName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  swiftCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutClassesInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutClassesInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutClassesInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutClassesInputSchema) ]),
}).strict();

export const MemberCreateWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberCreateWithoutTeachingClassesInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputSchema),
  ChildFeedback: z.lazy(() => ChildFeedbackCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUncheckedCreateWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutTeachingClassesInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberCreateOrConnectWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutTeachingClassesInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedCreateWithoutTeachingClassesInputSchema) ]),
}).strict();

export const ChildClassCreateWithoutClassInputSchema: z.ZodType<Prisma.ChildClassCreateWithoutClassInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutClassesInputSchema)
}).strict();

export const ChildClassUncheckedCreateWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUncheckedCreateWithoutClassInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildClassCreateOrConnectWithoutClassInputSchema: z.ZodType<Prisma.ChildClassCreateOrConnectWithoutClassInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema) ]),
}).strict();

export const ChildClassCreateManyClassInputEnvelopeSchema: z.ZodType<Prisma.ChildClassCreateManyClassInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildClassCreateManyClassInputSchema),z.lazy(() => ChildClassCreateManyClassInputSchema).array() ]),
}).strict();

export const OrganizationUpsertWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutClassesInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutClassesInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutClassesInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutClassesInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutClassesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutClassesInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutClassesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutClassesInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutClassesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const MemberUpsertWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberUpsertWithoutTeachingClassesInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutTeachingClassesInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedCreateWithoutTeachingClassesInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const MemberUpdateToOneWithWhereWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutTeachingClassesInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutTeachingClassesInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutTeachingClassesInputSchema) ]),
}).strict();

export const MemberUpdateWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberUpdateWithoutTeachingClassesInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateWithoutTeachingClassesInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutTeachingClassesInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const ChildClassUpsertWithWhereUniqueWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUpsertWithWhereUniqueWithoutClassInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildClassUpdateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedUpdateWithoutClassInputSchema) ]),
  create: z.union([ z.lazy(() => ChildClassCreateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutClassInputSchema) ]),
}).strict();

export const ChildClassUpdateWithWhereUniqueWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUpdateWithWhereUniqueWithoutClassInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildClassUpdateWithoutClassInputSchema),z.lazy(() => ChildClassUncheckedUpdateWithoutClassInputSchema) ]),
}).strict();

export const ChildClassUpdateManyWithWhereWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUpdateManyWithWhereWithoutClassInput> = z.object({
  where: z.lazy(() => ChildClassScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildClassUpdateManyMutationInputSchema),z.lazy(() => ChildClassUncheckedUpdateManyWithoutClassInputSchema) ]),
}).strict();

export const ChildClassScalarWhereInputSchema: z.ZodType<Prisma.ChildClassScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildClassScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildClassScalarWhereInputSchema),z.lazy(() => ChildClassScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChildClassCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildClassCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  class: z.lazy(() => ClassCreateNestedOneWithoutChildrenInputSchema)
}).strict();

export const ChildClassUncheckedCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUncheckedCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  classId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildClassCreateOrConnectWithoutChildInputSchema: z.ZodType<Prisma.ChildClassCreateOrConnectWithoutChildInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildClassCreateManyChildInputEnvelopeSchema: z.ZodType<Prisma.ChildClassCreateManyChildInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildClassCreateManyChildInputSchema),z.lazy(() => ChildClassCreateManyChildInputSchema).array() ]),
}).strict();

export const UserCreateWithoutChildrenInputSchema: z.ZodType<Prisma.UserCreateWithoutChildrenInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const OrganizationCreateWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutChildrenInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const ChildBadgeCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  awardedAt: z.coerce.date().optional(),
  badge: z.lazy(() => BadgeCreateNestedOneWithoutChildrenInputSchema)
}).strict();

export const ChildBadgeUncheckedCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  badgeId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeCreateOrConnectWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeCreateOrConnectWithoutChildInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildBadgeCreateManyChildInputEnvelopeSchema: z.ZodType<Prisma.ChildBadgeCreateManyChildInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildBadgeCreateManyChildInputSchema),z.lazy(() => ChildBadgeCreateManyChildInputSchema).array() ]),
}).strict();

export const ChildFeedbackCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacher: z.lazy(() => MemberCreateNestedOneWithoutChildFeedbackInputSchema)
}).strict();

export const ChildFeedbackUncheckedCreateWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedCreateWithoutChildInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacherId: z.string()
}).strict();

export const ChildFeedbackCreateOrConnectWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackCreateOrConnectWithoutChildInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildFeedbackCreateManyChildInputEnvelopeSchema: z.ZodType<Prisma.ChildFeedbackCreateManyChildInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildFeedbackCreateManyChildInputSchema),z.lazy(() => ChildFeedbackCreateManyChildInputSchema).array() ]),
}).strict();

export const ChildClassUpsertWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUpsertWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildClassUpdateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedUpdateWithoutChildInputSchema) ]),
  create: z.union([ z.lazy(() => ChildClassCreateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildClassUpdateWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUpdateWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildClassWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildClassUpdateWithoutChildInputSchema),z.lazy(() => ChildClassUncheckedUpdateWithoutChildInputSchema) ]),
}).strict();

export const ChildClassUpdateManyWithWhereWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUpdateManyWithWhereWithoutChildInput> = z.object({
  where: z.lazy(() => ChildClassScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildClassUpdateManyMutationInputSchema),z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildInputSchema) ]),
}).strict();

export const UserUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.UserUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutChildrenInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export const UserUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.UserUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const OrganizationUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutChildrenInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const ChildBadgeUpsertWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUpsertWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateWithoutChildInputSchema) ]),
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildBadgeUpdateWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUpdateWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildBadgeUpdateWithoutChildInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateWithoutChildInputSchema) ]),
}).strict();

export const ChildBadgeUpdateManyWithWhereWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUpdateManyWithWhereWithoutChildInput> = z.object({
  where: z.lazy(() => ChildBadgeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildBadgeUpdateManyMutationInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildInputSchema) ]),
}).strict();

export const ChildBadgeScalarWhereInputSchema: z.ZodType<Prisma.ChildBadgeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChildBadgeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChildBadgeScalarWhereInputSchema),z.lazy(() => ChildBadgeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  childId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  badgeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  awardedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChildFeedbackUpsertWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUpsertWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildFeedbackUpdateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateWithoutChildInputSchema) ]),
  create: z.union([ z.lazy(() => ChildFeedbackCreateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export const ChildFeedbackUpdateWithWhereUniqueWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateWithWhereUniqueWithoutChildInput> = z.object({
  where: z.lazy(() => ChildFeedbackWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildFeedbackUpdateWithoutChildInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateWithoutChildInputSchema) ]),
}).strict();

export const ChildFeedbackUpdateManyWithWhereWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyWithWhereWithoutChildInput> = z.object({
  where: z.lazy(() => ChildFeedbackScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildFeedbackUpdateManyMutationInputSchema),z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildInputSchema) ]),
}).strict();

export const ChildCreateWithoutClassesInputSchema: z.ZodType<Prisma.ChildCreateWithoutClassesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutChildrenInputSchema),
  nursery: z.lazy(() => OrganizationCreateNestedOneWithoutChildrenInputSchema),
  badges: z.lazy(() => ChildBadgeCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateWithoutClassesInputSchema: z.ZodType<Prisma.ChildUncheckedCreateWithoutClassesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  nurseryId: z.string(),
  badges: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildCreateOrConnectWithoutClassesInputSchema: z.ZodType<Prisma.ChildCreateOrConnectWithoutClassesInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildCreateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutClassesInputSchema) ]),
}).strict();

export const ClassCreateWithoutChildrenInputSchema: z.ZodType<Prisma.ClassCreateWithoutChildrenInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutClassesInputSchema),
  teacher: z.lazy(() => MemberCreateNestedOneWithoutTeachingClassesInputSchema)
}).strict();

export const ClassUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.ClassUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string(),
  teacherId: z.string()
}).strict();

export const ClassCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.ClassCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => ClassWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassCreateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const ChildUpsertWithoutClassesInputSchema: z.ZodType<Prisma.ChildUpsertWithoutClassesInput> = z.object({
  update: z.union([ z.lazy(() => ChildUpdateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutClassesInputSchema) ]),
  create: z.union([ z.lazy(() => ChildCreateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutClassesInputSchema) ]),
  where: z.lazy(() => ChildWhereInputSchema).optional()
}).strict();

export const ChildUpdateToOneWithWhereWithoutClassesInputSchema: z.ZodType<Prisma.ChildUpdateToOneWithWhereWithoutClassesInput> = z.object({
  where: z.lazy(() => ChildWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChildUpdateWithoutClassesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutClassesInputSchema) ]),
}).strict();

export const ChildUpdateWithoutClassesInputSchema: z.ZodType<Prisma.ChildUpdateWithoutClassesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  nursery: z.lazy(() => OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateWithoutClassesInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateWithoutClassesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ClassUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.ClassUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => ClassUpdateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => ClassCreateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => ClassWhereInputSchema).optional()
}).strict();

export const ClassUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.ClassUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => ClassWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClassUpdateWithoutChildrenInputSchema),z.lazy(() => ClassUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export const ClassUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.ClassUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutClassesNestedInputSchema).optional(),
  teacher: z.lazy(() => MemberUpdateOneRequiredWithoutTeachingClassesNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeCreateWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeCreateWithoutBadgeInput> = z.object({
  id: z.string().optional(),
  awardedAt: z.coerce.date().optional(),
  child: z.lazy(() => ChildCreateNestedOneWithoutBadgesInputSchema)
}).strict();

export const ChildBadgeUncheckedCreateWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedCreateWithoutBadgeInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeCreateOrConnectWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeCreateOrConnectWithoutBadgeInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema) ]),
}).strict();

export const ChildBadgeCreateManyBadgeInputEnvelopeSchema: z.ZodType<Prisma.ChildBadgeCreateManyBadgeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChildBadgeCreateManyBadgeInputSchema),z.lazy(() => ChildBadgeCreateManyBadgeInputSchema).array() ]),
}).strict();

export const ChildBadgeUpsertWithWhereUniqueWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUpsertWithWhereUniqueWithoutBadgeInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChildBadgeUpdateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateWithoutBadgeInputSchema) ]),
  create: z.union([ z.lazy(() => ChildBadgeCreateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedCreateWithoutBadgeInputSchema) ]),
}).strict();

export const ChildBadgeUpdateWithWhereUniqueWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUpdateWithWhereUniqueWithoutBadgeInput> = z.object({
  where: z.lazy(() => ChildBadgeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChildBadgeUpdateWithoutBadgeInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateWithoutBadgeInputSchema) ]),
}).strict();

export const ChildBadgeUpdateManyWithWhereWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUpdateManyWithWhereWithoutBadgeInput> = z.object({
  where: z.lazy(() => ChildBadgeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChildBadgeUpdateManyMutationInputSchema),z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutBadgeInputSchema) ]),
}).strict();

export const ChildCreateWithoutBadgesInputSchema: z.ZodType<Prisma.ChildCreateWithoutBadgesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classes: z.lazy(() => ChildClassCreateNestedManyWithoutChildInputSchema).optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutChildrenInputSchema),
  nursery: z.lazy(() => OrganizationCreateNestedOneWithoutChildrenInputSchema),
  feedbacks: z.lazy(() => ChildFeedbackCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateWithoutBadgesInputSchema: z.ZodType<Prisma.ChildUncheckedCreateWithoutBadgesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  nurseryId: z.string(),
  classes: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildCreateOrConnectWithoutBadgesInputSchema: z.ZodType<Prisma.ChildCreateOrConnectWithoutBadgesInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildCreateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutBadgesInputSchema) ]),
}).strict();

export const BadgeCreateWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeCreateWithoutChildrenInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BadgeUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BadgeCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => BadgeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BadgeCreateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const ChildUpsertWithoutBadgesInputSchema: z.ZodType<Prisma.ChildUpsertWithoutBadgesInput> = z.object({
  update: z.union([ z.lazy(() => ChildUpdateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutBadgesInputSchema) ]),
  create: z.union([ z.lazy(() => ChildCreateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedCreateWithoutBadgesInputSchema) ]),
  where: z.lazy(() => ChildWhereInputSchema).optional()
}).strict();

export const ChildUpdateToOneWithWhereWithoutBadgesInputSchema: z.ZodType<Prisma.ChildUpdateToOneWithWhereWithoutBadgesInput> = z.object({
  where: z.lazy(() => ChildWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChildUpdateWithoutBadgesInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutBadgesInputSchema) ]),
}).strict();

export const ChildUpdateWithoutBadgesInputSchema: z.ZodType<Prisma.ChildUpdateWithoutBadgesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUpdateManyWithoutChildNestedInputSchema).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  nursery: z.lazy(() => OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateWithoutBadgesInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateWithoutBadgesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const BadgeUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => BadgeUpdateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => BadgeCreateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => BadgeWhereInputSchema).optional()
}).strict();

export const BadgeUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => BadgeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BadgeUpdateWithoutChildrenInputSchema),z.lazy(() => BadgeUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export const BadgeUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BadgeUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.BadgeUncheckedUpdateWithoutChildrenInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildCreateWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildCreateWithoutFeedbacksInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classes: z.lazy(() => ChildClassCreateNestedManyWithoutChildInputSchema).optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutChildrenInputSchema),
  nursery: z.lazy(() => OrganizationCreateNestedOneWithoutChildrenInputSchema),
  badges: z.lazy(() => ChildBadgeCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildUncheckedCreateWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildUncheckedCreateWithoutFeedbacksInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string(),
  nurseryId: z.string(),
  classes: z.lazy(() => ChildClassUncheckedCreateNestedManyWithoutChildInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedCreateNestedManyWithoutChildInputSchema).optional()
}).strict();

export const ChildCreateOrConnectWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildCreateOrConnectWithoutFeedbacksInput> = z.object({
  where: z.lazy(() => ChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChildCreateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedCreateWithoutFeedbacksInputSchema) ]),
}).strict();

export const MemberCreateWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberCreateWithoutChildFeedbackInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputSchema),
  teachingClasses: z.lazy(() => ClassCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberUncheckedCreateWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutChildFeedbackInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  teachingClasses: z.lazy(() => ClassUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export const MemberCreateOrConnectWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutChildFeedbackInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedCreateWithoutChildFeedbackInputSchema) ]),
}).strict();

export const ChildUpsertWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildUpsertWithoutFeedbacksInput> = z.object({
  update: z.union([ z.lazy(() => ChildUpdateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutFeedbacksInputSchema) ]),
  create: z.union([ z.lazy(() => ChildCreateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedCreateWithoutFeedbacksInputSchema) ]),
  where: z.lazy(() => ChildWhereInputSchema).optional()
}).strict();

export const ChildUpdateToOneWithWhereWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildUpdateToOneWithWhereWithoutFeedbacksInput> = z.object({
  where: z.lazy(() => ChildWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChildUpdateWithoutFeedbacksInputSchema),z.lazy(() => ChildUncheckedUpdateWithoutFeedbacksInputSchema) ]),
}).strict();

export const ChildUpdateWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildUpdateWithoutFeedbacksInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUpdateManyWithoutChildNestedInputSchema).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  nursery: z.lazy(() => OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateWithoutFeedbacksInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateWithoutFeedbacksInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const MemberUpsertWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberUpsertWithoutChildFeedbackInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutChildFeedbackInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedCreateWithoutChildFeedbackInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const MemberUpdateToOneWithWhereWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutChildFeedbackInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutChildFeedbackInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutChildFeedbackInputSchema) ]),
}).strict();

export const MemberUpdateWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberUpdateWithoutChildFeedbackInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateWithoutChildFeedbackInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutChildFeedbackInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateWithoutPaymentsInput> = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputSchema),
  teachingClasses: z.lazy(() => ClassCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const MemberUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  teachingClasses: z.lazy(() => ClassUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const MemberCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export const OrganizationCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutPaymentsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutNurseryInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutNurseryInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export const MemberUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const MemberUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export const MemberUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpdateWithoutPaymentsInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutPaymentsInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const OrganizationUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutPaymentsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutNurseryNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  nurseryDetails: z.lazy(() => NurseryDetailsUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional(),
  classes: z.lazy(() => ClassUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutNurseryNestedInputSchema).optional()
}).strict();

export const NotificationTag_NotificationCreateWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateWithoutNotificationTagInput> = z.object({
  id: z.string().optional(),
  notification: z.lazy(() => NotificationCreateNestedOneWithoutTagsInputSchema)
}).strict();

export const NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string()
}).strict();

export const NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateOrConnectWithoutNotificationTagInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema) ]),
}).strict();

export const NotificationTag_NotificationCreateManyNotificationTagInputEnvelopeSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyNotificationTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationCreateManyNotificationTagInputSchema).array() ]),
}).strict();

export const NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationTagInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateWithoutNotificationTagInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationTagInputSchema) ]),
}).strict();

export const NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationTagInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithoutNotificationTagInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateWithoutNotificationTagInputSchema) ]),
}).strict();

export const NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationTagInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagInputSchema) ]),
}).strict();

export const NotificationTag_NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationTag_NotificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notificationTagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutSentNotificationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSentNotificationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSentNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]),
}).strict();

export const NotificationRecipientCreateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientCreateWithoutNotificationInput> = z.object({
  id: z.string().optional(),
  readAt: z.coerce.date().optional().nullable(),
  recipient: z.lazy(() => UserCreateNestedOneWithoutReceivedNotificationsInputSchema)
}).strict();

export const NotificationRecipientUncheckedCreateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedCreateWithoutNotificationInput> = z.object({
  id: z.string().optional(),
  recipientId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const NotificationRecipientCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationRecipientCreateManyNotificationInputEnvelopeSchema: z.ZodType<Prisma.NotificationRecipientCreateManyNotificationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationRecipientCreateManyNotificationInputSchema),z.lazy(() => NotificationRecipientCreateManyNotificationInputSchema).array() ]),
}).strict();

export const NotificationTag_NotificationCreateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateWithoutNotificationInput> = z.object({
  id: z.string().optional(),
  notificationTag: z.lazy(() => NotificationTagCreateNestedOneWithoutNotificationsInputSchema)
}).strict();

export const NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedCreateWithoutNotificationInput> = z.object({
  id: z.string().optional(),
  notificationTagId: z.string()
}).strict();

export const NotificationTag_NotificationCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationTag_NotificationCreateManyNotificationInputEnvelopeSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyNotificationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputSchema),z.lazy(() => NotificationTag_NotificationCreateManyNotificationInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSentNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSentNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSentNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSentNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUpsertWithWhereUniqueWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationRecipientUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationRecipientCreateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateWithWhereUniqueWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationRecipientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationRecipientUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationRecipientUpdateManyWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationRecipientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationRecipientUpdateManyMutationInputSchema),z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpsertWithWhereUniqueWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationTag_NotificationCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateWithWhereUniqueWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationTag_NotificationUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTag_NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationTag_NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationInputSchema) ]),
}).strict();

export const NotificationCreateWithoutTagsInputSchema: z.ZodType<Prisma.NotificationCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentNotificationsInputSchema),
  recipients: z.lazy(() => NotificationRecipientCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  senderId: z.string(),
  recipients: z.lazy(() => NotificationRecipientUncheckedCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const NotificationTagCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NotificationTagUncheckedCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagUncheckedCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NotificationTagCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagCreateOrConnectWithoutNotificationsInput> = z.object({
  where: z.lazy(() => NotificationTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationTagCreateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedCreateWithoutNotificationsInputSchema) ]),
}).strict();

export const NotificationUpsertWithoutTagsInputSchema: z.ZodType<Prisma.NotificationUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => NotificationUpdateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const NotificationUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.NotificationUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => NotificationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutTagsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export const NotificationUpdateWithoutTagsInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutTagsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutSentNotificationsNestedInputSchema).optional(),
  recipients: z.lazy(() => NotificationRecipientUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutTagsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationTagUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagUpsertWithoutNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => NotificationTagUpdateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationTagCreateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => NotificationTagWhereInputSchema).optional()
}).strict();

export const NotificationTagUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagUpdateToOneWithWhereWithoutNotificationsInput> = z.object({
  where: z.lazy(() => NotificationTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NotificationTagUpdateWithoutNotificationsInputSchema),z.lazy(() => NotificationTagUncheckedUpdateWithoutNotificationsInputSchema) ]),
}).strict();

export const NotificationTagUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagUpdateWithoutNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTagUncheckedUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.NotificationTagUncheckedUpdateWithoutNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationCreateWithoutRecipientsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentNotificationsInputSchema),
  tags: z.lazy(() => NotificationTag_NotificationCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationUncheckedCreateWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutRecipientsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  senderId: z.string(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedCreateNestedManyWithoutNotificationInputSchema).optional()
}).strict();

export const NotificationCreateOrConnectWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutRecipientsInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutRecipientsInputSchema) ]),
}).strict();

export const UserCreateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutReceivedNotificationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReceivedNotificationsInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceivedNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]),
}).strict();

export const NotificationUpsertWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationUpsertWithoutRecipientsInput> = z.object({
  update: z.union([ z.lazy(() => NotificationUpdateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutRecipientsInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutRecipientsInputSchema) ]),
  where: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const NotificationUpdateToOneWithWhereWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationUpdateToOneWithWhereWithoutRecipientsInput> = z.object({
  where: z.lazy(() => NotificationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutRecipientsInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutRecipientsInputSchema) ]),
}).strict();

export const NotificationUpdateWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutRecipientsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutSentNotificationsNestedInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateWithoutRecipientsInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutRecipientsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutReceivedNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReceivedNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutReceivedNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReceivedNotificationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  twoFactorEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banned: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banExpires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  children: z.lazy(() => ChildUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  activeOrganizationId: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export const MemberCreateManyUserInputSchema: z.ZodType<Prisma.MemberCreateManyUserInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date()
}).strict();

export const InvitationCreateManyUserInputSchema: z.ZodType<Prisma.InvitationCreateManyUserInput> = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const TwoFactorCreateManyUserInputSchema: z.ZodType<Prisma.TwoFactorCreateManyUserInput> = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();

export const ChildCreateManyParentInputSchema: z.ZodType<Prisma.ChildCreateManyParentInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  nurseryId: z.string()
}).strict();

export const NotificationCreateManySenderInputSchema: z.ZodType<Prisma.NotificationCreateManySenderInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NotificationRecipientCreateManyRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientCreateManyRecipientInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeOrganizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impersonatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberUpdateWithoutUserInputSchema: z.ZodType<Prisma.MemberUpdateWithoutUserInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutUserInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutUserInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationUpdateWithoutUserInputSchema: z.ZodType<Prisma.InvitationUpdateWithoutUserInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutInvitationsNestedInputSchema).optional()
}).strict();

export const InvitationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateWithoutUserInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutUserInput> = z.object({
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorUpdateWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUpdateWithoutUserInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateWithoutUserInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TwoFactorUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateManyWithoutUserInput> = z.object({
  secret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  backupCodes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildUpdateWithoutParentInputSchema: z.ZodType<Prisma.ChildUpdateWithoutParentInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUpdateManyWithoutChildNestedInputSchema).optional(),
  nursery: z.lazy(() => OrganizationUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateWithoutParentInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateWithoutParentInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateManyWithoutParentInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateManyWithoutParentInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nurseryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUpdateWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutSenderInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientUpdateManyWithoutNotificationNestedInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutSenderInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recipients: z.lazy(() => NotificationRecipientUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional(),
  tags: z.lazy(() => NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateManyWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutSenderInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationRecipientUpdateWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateWithoutRecipientInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notification: z.lazy(() => NotificationUpdateOneRequiredWithoutRecipientsNestedInputSchema).optional()
}).strict();

export const NotificationRecipientUncheckedUpdateWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateWithoutRecipientInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationRecipientUncheckedUpdateManyWithoutRecipientInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateManyWithoutRecipientInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MemberCreateManyOrganizationInputSchema: z.ZodType<Prisma.MemberCreateManyOrganizationInput> = z.object({
  id: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date()
}).strict();

export const InvitationCreateManyOrganizationInputSchema: z.ZodType<Prisma.InvitationCreateManyOrganizationInput> = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();

export const ClassCreateManyOrganizationInputSchema: z.ZodType<Prisma.ClassCreateManyOrganizationInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacherId: z.string()
}).strict();

export const ChildCreateManyNurseryInputSchema: z.ZodType<Prisma.ChildCreateManyNurseryInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentId: z.string()
}).strict();

export const PaymentCreateManyOrganizationInputSchema: z.ZodType<Prisma.PaymentCreateManyOrganizationInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberId: z.string()
}).strict();

export const MemberUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUpdateWithoutOrganizationInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  teachingClasses: z.lazy(() => ClassUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutOrganizationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teachingClasses: z.lazy(() => ClassUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  ChildFeedback: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateManyWithoutOrganizationInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutOrganizationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUpdateWithoutOrganizationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInvitationsNestedInputSchema).optional()
}).strict();

export const InvitationUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateWithoutOrganizationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  inviterId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InvitationUncheckedUpdateManyWithoutOrganizationInputSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutOrganizationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  inviterId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUpdateWithoutOrganizationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacher: z.lazy(() => MemberUpdateOneRequiredWithoutTeachingClassesNestedInputSchema).optional(),
  children: z.lazy(() => ChildClassUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateWithoutOrganizationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ChildClassUncheckedUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateManyWithoutOrganizationInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateManyWithoutOrganizationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildUpdateWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUpdateWithoutNurseryInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUpdateManyWithoutChildNestedInputSchema).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutChildrenNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateWithoutNurseryInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classes: z.lazy(() => ChildClassUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  badges: z.lazy(() => ChildBadgeUncheckedUpdateManyWithoutChildNestedInputSchema).optional(),
  feedbacks: z.lazy(() => ChildFeedbackUncheckedUpdateManyWithoutChildNestedInputSchema).optional()
}).strict();

export const ChildUncheckedUpdateManyWithoutNurseryInputSchema: z.ZodType<Prisma.ChildUncheckedUpdateManyWithoutNurseryInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutOrganizationInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutOrganizationInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutOrganizationInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutOrganizationInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassCreateManyTeacherInputSchema: z.ZodType<Prisma.ClassCreateManyTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string()
}).strict();

export const ChildFeedbackCreateManyTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackCreateManyTeacherInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  childId: z.string()
}).strict();

export const PaymentCreateManyMemberInputSchema: z.ZodType<Prisma.PaymentCreateManyMemberInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  status: z.string(),
  paymentMethod: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  paymentDate: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizationId: z.string()
}).strict();

export const ClassUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUpdateWithoutTeacherInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutClassesNestedInputSchema).optional(),
  children: z.lazy(() => ChildClassUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateWithoutTeacherInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ChildClassUncheckedUpdateManyWithoutClassNestedInputSchema).optional()
}).strict();

export const ClassUncheckedUpdateManyWithoutTeacherInputSchema: z.ZodType<Prisma.ClassUncheckedUpdateManyWithoutTeacherInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateWithoutTeacherInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutFeedbacksNestedInputSchema).optional()
}).strict();

export const ChildFeedbackUncheckedUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateWithoutTeacherInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackUncheckedUpdateManyWithoutTeacherInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateManyWithoutTeacherInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUpdateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutMemberInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutMemberInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutMemberInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paymentDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassCreateManyClassInputSchema: z.ZodType<Prisma.ChildClassCreateManyClassInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildClassUpdateWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUpdateWithoutClassInput> = z.object({
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutClassesNestedInputSchema).optional()
}).strict();

export const ChildClassUncheckedUpdateWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateWithoutClassInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassUncheckedUpdateManyWithoutClassInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateManyWithoutClassInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassCreateManyChildInputSchema: z.ZodType<Prisma.ChildClassCreateManyChildInput> = z.object({
  id: z.string().optional(),
  classId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeCreateManyChildInputSchema: z.ZodType<Prisma.ChildBadgeCreateManyChildInput> = z.object({
  id: z.string().optional(),
  badgeId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildFeedbackCreateManyChildInputSchema: z.ZodType<Prisma.ChildFeedbackCreateManyChildInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  rating: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teacherId: z.string()
}).strict();

export const ChildClassUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUpdateWithoutChildInput> = z.object({
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  class: z.lazy(() => ClassUpdateOneRequiredWithoutChildrenNestedInputSchema).optional()
}).strict();

export const ChildClassUncheckedUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateWithoutChildInput> = z.object({
  classId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildClassUncheckedUpdateManyWithoutChildInputSchema: z.ZodType<Prisma.ChildClassUncheckedUpdateManyWithoutChildInput> = z.object({
  classId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUpdateWithoutChildInput> = z.object({
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  badge: z.lazy(() => BadgeUpdateOneRequiredWithoutChildrenNestedInputSchema).optional()
}).strict();

export const ChildBadgeUncheckedUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateWithoutChildInput> = z.object({
  badgeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeUncheckedUpdateManyWithoutChildInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateManyWithoutChildInput> = z.object({
  badgeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUpdateWithoutChildInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacher: z.lazy(() => MemberUpdateOneRequiredWithoutChildFeedbackNestedInputSchema).optional()
}).strict();

export const ChildFeedbackUncheckedUpdateWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateWithoutChildInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildFeedbackUncheckedUpdateManyWithoutChildInputSchema: z.ZodType<Prisma.ChildFeedbackUncheckedUpdateManyWithoutChildInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeCreateManyBadgeInputSchema: z.ZodType<Prisma.ChildBadgeCreateManyBadgeInput> = z.object({
  id: z.string().optional(),
  childId: z.string(),
  awardedAt: z.coerce.date().optional()
}).strict();

export const ChildBadgeUpdateWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUpdateWithoutBadgeInput> = z.object({
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  child: z.lazy(() => ChildUpdateOneRequiredWithoutBadgesNestedInputSchema).optional()
}).strict();

export const ChildBadgeUncheckedUpdateWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateWithoutBadgeInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChildBadgeUncheckedUpdateManyWithoutBadgeInputSchema: z.ZodType<Prisma.ChildBadgeUncheckedUpdateManyWithoutBadgeInput> = z.object({
  childId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  awardedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationCreateManyNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyNotificationTagInput> = z.object({
  id: z.string().optional(),
  notificationId: z.string()
}).strict();

export const NotificationTag_NotificationUpdateWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateWithoutNotificationTagInput> = z.object({
  notification: z.lazy(() => NotificationUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export const NotificationTag_NotificationUncheckedUpdateWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateWithoutNotificationTagInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationTagInput> = z.object({
  notificationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationRecipientCreateManyNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientCreateManyNotificationInput> = z.object({
  id: z.string().optional(),
  recipientId: z.string(),
  readAt: z.coerce.date().optional().nullable()
}).strict();

export const NotificationTag_NotificationCreateManyNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyNotificationInput> = z.object({
  id: z.string().optional(),
  notificationTagId: z.string()
}).strict();

export const NotificationRecipientUpdateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUpdateWithoutNotificationInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient: z.lazy(() => UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationRecipientUncheckedUpdateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateWithoutNotificationInput> = z.object({
  recipientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationRecipientUncheckedUpdateManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationRecipientUncheckedUpdateManyWithoutNotificationInput> = z.object({
  recipientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationTag_NotificationUpdateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateWithoutNotificationInput> = z.object({
  notificationTag: z.lazy(() => NotificationTagUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationTag_NotificationUncheckedUpdateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateWithoutNotificationInput> = z.object({
  notificationTagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTag_NotificationUncheckedUpdateManyWithoutNotificationInput> = z.object({
  notificationTagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const VerificationFindFirstArgsSchema: z.ZodType<Prisma.VerificationFindFirstArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(),
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(),VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema,VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(),
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(),VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema,VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationFindManyArgsSchema: z.ZodType<Prisma.VerificationFindManyArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(),
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(),VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema,VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> = z.object({
  where: VerificationWhereInputSchema.optional(),
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(),VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationGroupByArgsSchema: z.ZodType<Prisma.VerificationGroupByArgs> = z.object({
  where: VerificationWhereInputSchema.optional(),
  orderBy: z.union([ VerificationOrderByWithAggregationInputSchema.array(),VerificationOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationScalarFieldEnumSchema.array(),
  having: VerificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationFindUniqueArgsSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema,
}).strict() ;

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationFindFirstArgsSchema: z.ZodType<Prisma.OrganizationFindFirstArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFindFirstOrThrowArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationFindManyArgsSchema: z.ZodType<Prisma.OrganizationFindManyArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationAggregateArgsSchema: z.ZodType<Prisma.OrganizationAggregateArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrganizationGroupByArgsSchema: z.ZodType<Prisma.OrganizationGroupByArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithAggregationInputSchema.array(),OrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: OrganizationScalarFieldEnumSchema.array(),
  having: OrganizationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrganizationFindUniqueArgsSchema: z.ZodType<Prisma.OrganizationFindUniqueArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFindUniqueOrThrowArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const MemberFindFirstArgsSchema: z.ZodType<Prisma.MemberFindFirstArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MemberFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MemberFindFirstOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MemberFindManyArgsSchema: z.ZodType<Prisma.MemberFindManyArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MemberAggregateArgsSchema: z.ZodType<Prisma.MemberAggregateArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MemberGroupByArgsSchema: z.ZodType<Prisma.MemberGroupByArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithAggregationInputSchema.array(),MemberOrderByWithAggregationInputSchema ]).optional(),
  by: MemberScalarFieldEnumSchema.array(),
  having: MemberScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MemberFindUniqueArgsSchema: z.ZodType<Prisma.MemberFindUniqueArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict() ;

export const MemberFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MemberFindUniqueOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict() ;

export const InvitationFindFirstArgsSchema: z.ZodType<Prisma.InvitationFindFirstArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereInputSchema.optional(),
  orderBy: z.union([ InvitationOrderByWithRelationInputSchema.array(),InvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvitationScalarFieldEnumSchema,InvitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InvitationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InvitationFindFirstOrThrowArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereInputSchema.optional(),
  orderBy: z.union([ InvitationOrderByWithRelationInputSchema.array(),InvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvitationScalarFieldEnumSchema,InvitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InvitationFindManyArgsSchema: z.ZodType<Prisma.InvitationFindManyArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereInputSchema.optional(),
  orderBy: z.union([ InvitationOrderByWithRelationInputSchema.array(),InvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvitationScalarFieldEnumSchema,InvitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InvitationAggregateArgsSchema: z.ZodType<Prisma.InvitationAggregateArgs> = z.object({
  where: InvitationWhereInputSchema.optional(),
  orderBy: z.union([ InvitationOrderByWithRelationInputSchema.array(),InvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InvitationGroupByArgsSchema: z.ZodType<Prisma.InvitationGroupByArgs> = z.object({
  where: InvitationWhereInputSchema.optional(),
  orderBy: z.union([ InvitationOrderByWithAggregationInputSchema.array(),InvitationOrderByWithAggregationInputSchema ]).optional(),
  by: InvitationScalarFieldEnumSchema.array(),
  having: InvitationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InvitationFindUniqueArgsSchema: z.ZodType<Prisma.InvitationFindUniqueArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereUniqueInputSchema,
}).strict() ;

export const InvitationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InvitationFindUniqueOrThrowArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereUniqueInputSchema,
}).strict() ;

export const TwoFactorFindFirstArgsSchema: z.ZodType<Prisma.TwoFactorFindFirstArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereInputSchema.optional(),
  orderBy: z.union([ TwoFactorOrderByWithRelationInputSchema.array(),TwoFactorOrderByWithRelationInputSchema ]).optional(),
  cursor: TwoFactorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TwoFactorScalarFieldEnumSchema,TwoFactorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TwoFactorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TwoFactorFindFirstOrThrowArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereInputSchema.optional(),
  orderBy: z.union([ TwoFactorOrderByWithRelationInputSchema.array(),TwoFactorOrderByWithRelationInputSchema ]).optional(),
  cursor: TwoFactorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TwoFactorScalarFieldEnumSchema,TwoFactorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TwoFactorFindManyArgsSchema: z.ZodType<Prisma.TwoFactorFindManyArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereInputSchema.optional(),
  orderBy: z.union([ TwoFactorOrderByWithRelationInputSchema.array(),TwoFactorOrderByWithRelationInputSchema ]).optional(),
  cursor: TwoFactorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TwoFactorScalarFieldEnumSchema,TwoFactorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TwoFactorAggregateArgsSchema: z.ZodType<Prisma.TwoFactorAggregateArgs> = z.object({
  where: TwoFactorWhereInputSchema.optional(),
  orderBy: z.union([ TwoFactorOrderByWithRelationInputSchema.array(),TwoFactorOrderByWithRelationInputSchema ]).optional(),
  cursor: TwoFactorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TwoFactorGroupByArgsSchema: z.ZodType<Prisma.TwoFactorGroupByArgs> = z.object({
  where: TwoFactorWhereInputSchema.optional(),
  orderBy: z.union([ TwoFactorOrderByWithAggregationInputSchema.array(),TwoFactorOrderByWithAggregationInputSchema ]).optional(),
  by: TwoFactorScalarFieldEnumSchema.array(),
  having: TwoFactorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TwoFactorFindUniqueArgsSchema: z.ZodType<Prisma.TwoFactorFindUniqueArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereUniqueInputSchema,
}).strict() ;

export const TwoFactorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TwoFactorFindUniqueOrThrowArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereUniqueInputSchema,
}).strict() ;

export const TasksFindFirstArgsSchema: z.ZodType<Prisma.TasksFindFirstArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereInputSchema.optional(),
  orderBy: z.union([ TasksOrderByWithRelationInputSchema.array(),TasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TasksScalarFieldEnumSchema,TasksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TasksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TasksFindFirstOrThrowArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereInputSchema.optional(),
  orderBy: z.union([ TasksOrderByWithRelationInputSchema.array(),TasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TasksScalarFieldEnumSchema,TasksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TasksFindManyArgsSchema: z.ZodType<Prisma.TasksFindManyArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereInputSchema.optional(),
  orderBy: z.union([ TasksOrderByWithRelationInputSchema.array(),TasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TasksScalarFieldEnumSchema,TasksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TasksAggregateArgsSchema: z.ZodType<Prisma.TasksAggregateArgs> = z.object({
  where: TasksWhereInputSchema.optional(),
  orderBy: z.union([ TasksOrderByWithRelationInputSchema.array(),TasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TasksGroupByArgsSchema: z.ZodType<Prisma.TasksGroupByArgs> = z.object({
  where: TasksWhereInputSchema.optional(),
  orderBy: z.union([ TasksOrderByWithAggregationInputSchema.array(),TasksOrderByWithAggregationInputSchema ]).optional(),
  by: TasksScalarFieldEnumSchema.array(),
  having: TasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TasksFindUniqueArgsSchema: z.ZodType<Prisma.TasksFindUniqueArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereUniqueInputSchema,
}).strict() ;

export const TasksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TasksFindUniqueOrThrowArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereUniqueInputSchema,
}).strict() ;

export const BankDetailsFindFirstArgsSchema: z.ZodType<Prisma.BankDetailsFindFirstArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereInputSchema.optional(),
  orderBy: z.union([ BankDetailsOrderByWithRelationInputSchema.array(),BankDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: BankDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankDetailsScalarFieldEnumSchema,BankDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BankDetailsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BankDetailsFindFirstOrThrowArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereInputSchema.optional(),
  orderBy: z.union([ BankDetailsOrderByWithRelationInputSchema.array(),BankDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: BankDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankDetailsScalarFieldEnumSchema,BankDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BankDetailsFindManyArgsSchema: z.ZodType<Prisma.BankDetailsFindManyArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereInputSchema.optional(),
  orderBy: z.union([ BankDetailsOrderByWithRelationInputSchema.array(),BankDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: BankDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankDetailsScalarFieldEnumSchema,BankDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BankDetailsAggregateArgsSchema: z.ZodType<Prisma.BankDetailsAggregateArgs> = z.object({
  where: BankDetailsWhereInputSchema.optional(),
  orderBy: z.union([ BankDetailsOrderByWithRelationInputSchema.array(),BankDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: BankDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BankDetailsGroupByArgsSchema: z.ZodType<Prisma.BankDetailsGroupByArgs> = z.object({
  where: BankDetailsWhereInputSchema.optional(),
  orderBy: z.union([ BankDetailsOrderByWithAggregationInputSchema.array(),BankDetailsOrderByWithAggregationInputSchema ]).optional(),
  by: BankDetailsScalarFieldEnumSchema.array(),
  having: BankDetailsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BankDetailsFindUniqueArgsSchema: z.ZodType<Prisma.BankDetailsFindUniqueArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereUniqueInputSchema,
}).strict() ;

export const BankDetailsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BankDetailsFindUniqueOrThrowArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereUniqueInputSchema,
}).strict() ;

export const NurseryDetailsFindFirstArgsSchema: z.ZodType<Prisma.NurseryDetailsFindFirstArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereInputSchema.optional(),
  orderBy: z.union([ NurseryDetailsOrderByWithRelationInputSchema.array(),NurseryDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: NurseryDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NurseryDetailsScalarFieldEnumSchema,NurseryDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NurseryDetailsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NurseryDetailsFindFirstOrThrowArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereInputSchema.optional(),
  orderBy: z.union([ NurseryDetailsOrderByWithRelationInputSchema.array(),NurseryDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: NurseryDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NurseryDetailsScalarFieldEnumSchema,NurseryDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NurseryDetailsFindManyArgsSchema: z.ZodType<Prisma.NurseryDetailsFindManyArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereInputSchema.optional(),
  orderBy: z.union([ NurseryDetailsOrderByWithRelationInputSchema.array(),NurseryDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: NurseryDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NurseryDetailsScalarFieldEnumSchema,NurseryDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NurseryDetailsAggregateArgsSchema: z.ZodType<Prisma.NurseryDetailsAggregateArgs> = z.object({
  where: NurseryDetailsWhereInputSchema.optional(),
  orderBy: z.union([ NurseryDetailsOrderByWithRelationInputSchema.array(),NurseryDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: NurseryDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NurseryDetailsGroupByArgsSchema: z.ZodType<Prisma.NurseryDetailsGroupByArgs> = z.object({
  where: NurseryDetailsWhereInputSchema.optional(),
  orderBy: z.union([ NurseryDetailsOrderByWithAggregationInputSchema.array(),NurseryDetailsOrderByWithAggregationInputSchema ]).optional(),
  by: NurseryDetailsScalarFieldEnumSchema.array(),
  having: NurseryDetailsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NurseryDetailsFindUniqueArgsSchema: z.ZodType<Prisma.NurseryDetailsFindUniqueArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereUniqueInputSchema,
}).strict() ;

export const NurseryDetailsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NurseryDetailsFindUniqueOrThrowArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereUniqueInputSchema,
}).strict() ;

export const ClassFindFirstArgsSchema: z.ZodType<Prisma.ClassFindFirstArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereInputSchema.optional(),
  orderBy: z.union([ ClassOrderByWithRelationInputSchema.array(),ClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassScalarFieldEnumSchema,ClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClassFindFirstOrThrowArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereInputSchema.optional(),
  orderBy: z.union([ ClassOrderByWithRelationInputSchema.array(),ClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassScalarFieldEnumSchema,ClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassFindManyArgsSchema: z.ZodType<Prisma.ClassFindManyArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereInputSchema.optional(),
  orderBy: z.union([ ClassOrderByWithRelationInputSchema.array(),ClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassScalarFieldEnumSchema,ClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassAggregateArgsSchema: z.ZodType<Prisma.ClassAggregateArgs> = z.object({
  where: ClassWhereInputSchema.optional(),
  orderBy: z.union([ ClassOrderByWithRelationInputSchema.array(),ClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClassGroupByArgsSchema: z.ZodType<Prisma.ClassGroupByArgs> = z.object({
  where: ClassWhereInputSchema.optional(),
  orderBy: z.union([ ClassOrderByWithAggregationInputSchema.array(),ClassOrderByWithAggregationInputSchema ]).optional(),
  by: ClassScalarFieldEnumSchema.array(),
  having: ClassScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClassFindUniqueArgsSchema: z.ZodType<Prisma.ClassFindUniqueArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereUniqueInputSchema,
}).strict() ;

export const ClassFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClassFindUniqueOrThrowArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereUniqueInputSchema,
}).strict() ;

export const ChildFindFirstArgsSchema: z.ZodType<Prisma.ChildFindFirstArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereInputSchema.optional(),
  orderBy: z.union([ ChildOrderByWithRelationInputSchema.array(),ChildOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildScalarFieldEnumSchema,ChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChildFindFirstOrThrowArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereInputSchema.optional(),
  orderBy: z.union([ ChildOrderByWithRelationInputSchema.array(),ChildOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildScalarFieldEnumSchema,ChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildFindManyArgsSchema: z.ZodType<Prisma.ChildFindManyArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereInputSchema.optional(),
  orderBy: z.union([ ChildOrderByWithRelationInputSchema.array(),ChildOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildScalarFieldEnumSchema,ChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildAggregateArgsSchema: z.ZodType<Prisma.ChildAggregateArgs> = z.object({
  where: ChildWhereInputSchema.optional(),
  orderBy: z.union([ ChildOrderByWithRelationInputSchema.array(),ChildOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildGroupByArgsSchema: z.ZodType<Prisma.ChildGroupByArgs> = z.object({
  where: ChildWhereInputSchema.optional(),
  orderBy: z.union([ ChildOrderByWithAggregationInputSchema.array(),ChildOrderByWithAggregationInputSchema ]).optional(),
  by: ChildScalarFieldEnumSchema.array(),
  having: ChildScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildFindUniqueArgsSchema: z.ZodType<Prisma.ChildFindUniqueArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereUniqueInputSchema,
}).strict() ;

export const ChildFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChildFindUniqueOrThrowArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereUniqueInputSchema,
}).strict() ;

export const ChildClassFindFirstArgsSchema: z.ZodType<Prisma.ChildClassFindFirstArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereInputSchema.optional(),
  orderBy: z.union([ ChildClassOrderByWithRelationInputSchema.array(),ChildClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildClassScalarFieldEnumSchema,ChildClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildClassFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChildClassFindFirstOrThrowArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereInputSchema.optional(),
  orderBy: z.union([ ChildClassOrderByWithRelationInputSchema.array(),ChildClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildClassScalarFieldEnumSchema,ChildClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildClassFindManyArgsSchema: z.ZodType<Prisma.ChildClassFindManyArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereInputSchema.optional(),
  orderBy: z.union([ ChildClassOrderByWithRelationInputSchema.array(),ChildClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildClassScalarFieldEnumSchema,ChildClassScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildClassAggregateArgsSchema: z.ZodType<Prisma.ChildClassAggregateArgs> = z.object({
  where: ChildClassWhereInputSchema.optional(),
  orderBy: z.union([ ChildClassOrderByWithRelationInputSchema.array(),ChildClassOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildClassWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildClassGroupByArgsSchema: z.ZodType<Prisma.ChildClassGroupByArgs> = z.object({
  where: ChildClassWhereInputSchema.optional(),
  orderBy: z.union([ ChildClassOrderByWithAggregationInputSchema.array(),ChildClassOrderByWithAggregationInputSchema ]).optional(),
  by: ChildClassScalarFieldEnumSchema.array(),
  having: ChildClassScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildClassFindUniqueArgsSchema: z.ZodType<Prisma.ChildClassFindUniqueArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereUniqueInputSchema,
}).strict() ;

export const ChildClassFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChildClassFindUniqueOrThrowArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereUniqueInputSchema,
}).strict() ;

export const BadgeFindFirstArgsSchema: z.ZodType<Prisma.BadgeFindFirstArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereInputSchema.optional(),
  orderBy: z.union([ BadgeOrderByWithRelationInputSchema.array(),BadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: BadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BadgeScalarFieldEnumSchema,BadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BadgeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BadgeFindFirstOrThrowArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereInputSchema.optional(),
  orderBy: z.union([ BadgeOrderByWithRelationInputSchema.array(),BadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: BadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BadgeScalarFieldEnumSchema,BadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BadgeFindManyArgsSchema: z.ZodType<Prisma.BadgeFindManyArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereInputSchema.optional(),
  orderBy: z.union([ BadgeOrderByWithRelationInputSchema.array(),BadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: BadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BadgeScalarFieldEnumSchema,BadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BadgeAggregateArgsSchema: z.ZodType<Prisma.BadgeAggregateArgs> = z.object({
  where: BadgeWhereInputSchema.optional(),
  orderBy: z.union([ BadgeOrderByWithRelationInputSchema.array(),BadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: BadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BadgeGroupByArgsSchema: z.ZodType<Prisma.BadgeGroupByArgs> = z.object({
  where: BadgeWhereInputSchema.optional(),
  orderBy: z.union([ BadgeOrderByWithAggregationInputSchema.array(),BadgeOrderByWithAggregationInputSchema ]).optional(),
  by: BadgeScalarFieldEnumSchema.array(),
  having: BadgeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BadgeFindUniqueArgsSchema: z.ZodType<Prisma.BadgeFindUniqueArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereUniqueInputSchema,
}).strict() ;

export const BadgeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BadgeFindUniqueOrThrowArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereUniqueInputSchema,
}).strict() ;

export const ChildBadgeFindFirstArgsSchema: z.ZodType<Prisma.ChildBadgeFindFirstArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereInputSchema.optional(),
  orderBy: z.union([ ChildBadgeOrderByWithRelationInputSchema.array(),ChildBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildBadgeScalarFieldEnumSchema,ChildBadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildBadgeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChildBadgeFindFirstOrThrowArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereInputSchema.optional(),
  orderBy: z.union([ ChildBadgeOrderByWithRelationInputSchema.array(),ChildBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildBadgeScalarFieldEnumSchema,ChildBadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildBadgeFindManyArgsSchema: z.ZodType<Prisma.ChildBadgeFindManyArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereInputSchema.optional(),
  orderBy: z.union([ ChildBadgeOrderByWithRelationInputSchema.array(),ChildBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildBadgeScalarFieldEnumSchema,ChildBadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildBadgeAggregateArgsSchema: z.ZodType<Prisma.ChildBadgeAggregateArgs> = z.object({
  where: ChildBadgeWhereInputSchema.optional(),
  orderBy: z.union([ ChildBadgeOrderByWithRelationInputSchema.array(),ChildBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildBadgeGroupByArgsSchema: z.ZodType<Prisma.ChildBadgeGroupByArgs> = z.object({
  where: ChildBadgeWhereInputSchema.optional(),
  orderBy: z.union([ ChildBadgeOrderByWithAggregationInputSchema.array(),ChildBadgeOrderByWithAggregationInputSchema ]).optional(),
  by: ChildBadgeScalarFieldEnumSchema.array(),
  having: ChildBadgeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildBadgeFindUniqueArgsSchema: z.ZodType<Prisma.ChildBadgeFindUniqueArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereUniqueInputSchema,
}).strict() ;

export const ChildBadgeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChildBadgeFindUniqueOrThrowArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereUniqueInputSchema,
}).strict() ;

export const ChildFeedbackFindFirstArgsSchema: z.ZodType<Prisma.ChildFeedbackFindFirstArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ ChildFeedbackOrderByWithRelationInputSchema.array(),ChildFeedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildFeedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildFeedbackScalarFieldEnumSchema,ChildFeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildFeedbackFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChildFeedbackFindFirstOrThrowArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ ChildFeedbackOrderByWithRelationInputSchema.array(),ChildFeedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildFeedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildFeedbackScalarFieldEnumSchema,ChildFeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildFeedbackFindManyArgsSchema: z.ZodType<Prisma.ChildFeedbackFindManyArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ ChildFeedbackOrderByWithRelationInputSchema.array(),ChildFeedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildFeedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChildFeedbackScalarFieldEnumSchema,ChildFeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChildFeedbackAggregateArgsSchema: z.ZodType<Prisma.ChildFeedbackAggregateArgs> = z.object({
  where: ChildFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ ChildFeedbackOrderByWithRelationInputSchema.array(),ChildFeedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: ChildFeedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildFeedbackGroupByArgsSchema: z.ZodType<Prisma.ChildFeedbackGroupByArgs> = z.object({
  where: ChildFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ ChildFeedbackOrderByWithAggregationInputSchema.array(),ChildFeedbackOrderByWithAggregationInputSchema ]).optional(),
  by: ChildFeedbackScalarFieldEnumSchema.array(),
  having: ChildFeedbackScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChildFeedbackFindUniqueArgsSchema: z.ZodType<Prisma.ChildFeedbackFindUniqueArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereUniqueInputSchema,
}).strict() ;

export const ChildFeedbackFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChildFeedbackFindUniqueOrThrowArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereUniqueInputSchema,
}).strict() ;

export const PaymentFindFirstArgsSchema: z.ZodType<Prisma.PaymentFindFirstArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindFirstOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentFindManyArgsSchema: z.ZodType<Prisma.PaymentFindManyArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentAggregateArgsSchema: z.ZodType<Prisma.PaymentAggregateArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentGroupByArgsSchema: z.ZodType<Prisma.PaymentGroupByArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithAggregationInputSchema.array(),PaymentOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentScalarFieldEnumSchema.array(),
  having: PaymentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentFindUniqueArgsSchema: z.ZodType<Prisma.PaymentFindUniqueArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindUniqueOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const NotificationTagFindFirstArgsSchema: z.ZodType<Prisma.NotificationTagFindFirstArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTagOrderByWithRelationInputSchema.array(),NotificationTagOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTagScalarFieldEnumSchema,NotificationTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationTagFindFirstOrThrowArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTagOrderByWithRelationInputSchema.array(),NotificationTagOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTagScalarFieldEnumSchema,NotificationTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTagFindManyArgsSchema: z.ZodType<Prisma.NotificationTagFindManyArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTagOrderByWithRelationInputSchema.array(),NotificationTagOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTagScalarFieldEnumSchema,NotificationTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTagAggregateArgsSchema: z.ZodType<Prisma.NotificationTagAggregateArgs> = z.object({
  where: NotificationTagWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTagOrderByWithRelationInputSchema.array(),NotificationTagOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationTagGroupByArgsSchema: z.ZodType<Prisma.NotificationTagGroupByArgs> = z.object({
  where: NotificationTagWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTagOrderByWithAggregationInputSchema.array(),NotificationTagOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationTagScalarFieldEnumSchema.array(),
  having: NotificationTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationTagFindUniqueArgsSchema: z.ZodType<Prisma.NotificationTagFindUniqueArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereUniqueInputSchema,
}).strict() ;

export const NotificationTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationTagFindUniqueOrThrowArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationFindFirstArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationFindManyArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationAggregateArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationGroupByArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithAggregationInputSchema.array(),NotificationOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationScalarFieldEnumSchema.array(),
  having: NotificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationTag_NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationFindFirstArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTag_NotificationOrderByWithRelationInputSchema.array(),NotificationTag_NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTag_NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTag_NotificationScalarFieldEnumSchema,NotificationTag_NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTag_NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationFindFirstOrThrowArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTag_NotificationOrderByWithRelationInputSchema.array(),NotificationTag_NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTag_NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTag_NotificationScalarFieldEnumSchema,NotificationTag_NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTag_NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationFindManyArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTag_NotificationOrderByWithRelationInputSchema.array(),NotificationTag_NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTag_NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationTag_NotificationScalarFieldEnumSchema,NotificationTag_NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationTag_NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationAggregateArgs> = z.object({
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTag_NotificationOrderByWithRelationInputSchema.array(),NotificationTag_NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTag_NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationTag_NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationGroupByArgs> = z.object({
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTag_NotificationOrderByWithAggregationInputSchema.array(),NotificationTag_NotificationOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationTag_NotificationScalarFieldEnumSchema.array(),
  having: NotificationTag_NotificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationTag_NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationFindUniqueArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationTag_NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationFindUniqueOrThrowArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationRecipientFindFirstArgsSchema: z.ZodType<Prisma.NotificationRecipientFindFirstArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereInputSchema.optional(),
  orderBy: z.union([ NotificationRecipientOrderByWithRelationInputSchema.array(),NotificationRecipientOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationRecipientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationRecipientScalarFieldEnumSchema,NotificationRecipientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationRecipientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationRecipientFindFirstOrThrowArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereInputSchema.optional(),
  orderBy: z.union([ NotificationRecipientOrderByWithRelationInputSchema.array(),NotificationRecipientOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationRecipientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationRecipientScalarFieldEnumSchema,NotificationRecipientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationRecipientFindManyArgsSchema: z.ZodType<Prisma.NotificationRecipientFindManyArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereInputSchema.optional(),
  orderBy: z.union([ NotificationRecipientOrderByWithRelationInputSchema.array(),NotificationRecipientOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationRecipientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationRecipientScalarFieldEnumSchema,NotificationRecipientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationRecipientAggregateArgsSchema: z.ZodType<Prisma.NotificationRecipientAggregateArgs> = z.object({
  where: NotificationRecipientWhereInputSchema.optional(),
  orderBy: z.union([ NotificationRecipientOrderByWithRelationInputSchema.array(),NotificationRecipientOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationRecipientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationRecipientGroupByArgsSchema: z.ZodType<Prisma.NotificationRecipientGroupByArgs> = z.object({
  where: NotificationRecipientWhereInputSchema.optional(),
  orderBy: z.union([ NotificationRecipientOrderByWithAggregationInputSchema.array(),NotificationRecipientOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationRecipientScalarFieldEnumSchema.array(),
  having: NotificationRecipientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationRecipientFindUniqueArgsSchema: z.ZodType<Prisma.NotificationRecipientFindUniqueArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereUniqueInputSchema,
}).strict() ;

export const NotificationRecipientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationRecipientFindUniqueOrThrowArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  data: z.union([ VerificationCreateInputSchema,VerificationUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema,
  create: z.union([ VerificationCreateInputSchema,VerificationUncheckedCreateInputSchema ]),
  update: z.union([ VerificationUpdateInputSchema,VerificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> = z.object({
  data: z.union([ VerificationCreateManyInputSchema,VerificationCreateManyInputSchema.array() ]),
}).strict() ;

export const VerificationDeleteArgsSchema: z.ZodType<Prisma.VerificationDeleteArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema,
}).strict() ;

export const VerificationUpdateArgsSchema: z.ZodType<Prisma.VerificationUpdateArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  data: z.union([ VerificationUpdateInputSchema,VerificationUncheckedUpdateInputSchema ]),
  where: VerificationWhereUniqueInputSchema,
}).strict() ;

export const VerificationUpdateManyArgsSchema: z.ZodType<Prisma.VerificationUpdateManyArgs> = z.object({
  data: z.union([ VerificationUpdateManyMutationInputSchema,VerificationUncheckedUpdateManyInputSchema ]),
  where: VerificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> = z.object({
  where: VerificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrganizationCreateArgsSchema: z.ZodType<Prisma.OrganizationCreateArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  data: z.union([ OrganizationCreateInputSchema,OrganizationUncheckedCreateInputSchema ]),
}).strict() ;

export const OrganizationUpsertArgsSchema: z.ZodType<Prisma.OrganizationUpsertArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
  create: z.union([ OrganizationCreateInputSchema,OrganizationUncheckedCreateInputSchema ]),
  update: z.union([ OrganizationUpdateInputSchema,OrganizationUncheckedUpdateInputSchema ]),
}).strict() ;

export const OrganizationCreateManyArgsSchema: z.ZodType<Prisma.OrganizationCreateManyArgs> = z.object({
  data: z.union([ OrganizationCreateManyInputSchema,OrganizationCreateManyInputSchema.array() ]),
}).strict() ;

export const OrganizationDeleteArgsSchema: z.ZodType<Prisma.OrganizationDeleteArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationUpdateArgsSchema: z.ZodType<Prisma.OrganizationUpdateArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  data: z.union([ OrganizationUpdateInputSchema,OrganizationUncheckedUpdateInputSchema ]),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationUpdateManyArgsSchema: z.ZodType<Prisma.OrganizationUpdateManyArgs> = z.object({
  data: z.union([ OrganizationUpdateManyMutationInputSchema,OrganizationUncheckedUpdateManyInputSchema ]),
  where: OrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrganizationDeleteManyArgsSchema: z.ZodType<Prisma.OrganizationDeleteManyArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MemberCreateArgsSchema: z.ZodType<Prisma.MemberCreateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
}).strict() ;

export const MemberUpsertArgsSchema: z.ZodType<Prisma.MemberUpsertArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
  create: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
  update: z.union([ MemberUpdateInputSchema,MemberUncheckedUpdateInputSchema ]),
}).strict() ;

export const MemberCreateManyArgsSchema: z.ZodType<Prisma.MemberCreateManyArgs> = z.object({
  data: z.union([ MemberCreateManyInputSchema,MemberCreateManyInputSchema.array() ]),
}).strict() ;

export const MemberDeleteArgsSchema: z.ZodType<Prisma.MemberDeleteArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict() ;

export const MemberUpdateArgsSchema: z.ZodType<Prisma.MemberUpdateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberUpdateInputSchema,MemberUncheckedUpdateInputSchema ]),
  where: MemberWhereUniqueInputSchema,
}).strict() ;

export const MemberUpdateManyArgsSchema: z.ZodType<Prisma.MemberUpdateManyArgs> = z.object({
  data: z.union([ MemberUpdateManyMutationInputSchema,MemberUncheckedUpdateManyInputSchema ]),
  where: MemberWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MemberDeleteManyArgsSchema: z.ZodType<Prisma.MemberDeleteManyArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InvitationCreateArgsSchema: z.ZodType<Prisma.InvitationCreateArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  data: z.union([ InvitationCreateInputSchema,InvitationUncheckedCreateInputSchema ]),
}).strict() ;

export const InvitationUpsertArgsSchema: z.ZodType<Prisma.InvitationUpsertArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereUniqueInputSchema,
  create: z.union([ InvitationCreateInputSchema,InvitationUncheckedCreateInputSchema ]),
  update: z.union([ InvitationUpdateInputSchema,InvitationUncheckedUpdateInputSchema ]),
}).strict() ;

export const InvitationCreateManyArgsSchema: z.ZodType<Prisma.InvitationCreateManyArgs> = z.object({
  data: z.union([ InvitationCreateManyInputSchema,InvitationCreateManyInputSchema.array() ]),
}).strict() ;

export const InvitationDeleteArgsSchema: z.ZodType<Prisma.InvitationDeleteArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  where: InvitationWhereUniqueInputSchema,
}).strict() ;

export const InvitationUpdateArgsSchema: z.ZodType<Prisma.InvitationUpdateArgs> = z.object({
  select: InvitationSelectSchema.optional(),
  include: InvitationIncludeSchema.optional(),
  data: z.union([ InvitationUpdateInputSchema,InvitationUncheckedUpdateInputSchema ]),
  where: InvitationWhereUniqueInputSchema,
}).strict() ;

export const InvitationUpdateManyArgsSchema: z.ZodType<Prisma.InvitationUpdateManyArgs> = z.object({
  data: z.union([ InvitationUpdateManyMutationInputSchema,InvitationUncheckedUpdateManyInputSchema ]),
  where: InvitationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InvitationDeleteManyArgsSchema: z.ZodType<Prisma.InvitationDeleteManyArgs> = z.object({
  where: InvitationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TwoFactorCreateArgsSchema: z.ZodType<Prisma.TwoFactorCreateArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  data: z.union([ TwoFactorCreateInputSchema,TwoFactorUncheckedCreateInputSchema ]),
}).strict() ;

export const TwoFactorUpsertArgsSchema: z.ZodType<Prisma.TwoFactorUpsertArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereUniqueInputSchema,
  create: z.union([ TwoFactorCreateInputSchema,TwoFactorUncheckedCreateInputSchema ]),
  update: z.union([ TwoFactorUpdateInputSchema,TwoFactorUncheckedUpdateInputSchema ]),
}).strict() ;

export const TwoFactorCreateManyArgsSchema: z.ZodType<Prisma.TwoFactorCreateManyArgs> = z.object({
  data: z.union([ TwoFactorCreateManyInputSchema,TwoFactorCreateManyInputSchema.array() ]),
}).strict() ;

export const TwoFactorDeleteArgsSchema: z.ZodType<Prisma.TwoFactorDeleteArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  where: TwoFactorWhereUniqueInputSchema,
}).strict() ;

export const TwoFactorUpdateArgsSchema: z.ZodType<Prisma.TwoFactorUpdateArgs> = z.object({
  select: TwoFactorSelectSchema.optional(),
  include: TwoFactorIncludeSchema.optional(),
  data: z.union([ TwoFactorUpdateInputSchema,TwoFactorUncheckedUpdateInputSchema ]),
  where: TwoFactorWhereUniqueInputSchema,
}).strict() ;

export const TwoFactorUpdateManyArgsSchema: z.ZodType<Prisma.TwoFactorUpdateManyArgs> = z.object({
  data: z.union([ TwoFactorUpdateManyMutationInputSchema,TwoFactorUncheckedUpdateManyInputSchema ]),
  where: TwoFactorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TwoFactorDeleteManyArgsSchema: z.ZodType<Prisma.TwoFactorDeleteManyArgs> = z.object({
  where: TwoFactorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TasksCreateArgsSchema: z.ZodType<Prisma.TasksCreateArgs> = z.object({
  select: TasksSelectSchema.optional(),
  data: z.union([ TasksCreateInputSchema,TasksUncheckedCreateInputSchema ]),
}).strict() ;

export const TasksUpsertArgsSchema: z.ZodType<Prisma.TasksUpsertArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereUniqueInputSchema,
  create: z.union([ TasksCreateInputSchema,TasksUncheckedCreateInputSchema ]),
  update: z.union([ TasksUpdateInputSchema,TasksUncheckedUpdateInputSchema ]),
}).strict() ;

export const TasksCreateManyArgsSchema: z.ZodType<Prisma.TasksCreateManyArgs> = z.object({
  data: z.union([ TasksCreateManyInputSchema,TasksCreateManyInputSchema.array() ]),
}).strict() ;

export const TasksDeleteArgsSchema: z.ZodType<Prisma.TasksDeleteArgs> = z.object({
  select: TasksSelectSchema.optional(),
  where: TasksWhereUniqueInputSchema,
}).strict() ;

export const TasksUpdateArgsSchema: z.ZodType<Prisma.TasksUpdateArgs> = z.object({
  select: TasksSelectSchema.optional(),
  data: z.union([ TasksUpdateInputSchema,TasksUncheckedUpdateInputSchema ]),
  where: TasksWhereUniqueInputSchema,
}).strict() ;

export const TasksUpdateManyArgsSchema: z.ZodType<Prisma.TasksUpdateManyArgs> = z.object({
  data: z.union([ TasksUpdateManyMutationInputSchema,TasksUncheckedUpdateManyInputSchema ]),
  where: TasksWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TasksDeleteManyArgsSchema: z.ZodType<Prisma.TasksDeleteManyArgs> = z.object({
  where: TasksWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BankDetailsCreateArgsSchema: z.ZodType<Prisma.BankDetailsCreateArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  data: z.union([ BankDetailsCreateInputSchema,BankDetailsUncheckedCreateInputSchema ]),
}).strict() ;

export const BankDetailsUpsertArgsSchema: z.ZodType<Prisma.BankDetailsUpsertArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereUniqueInputSchema,
  create: z.union([ BankDetailsCreateInputSchema,BankDetailsUncheckedCreateInputSchema ]),
  update: z.union([ BankDetailsUpdateInputSchema,BankDetailsUncheckedUpdateInputSchema ]),
}).strict() ;

export const BankDetailsCreateManyArgsSchema: z.ZodType<Prisma.BankDetailsCreateManyArgs> = z.object({
  data: z.union([ BankDetailsCreateManyInputSchema,BankDetailsCreateManyInputSchema.array() ]),
}).strict() ;

export const BankDetailsDeleteArgsSchema: z.ZodType<Prisma.BankDetailsDeleteArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  where: BankDetailsWhereUniqueInputSchema,
}).strict() ;

export const BankDetailsUpdateArgsSchema: z.ZodType<Prisma.BankDetailsUpdateArgs> = z.object({
  select: BankDetailsSelectSchema.optional(),
  include: BankDetailsIncludeSchema.optional(),
  data: z.union([ BankDetailsUpdateInputSchema,BankDetailsUncheckedUpdateInputSchema ]),
  where: BankDetailsWhereUniqueInputSchema,
}).strict() ;

export const BankDetailsUpdateManyArgsSchema: z.ZodType<Prisma.BankDetailsUpdateManyArgs> = z.object({
  data: z.union([ BankDetailsUpdateManyMutationInputSchema,BankDetailsUncheckedUpdateManyInputSchema ]),
  where: BankDetailsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BankDetailsDeleteManyArgsSchema: z.ZodType<Prisma.BankDetailsDeleteManyArgs> = z.object({
  where: BankDetailsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NurseryDetailsCreateArgsSchema: z.ZodType<Prisma.NurseryDetailsCreateArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  data: z.union([ NurseryDetailsCreateInputSchema,NurseryDetailsUncheckedCreateInputSchema ]),
}).strict() ;

export const NurseryDetailsUpsertArgsSchema: z.ZodType<Prisma.NurseryDetailsUpsertArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereUniqueInputSchema,
  create: z.union([ NurseryDetailsCreateInputSchema,NurseryDetailsUncheckedCreateInputSchema ]),
  update: z.union([ NurseryDetailsUpdateInputSchema,NurseryDetailsUncheckedUpdateInputSchema ]),
}).strict() ;

export const NurseryDetailsCreateManyArgsSchema: z.ZodType<Prisma.NurseryDetailsCreateManyArgs> = z.object({
  data: z.union([ NurseryDetailsCreateManyInputSchema,NurseryDetailsCreateManyInputSchema.array() ]),
}).strict() ;

export const NurseryDetailsDeleteArgsSchema: z.ZodType<Prisma.NurseryDetailsDeleteArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  where: NurseryDetailsWhereUniqueInputSchema,
}).strict() ;

export const NurseryDetailsUpdateArgsSchema: z.ZodType<Prisma.NurseryDetailsUpdateArgs> = z.object({
  select: NurseryDetailsSelectSchema.optional(),
  include: NurseryDetailsIncludeSchema.optional(),
  data: z.union([ NurseryDetailsUpdateInputSchema,NurseryDetailsUncheckedUpdateInputSchema ]),
  where: NurseryDetailsWhereUniqueInputSchema,
}).strict() ;

export const NurseryDetailsUpdateManyArgsSchema: z.ZodType<Prisma.NurseryDetailsUpdateManyArgs> = z.object({
  data: z.union([ NurseryDetailsUpdateManyMutationInputSchema,NurseryDetailsUncheckedUpdateManyInputSchema ]),
  where: NurseryDetailsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NurseryDetailsDeleteManyArgsSchema: z.ZodType<Prisma.NurseryDetailsDeleteManyArgs> = z.object({
  where: NurseryDetailsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClassCreateArgsSchema: z.ZodType<Prisma.ClassCreateArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  data: z.union([ ClassCreateInputSchema,ClassUncheckedCreateInputSchema ]),
}).strict() ;

export const ClassUpsertArgsSchema: z.ZodType<Prisma.ClassUpsertArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereUniqueInputSchema,
  create: z.union([ ClassCreateInputSchema,ClassUncheckedCreateInputSchema ]),
  update: z.union([ ClassUpdateInputSchema,ClassUncheckedUpdateInputSchema ]),
}).strict() ;

export const ClassCreateManyArgsSchema: z.ZodType<Prisma.ClassCreateManyArgs> = z.object({
  data: z.union([ ClassCreateManyInputSchema,ClassCreateManyInputSchema.array() ]),
}).strict() ;

export const ClassDeleteArgsSchema: z.ZodType<Prisma.ClassDeleteArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  where: ClassWhereUniqueInputSchema,
}).strict() ;

export const ClassUpdateArgsSchema: z.ZodType<Prisma.ClassUpdateArgs> = z.object({
  select: ClassSelectSchema.optional(),
  include: ClassIncludeSchema.optional(),
  data: z.union([ ClassUpdateInputSchema,ClassUncheckedUpdateInputSchema ]),
  where: ClassWhereUniqueInputSchema,
}).strict() ;

export const ClassUpdateManyArgsSchema: z.ZodType<Prisma.ClassUpdateManyArgs> = z.object({
  data: z.union([ ClassUpdateManyMutationInputSchema,ClassUncheckedUpdateManyInputSchema ]),
  where: ClassWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClassDeleteManyArgsSchema: z.ZodType<Prisma.ClassDeleteManyArgs> = z.object({
  where: ClassWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildCreateArgsSchema: z.ZodType<Prisma.ChildCreateArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  data: z.union([ ChildCreateInputSchema,ChildUncheckedCreateInputSchema ]),
}).strict() ;

export const ChildUpsertArgsSchema: z.ZodType<Prisma.ChildUpsertArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereUniqueInputSchema,
  create: z.union([ ChildCreateInputSchema,ChildUncheckedCreateInputSchema ]),
  update: z.union([ ChildUpdateInputSchema,ChildUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChildCreateManyArgsSchema: z.ZodType<Prisma.ChildCreateManyArgs> = z.object({
  data: z.union([ ChildCreateManyInputSchema,ChildCreateManyInputSchema.array() ]),
}).strict() ;

export const ChildDeleteArgsSchema: z.ZodType<Prisma.ChildDeleteArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  where: ChildWhereUniqueInputSchema,
}).strict() ;

export const ChildUpdateArgsSchema: z.ZodType<Prisma.ChildUpdateArgs> = z.object({
  select: ChildSelectSchema.optional(),
  include: ChildIncludeSchema.optional(),
  data: z.union([ ChildUpdateInputSchema,ChildUncheckedUpdateInputSchema ]),
  where: ChildWhereUniqueInputSchema,
}).strict() ;

export const ChildUpdateManyArgsSchema: z.ZodType<Prisma.ChildUpdateManyArgs> = z.object({
  data: z.union([ ChildUpdateManyMutationInputSchema,ChildUncheckedUpdateManyInputSchema ]),
  where: ChildWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildDeleteManyArgsSchema: z.ZodType<Prisma.ChildDeleteManyArgs> = z.object({
  where: ChildWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildClassCreateArgsSchema: z.ZodType<Prisma.ChildClassCreateArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  data: z.union([ ChildClassCreateInputSchema,ChildClassUncheckedCreateInputSchema ]),
}).strict() ;

export const ChildClassUpsertArgsSchema: z.ZodType<Prisma.ChildClassUpsertArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereUniqueInputSchema,
  create: z.union([ ChildClassCreateInputSchema,ChildClassUncheckedCreateInputSchema ]),
  update: z.union([ ChildClassUpdateInputSchema,ChildClassUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChildClassCreateManyArgsSchema: z.ZodType<Prisma.ChildClassCreateManyArgs> = z.object({
  data: z.union([ ChildClassCreateManyInputSchema,ChildClassCreateManyInputSchema.array() ]),
}).strict() ;

export const ChildClassDeleteArgsSchema: z.ZodType<Prisma.ChildClassDeleteArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  where: ChildClassWhereUniqueInputSchema,
}).strict() ;

export const ChildClassUpdateArgsSchema: z.ZodType<Prisma.ChildClassUpdateArgs> = z.object({
  select: ChildClassSelectSchema.optional(),
  include: ChildClassIncludeSchema.optional(),
  data: z.union([ ChildClassUpdateInputSchema,ChildClassUncheckedUpdateInputSchema ]),
  where: ChildClassWhereUniqueInputSchema,
}).strict() ;

export const ChildClassUpdateManyArgsSchema: z.ZodType<Prisma.ChildClassUpdateManyArgs> = z.object({
  data: z.union([ ChildClassUpdateManyMutationInputSchema,ChildClassUncheckedUpdateManyInputSchema ]),
  where: ChildClassWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildClassDeleteManyArgsSchema: z.ZodType<Prisma.ChildClassDeleteManyArgs> = z.object({
  where: ChildClassWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BadgeCreateArgsSchema: z.ZodType<Prisma.BadgeCreateArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  data: z.union([ BadgeCreateInputSchema,BadgeUncheckedCreateInputSchema ]),
}).strict() ;

export const BadgeUpsertArgsSchema: z.ZodType<Prisma.BadgeUpsertArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereUniqueInputSchema,
  create: z.union([ BadgeCreateInputSchema,BadgeUncheckedCreateInputSchema ]),
  update: z.union([ BadgeUpdateInputSchema,BadgeUncheckedUpdateInputSchema ]),
}).strict() ;

export const BadgeCreateManyArgsSchema: z.ZodType<Prisma.BadgeCreateManyArgs> = z.object({
  data: z.union([ BadgeCreateManyInputSchema,BadgeCreateManyInputSchema.array() ]),
}).strict() ;

export const BadgeDeleteArgsSchema: z.ZodType<Prisma.BadgeDeleteArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  where: BadgeWhereUniqueInputSchema,
}).strict() ;

export const BadgeUpdateArgsSchema: z.ZodType<Prisma.BadgeUpdateArgs> = z.object({
  select: BadgeSelectSchema.optional(),
  include: BadgeIncludeSchema.optional(),
  data: z.union([ BadgeUpdateInputSchema,BadgeUncheckedUpdateInputSchema ]),
  where: BadgeWhereUniqueInputSchema,
}).strict() ;

export const BadgeUpdateManyArgsSchema: z.ZodType<Prisma.BadgeUpdateManyArgs> = z.object({
  data: z.union([ BadgeUpdateManyMutationInputSchema,BadgeUncheckedUpdateManyInputSchema ]),
  where: BadgeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BadgeDeleteManyArgsSchema: z.ZodType<Prisma.BadgeDeleteManyArgs> = z.object({
  where: BadgeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildBadgeCreateArgsSchema: z.ZodType<Prisma.ChildBadgeCreateArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  data: z.union([ ChildBadgeCreateInputSchema,ChildBadgeUncheckedCreateInputSchema ]),
}).strict() ;

export const ChildBadgeUpsertArgsSchema: z.ZodType<Prisma.ChildBadgeUpsertArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereUniqueInputSchema,
  create: z.union([ ChildBadgeCreateInputSchema,ChildBadgeUncheckedCreateInputSchema ]),
  update: z.union([ ChildBadgeUpdateInputSchema,ChildBadgeUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChildBadgeCreateManyArgsSchema: z.ZodType<Prisma.ChildBadgeCreateManyArgs> = z.object({
  data: z.union([ ChildBadgeCreateManyInputSchema,ChildBadgeCreateManyInputSchema.array() ]),
}).strict() ;

export const ChildBadgeDeleteArgsSchema: z.ZodType<Prisma.ChildBadgeDeleteArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  where: ChildBadgeWhereUniqueInputSchema,
}).strict() ;

export const ChildBadgeUpdateArgsSchema: z.ZodType<Prisma.ChildBadgeUpdateArgs> = z.object({
  select: ChildBadgeSelectSchema.optional(),
  include: ChildBadgeIncludeSchema.optional(),
  data: z.union([ ChildBadgeUpdateInputSchema,ChildBadgeUncheckedUpdateInputSchema ]),
  where: ChildBadgeWhereUniqueInputSchema,
}).strict() ;

export const ChildBadgeUpdateManyArgsSchema: z.ZodType<Prisma.ChildBadgeUpdateManyArgs> = z.object({
  data: z.union([ ChildBadgeUpdateManyMutationInputSchema,ChildBadgeUncheckedUpdateManyInputSchema ]),
  where: ChildBadgeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildBadgeDeleteManyArgsSchema: z.ZodType<Prisma.ChildBadgeDeleteManyArgs> = z.object({
  where: ChildBadgeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildFeedbackCreateArgsSchema: z.ZodType<Prisma.ChildFeedbackCreateArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  data: z.union([ ChildFeedbackCreateInputSchema,ChildFeedbackUncheckedCreateInputSchema ]),
}).strict() ;

export const ChildFeedbackUpsertArgsSchema: z.ZodType<Prisma.ChildFeedbackUpsertArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereUniqueInputSchema,
  create: z.union([ ChildFeedbackCreateInputSchema,ChildFeedbackUncheckedCreateInputSchema ]),
  update: z.union([ ChildFeedbackUpdateInputSchema,ChildFeedbackUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChildFeedbackCreateManyArgsSchema: z.ZodType<Prisma.ChildFeedbackCreateManyArgs> = z.object({
  data: z.union([ ChildFeedbackCreateManyInputSchema,ChildFeedbackCreateManyInputSchema.array() ]),
}).strict() ;

export const ChildFeedbackDeleteArgsSchema: z.ZodType<Prisma.ChildFeedbackDeleteArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  where: ChildFeedbackWhereUniqueInputSchema,
}).strict() ;

export const ChildFeedbackUpdateArgsSchema: z.ZodType<Prisma.ChildFeedbackUpdateArgs> = z.object({
  select: ChildFeedbackSelectSchema.optional(),
  include: ChildFeedbackIncludeSchema.optional(),
  data: z.union([ ChildFeedbackUpdateInputSchema,ChildFeedbackUncheckedUpdateInputSchema ]),
  where: ChildFeedbackWhereUniqueInputSchema,
}).strict() ;

export const ChildFeedbackUpdateManyArgsSchema: z.ZodType<Prisma.ChildFeedbackUpdateManyArgs> = z.object({
  data: z.union([ ChildFeedbackUpdateManyMutationInputSchema,ChildFeedbackUncheckedUpdateManyInputSchema ]),
  where: ChildFeedbackWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChildFeedbackDeleteManyArgsSchema: z.ZodType<Prisma.ChildFeedbackDeleteManyArgs> = z.object({
  where: ChildFeedbackWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PaymentCreateArgsSchema: z.ZodType<Prisma.PaymentCreateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
}).strict() ;

export const PaymentUpsertArgsSchema: z.ZodType<Prisma.PaymentUpsertArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
  create: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
  update: z.union([ PaymentUpdateInputSchema,PaymentUncheckedUpdateInputSchema ]),
}).strict() ;

export const PaymentCreateManyArgsSchema: z.ZodType<Prisma.PaymentCreateManyArgs> = z.object({
  data: z.union([ PaymentCreateManyInputSchema,PaymentCreateManyInputSchema.array() ]),
}).strict() ;

export const PaymentDeleteArgsSchema: z.ZodType<Prisma.PaymentDeleteArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentUpdateArgsSchema: z.ZodType<Prisma.PaymentUpdateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentUpdateInputSchema,PaymentUncheckedUpdateInputSchema ]),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentUpdateManyArgsSchema: z.ZodType<Prisma.PaymentUpdateManyArgs> = z.object({
  data: z.union([ PaymentUpdateManyMutationInputSchema,PaymentUncheckedUpdateManyInputSchema ]),
  where: PaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PaymentDeleteManyArgsSchema: z.ZodType<Prisma.PaymentDeleteManyArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationTagCreateArgsSchema: z.ZodType<Prisma.NotificationTagCreateArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  data: z.union([ NotificationTagCreateInputSchema,NotificationTagUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationTagUpsertArgsSchema: z.ZodType<Prisma.NotificationTagUpsertArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereUniqueInputSchema,
  create: z.union([ NotificationTagCreateInputSchema,NotificationTagUncheckedCreateInputSchema ]),
  update: z.union([ NotificationTagUpdateInputSchema,NotificationTagUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationTagCreateManyArgsSchema: z.ZodType<Prisma.NotificationTagCreateManyArgs> = z.object({
  data: z.union([ NotificationTagCreateManyInputSchema,NotificationTagCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationTagDeleteArgsSchema: z.ZodType<Prisma.NotificationTagDeleteArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  where: NotificationTagWhereUniqueInputSchema,
}).strict() ;

export const NotificationTagUpdateArgsSchema: z.ZodType<Prisma.NotificationTagUpdateArgs> = z.object({
  select: NotificationTagSelectSchema.optional(),
  include: NotificationTagIncludeSchema.optional(),
  data: z.union([ NotificationTagUpdateInputSchema,NotificationTagUncheckedUpdateInputSchema ]),
  where: NotificationTagWhereUniqueInputSchema,
}).strict() ;

export const NotificationTagUpdateManyArgsSchema: z.ZodType<Prisma.NotificationTagUpdateManyArgs> = z.object({
  data: z.union([ NotificationTagUpdateManyMutationInputSchema,NotificationTagUncheckedUpdateManyInputSchema ]),
  where: NotificationTagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationTagDeleteManyArgsSchema: z.ZodType<Prisma.NotificationTagDeleteManyArgs> = z.object({
  where: NotificationTagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationCreateManyArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationUpdateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationUpdateManyArgs> = z.object({
  data: z.union([ NotificationUpdateManyMutationInputSchema,NotificationUncheckedUpdateManyInputSchema ]),
  where: NotificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationDeleteManyArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationTag_NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  data: z.union([ NotificationTag_NotificationCreateInputSchema,NotificationTag_NotificationUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationTag_NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationUpsertArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationTag_NotificationCreateInputSchema,NotificationTag_NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationTag_NotificationUpdateInputSchema,NotificationTag_NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationTag_NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationCreateManyArgs> = z.object({
  data: z.union([ NotificationTag_NotificationCreateManyInputSchema,NotificationTag_NotificationCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationTag_NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationDeleteArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  where: NotificationTag_NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationTag_NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateArgs> = z.object({
  select: NotificationTag_NotificationSelectSchema.optional(),
  include: NotificationTag_NotificationIncludeSchema.optional(),
  data: z.union([ NotificationTag_NotificationUpdateInputSchema,NotificationTag_NotificationUncheckedUpdateInputSchema ]),
  where: NotificationTag_NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationTag_NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationUpdateManyArgs> = z.object({
  data: z.union([ NotificationTag_NotificationUpdateManyMutationInputSchema,NotificationTag_NotificationUncheckedUpdateManyInputSchema ]),
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationTag_NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationTag_NotificationDeleteManyArgs> = z.object({
  where: NotificationTag_NotificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationRecipientCreateArgsSchema: z.ZodType<Prisma.NotificationRecipientCreateArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  data: z.union([ NotificationRecipientCreateInputSchema,NotificationRecipientUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationRecipientUpsertArgsSchema: z.ZodType<Prisma.NotificationRecipientUpsertArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereUniqueInputSchema,
  create: z.union([ NotificationRecipientCreateInputSchema,NotificationRecipientUncheckedCreateInputSchema ]),
  update: z.union([ NotificationRecipientUpdateInputSchema,NotificationRecipientUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationRecipientCreateManyArgsSchema: z.ZodType<Prisma.NotificationRecipientCreateManyArgs> = z.object({
  data: z.union([ NotificationRecipientCreateManyInputSchema,NotificationRecipientCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationRecipientDeleteArgsSchema: z.ZodType<Prisma.NotificationRecipientDeleteArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  where: NotificationRecipientWhereUniqueInputSchema,
}).strict() ;

export const NotificationRecipientUpdateArgsSchema: z.ZodType<Prisma.NotificationRecipientUpdateArgs> = z.object({
  select: NotificationRecipientSelectSchema.optional(),
  include: NotificationRecipientIncludeSchema.optional(),
  data: z.union([ NotificationRecipientUpdateInputSchema,NotificationRecipientUncheckedUpdateInputSchema ]),
  where: NotificationRecipientWhereUniqueInputSchema,
}).strict() ;

export const NotificationRecipientUpdateManyArgsSchema: z.ZodType<Prisma.NotificationRecipientUpdateManyArgs> = z.object({
  data: z.union([ NotificationRecipientUpdateManyMutationInputSchema,NotificationRecipientUncheckedUpdateManyInputSchema ]),
  where: NotificationRecipientWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NotificationRecipientDeleteManyArgsSchema: z.ZodType<Prisma.NotificationRecipientDeleteManyArgs> = z.object({
  where: NotificationRecipientWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;