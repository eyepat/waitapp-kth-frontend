/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationAccountStatus;
  type?: CodeableConcept;
  name?: StringType;
  subject?: Reference[];
  subjectTarget?: Resource[];
  servicePeriod?: Period;
  coverage?: CoverageComponent[];
  owner?: Reference;
  ownerTarget?: Organization;
  description?: StringType;
  guarantor?: GuarantorComponent[];
  partOf?: Reference;
  partOfTarget?: Account;
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationAccountStatus;
  nameElement?: StringType;
  subjectFirstRep?: Reference;
  coverageFirstRep?: CoverageComponent;
  descriptionElement?: StringType;
  guarantorFirstRep?: GuarantorComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ENTEREDINERROR = 'ENTEREDINERROR',
  ONHOLD = 'ONHOLD',
  UNKNOWN = 'UNKNOWN',
  NULL = 'NULL',
}

export interface ActionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  doNotPerform?: BooleanType;
  type?: CodeableConcept;
  subject?: ActionSubjectComponent[];
  intent?: CodeableConcept;
  linkId?: StringType[];
  status?: CodeableConcept;
  context?: Reference;
  contextTarget?: Resource;
  contextLinkId?: StringType[];
  occurrence?: Type;
  requester?: Reference[];
  requesterTarget?: Resource[];
  requesterLinkId?: StringType[];
  performerType?: CodeableConcept[];
  performerRole?: CodeableConcept;
  performer?: Reference;
  performerTarget?: Resource;
  performerLinkId?: StringType[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  reasonReferenceTarget?: Resource[];
  reason?: StringType[];
  reasonLinkId?: StringType[];
  note?: Annotation[];
  securityLabelNumber?: UnsignedIntType[];
  doNotPerformElement?: BooleanType;
  subjectFirstRep?: ActionSubjectComponent;
  occurrenceDateTimeType?: DateTimeType;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;
  requesterFirstRep?: Reference;
  performerTypeFirstRep?: CodeableConcept;
  reasonCodeFirstRep?: CodeableConcept;
  reasonReferenceFirstRep?: Reference;
  noteFirstRep?: Annotation;
  empty?: boolean;
}

export interface ActionSubjectComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  reference?: Reference[];
  referenceTarget?: Resource[];
  role?: CodeableConcept;
  referenceFirstRep?: Reference;
  empty?: boolean;
}

export interface Address {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  use?: EnumerationAddressUse;
  type?: EnumerationAddressType;
  text?: StringType;
  line?: StringType[];
  city?: StringType;
  district?: StringType;
  state?: StringType;
  postalCode?: StringType;
  country?: StringType;
  period?: Period;
  useElement?: EnumerationAddressUse;
  typeElement?: EnumerationAddressType;
  textElement?: StringType;
  cityElement?: StringType;
  districtElement?: StringType;
  stateElement?: StringType;
  postalCodeElement?: StringType;
  countryElement?: StringType;
  empty?: boolean;
}

export enum AddressType {
  POSTAL = 'POSTAL',
  PHYSICAL = 'PHYSICAL',
  BOTH = 'BOTH',
  NULL = 'NULL',
}

export enum AddressUse {
  HOME = 'HOME',
  WORK = 'WORK',
  TEMP = 'TEMP',
  OLD = 'OLD',
  BILLING = 'BILLING',
  NULL = 'NULL',
}

export enum AdministrativeGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  UNKNOWN = 'UNKNOWN',
  NULL = 'NULL',
}

export interface Age {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  value?: DecimalType;
  comparator?: EnumerationQuantityComparator;
  unit?: StringType;
  system?: UriType;
  code?: CodeType;
  valueElement?: DecimalType;
  comparatorElement?: EnumerationQuantityComparator;
  unitElement?: StringType;
  systemElement?: UriType;
  codeElement?: CodeType;
  version?: string;
  display?: string;
  empty?: boolean;
}

export interface Annotation {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  author?: Type;
  time?: DateTimeType;
  text?: MarkdownType;
  authorReference?: Reference;
  authorStringType?: StringType;
  timeElement?: DateTimeType;
  textElement?: MarkdownType;
  empty?: boolean;
}

export interface AnswerComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  value?: Type;
  valueBooleanType?: BooleanType;
  valueDecimalType?: DecimalType;
  valueIntegerType?: IntegerType;
  valueDateType?: DateType;
  valueDateTimeType?: DateTimeType;
  valueTimeType?: TimeType;
  valueStringType?: StringType;
  valueUriType?: UriType;
  valueAttachment?: Attachment;
  valueCoding?: Coding;
  valueQuantity?: Quantity;
  valueReference?: Reference;
  empty?: boolean;
}

export interface Appointment {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationAppointmentStatus;
  cancelationReason?: CodeableConcept;
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  appointmentType?: CodeableConcept;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  reasonReferenceTarget?: Resource[];
  priority?: UnsignedIntType;
  description?: StringType;
  supportingInformation?: Reference[];
  supportingInformationTarget?: Resource[];
  start?: InstantType;
  end?: InstantType;
  minutesDuration?: PositiveIntType;
  slot?: Reference[];
  slotTarget?: Slot[];
  created?: DateTimeType;
  comment?: StringType;
  patientInstruction?: StringType;
  basedOn?: Reference[];
  basedOnTarget?: ServiceRequest[];
  participant?: AppointmentParticipantComponent[];
  requestedPeriod?: Period[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationAppointmentStatus;
  serviceCategoryFirstRep?: CodeableConcept;
  serviceTypeFirstRep?: CodeableConcept;
  specialtyFirstRep?: CodeableConcept;
  reasonCodeFirstRep?: CodeableConcept;
  reasonReferenceFirstRep?: Reference;
  priorityElement?: UnsignedIntType;
  descriptionElement?: StringType;
  supportingInformationFirstRep?: Reference;
  startElement?: InstantType;
  endElement?: InstantType;
  minutesDurationElement?: PositiveIntType;
  slotFirstRep?: Reference;
  createdElement?: DateTimeType;
  commentElement?: StringType;
  patientInstructionElement?: StringType;
  basedOnFirstRep?: Reference;
  participantFirstRep?: AppointmentParticipantComponent;
  requestedPeriodFirstRep?: Period;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface AppointmentParticipantComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept[];
  actor?: Reference;
  actorTarget?: Resource;
  required?: EnumerationParticipantRequired;
  status?: EnumerationParticipationStatus;
  period?: Period;
  typeFirstRep?: CodeableConcept;
  requiredElement?: EnumerationParticipantRequired;
  statusElement?: EnumerationParticipationStatus;
  empty?: boolean;
}

export enum AppointmentStatus {
  PROPOSED = 'PROPOSED',
  PENDING = 'PENDING',
  BOOKED = 'BOOKED',
  ARRIVED = 'ARRIVED',
  FULFILLED = 'FULFILLED',
  CANCELLED = 'CANCELLED',
  NOSHOW = 'NOSHOW',
  ENTEREDINERROR = 'ENTEREDINERROR',
  CHECKEDIN = 'CHECKEDIN',
  WAITLIST = 'WAITLIST',
  NULL = 'NULL',
}

export interface AssetContextComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  reference?: Reference;
  referenceTarget?: Resource;
  code?: CodeableConcept[];
  text?: StringType;
  codeFirstRep?: CodeableConcept;
  textElement?: StringType;
  empty?: boolean;
}

export interface Attachment {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  contentType?: CodeType;
  language?: CodeType;
  data?: Base64BinaryType;
  url?: UrlType;
  size?: UnsignedIntType;
  hash?: Base64BinaryType;
  title?: StringType;
  creation?: DateTimeType;
  contentTypeElement?: CodeType;
  languageElement?: CodeType;
  dataElement?: Base64BinaryType;
  urlElement?: UrlType;
  sizeElement?: UnsignedIntType;
  hashElement?: Base64BinaryType;
  titleElement?: StringType;
  creationElement?: DateTimeType;
  empty?: boolean;
}

export interface Base64BinaryType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  /** @format binary */
  myCoercedValue?: File;
  myStringValue?: string;
  primitive?: boolean;
  /** @format binary */
  myValue?: File;
  valueAsString?: string;
  /** @format binary */
  value?: File;
  empty?: boolean;
}

export interface BaseCalendar {
  name?: string;
  eras?: Era[];
  calendarDate?: CalendarDate;
}

export interface BaseDateTimeType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  valueAsString?: string;
  myCoercedValue?: Date;
  myStringValue?: string;
  value?: Date;
  empty?: boolean;
  primitive?: boolean;
  myFractionalSeconds?: string;
  myPrecision?: TemporalPrecisionEnum;
  myTimeZone?: TimeZone;
  myTimeZoneZulu?: boolean;
  /** @format int32 */
  day?: number;
  defaultPrecisionForDatatype?: TemporalPrecisionEnum;
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  millis?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  month?: number;
  /** @format float */
  secondsMilli?: number;
  /** @format int64 */
  nanos?: number;
  precision?: TemporalPrecisionEnum;
  /** @format int32 */
  second?: number;
  timeZone?: TimeZone;
  valueAsCalendar?: GregorianCalendar;
  /** @format int32 */
  year?: number;
  timeZoneZulu?: boolean;
  today?: boolean;
  valueAsV3String?: string;
  dateTime?: boolean;
  highEdge?: BaseDateTimeType;
}

export interface BloodPressureDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  value?: string;
}

export interface BooleanType {
  valueAsString?: string;
  value?: boolean;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: boolean;
  myStringValue?: string;
  primitive?: boolean;
  booleanPrimitive?: boolean;
}

export interface CalendarDate {
  era?: Era;
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  dayOfMonth?: number;
  /** @format int32 */
  dayOfWeek?: number;
  leapYear?: boolean;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  millis?: number;
  /** @format int64 */
  fraction?: number;
  normalized?: boolean;
  zoneinfo?: TimeZone;
  /** @format int32 */
  zoneOffset?: number;
  /** @format int32 */
  daylightSaving?: number;
  /** @format int64 */
  timeOfDay?: number;
  daylightTime?: boolean;
  zone?: TimeZone;
}

export interface CanonicalType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
}

export interface CareTeam {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationCareTeamStatus;
  category?: CodeableConcept[];
  name?: StringType;
  subject?: Reference;
  subjectTarget?: Resource;
  encounter?: Reference;
  encounterTarget?: Encounter;
  period?: Period;
  participant?: CareTeamParticipantComponent[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  reasonReferenceTarget?: Condition[];
  managingOrganization?: Reference[];
  managingOrganizationTarget?: Organization[];
  telecom?: ContactPoint[];
  note?: Annotation[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationCareTeamStatus;
  categoryFirstRep?: CodeableConcept;
  nameElement?: StringType;
  participantFirstRep?: CareTeamParticipantComponent;
  reasonCodeFirstRep?: CodeableConcept;
  reasonReferenceFirstRep?: Reference;
  managingOrganizationFirstRep?: Reference;
  telecomFirstRep?: ContactPoint;
  noteFirstRep?: Annotation;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface CareTeamParticipantComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  role?: CodeableConcept[];
  member?: Reference;
  memberTarget?: Resource;
  onBehalfOf?: Reference;
  onBehalfOfTarget?: Organization;
  period?: Period;
  roleFirstRep?: CodeableConcept;
  empty?: boolean;
}

export enum CareTeamStatus {
  PROPOSED = 'PROPOSED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  INACTIVE = 'INACTIVE',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

export interface ClassComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept;
  value?: StringType;
  name?: StringType;
  valueElement?: StringType;
  nameElement?: StringType;
  empty?: boolean;
}

export interface ClassHistoryComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  class_?: Coding;
  period?: Period;
  empty?: boolean;
}

export interface CodeType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
  valueNotNull?: string;
  system?: string;
  version?: string;
  display?: string;
  code?: string;
}

export interface CodeableConcept {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  coding?: Coding[];
  text?: StringType;
  codingFirstRep?: Coding;
  textElement?: StringType;
  empty?: boolean;
}

export interface Coding {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  system?: UriType;
  version?: StringType;
  code?: CodeType;
  display?: StringType;
  userSelected?: BooleanType;
  systemElement?: UriType;
  versionElement?: StringType;
  codeElement?: CodeType;
  displayElement?: StringType;
  userSelectedElement?: BooleanType;
  empty?: boolean;
}

export interface ComputableLanguageComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  content?: Type;
  contentAttachment?: Attachment;
  contentReference?: Reference;
  empty?: boolean;
}

export interface Condition {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  clinicalStatus?: CodeableConcept;
  verificationStatus?: CodeableConcept;
  category?: CodeableConcept[];
  severity?: CodeableConcept;
  code?: CodeableConcept;
  bodySite?: CodeableConcept[];
  subject?: Reference;
  subjectTarget?: Resource;
  encounter?: Reference;
  encounterTarget?: Encounter;
  onset?: Type;
  abatement?: Type;
  recordedDate?: DateTimeType;
  recorder?: Reference;
  recorderTarget?: Resource;
  asserter?: Reference;
  asserterTarget?: Resource;
  stage?: ConditionStageComponent[];
  evidence?: ConditionEvidenceComponent[];
  note?: Annotation[];
  identifierFirstRep?: Identifier;
  categoryFirstRep?: CodeableConcept;
  bodySiteFirstRep?: CodeableConcept;
  onsetDateTimeType?: DateTimeType;
  onsetAge?: Age;
  onsetPeriod?: Period;
  onsetRange?: Range;
  onsetStringType?: StringType;
  abatementDateTimeType?: DateTimeType;
  abatementAge?: Age;
  abatementPeriod?: Period;
  abatementRange?: Range;
  abatementStringType?: StringType;
  recordedDateElement?: DateTimeType;
  stageFirstRep?: ConditionStageComponent;
  evidenceFirstRep?: ConditionEvidenceComponent;
  noteFirstRep?: Annotation;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface ConditionEvidenceComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  code?: CodeableConcept[];
  detail?: Reference[];
  detailTarget?: Resource[];
  codeFirstRep?: CodeableConcept;
  detailFirstRep?: Reference;
  empty?: boolean;
}

export interface ConditionStageComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  summary?: CodeableConcept;
  assessment?: Reference[];
  assessmentTarget?: Resource[];
  type?: CodeableConcept;
  assessmentFirstRep?: Reference;
  empty?: boolean;
}

export interface ContactComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  relationship?: CodeableConcept[];
  name?: HumanName;
  telecom?: ContactPoint[];
  address?: Address;
  gender?: EnumerationAdministrativeGender;
  organization?: Reference;
  organizationTarget?: Organization;
  period?: Period;
  relationshipFirstRep?: CodeableConcept;
  telecomFirstRep?: ContactPoint;
  genderElement?: EnumerationAdministrativeGender;
  empty?: boolean;
}

export interface ContactDetail {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  name?: StringType;
  telecom?: ContactPoint[];
  nameElement?: StringType;
  telecomFirstRep?: ContactPoint;
  empty?: boolean;
}

export interface ContactPoint {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  system?: EnumerationContactPointSystem;
  value?: StringType;
  use?: EnumerationContactPointUse;
  rank?: PositiveIntType;
  period?: Period;
  systemElement?: EnumerationContactPointSystem;
  valueElement?: StringType;
  useElement?: EnumerationContactPointUse;
  rankElement?: PositiveIntType;
  empty?: boolean;
}

export enum ContactPointSystem {
  PHONE = 'PHONE',
  FAX = 'FAX',
  EMAIL = 'EMAIL',
  PAGER = 'PAGER',
  URL = 'URL',
  SMS = 'SMS',
  OTHER = 'OTHER',
  NULL = 'NULL',
}

export enum ContactPointUse {
  HOME = 'HOME',
  WORK = 'WORK',
  TEMP = 'TEMP',
  OLD = 'OLD',
  MOBILE = 'MOBILE',
  NULL = 'NULL',
}

export interface ContentDefinitionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept;
  subType?: CodeableConcept;
  publisher?: Reference;
  publisherTarget?: Resource;
  publicationDate?: DateTimeType;
  publicationStatus?: EnumerationContractPublicationStatus;
  copyright?: MarkdownType;
  publicationDateElement?: DateTimeType;
  publicationStatusElement?: EnumerationContractPublicationStatus;
  copyrightElement?: MarkdownType;
  empty?: boolean;
}

export interface Contract {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  url?: UriType;
  version?: StringType;
  status?: EnumerationContractStatus;
  legalState?: CodeableConcept;
  instantiatesCanonical?: Reference;
  instantiatesCanonicalTarget?: Contract;
  instantiatesUri?: UriType;
  contentDerivative?: CodeableConcept;
  issued?: DateTimeType;
  applies?: Period;
  expirationType?: CodeableConcept;
  subject?: Reference[];
  subjectTarget?: Resource[];
  authority?: Reference[];
  authorityTarget?: Organization[];
  domain?: Reference[];
  domainTarget?: Location1[];
  site?: Reference[];
  siteTarget?: Location1[];
  name?: StringType;
  title?: StringType;
  subtitle?: StringType;
  alias?: StringType[];
  author?: Reference;
  authorTarget?: Resource;
  scope?: CodeableConcept;
  topic?: Type;
  type?: CodeableConcept;
  subType?: CodeableConcept[];
  contentDefinition?: ContentDefinitionComponent;
  term?: TermComponent[];
  supportingInfo?: Reference[];
  supportingInfoTarget?: Resource[];
  relevantHistory?: Reference[];
  relevantHistoryTarget?: Provenance[];
  signer?: SignatoryComponent[];
  friendly?: FriendlyLanguageComponent[];
  legal?: LegalLanguageComponent[];
  rule?: ComputableLanguageComponent[];
  legallyBinding?: Type;
  identifierFirstRep?: Identifier;
  urlElement?: UriType;
  versionElement?: StringType;
  statusElement?: EnumerationContractStatus;
  instantiatesUriElement?: UriType;
  issuedElement?: DateTimeType;
  subjectFirstRep?: Reference;
  authorityFirstRep?: Reference;
  domainFirstRep?: Reference;
  siteFirstRep?: Reference;
  nameElement?: StringType;
  titleElement?: StringType;
  subtitleElement?: StringType;
  topicCodeableConcept?: CodeableConcept;
  topicReference?: Reference;
  subTypeFirstRep?: CodeableConcept;
  termFirstRep?: TermComponent;
  supportingInfoFirstRep?: Reference;
  relevantHistoryFirstRep?: Reference;
  signerFirstRep?: SignatoryComponent;
  friendlyFirstRep?: FriendlyLanguageComponent;
  legalFirstRep?: LegalLanguageComponent;
  ruleFirstRep?: ComputableLanguageComponent;
  legallyBindingAttachment?: Attachment;
  legallyBindingReference?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface ContractAssetComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  scope?: CodeableConcept;
  type?: CodeableConcept[];
  typeReference?: Reference[];
  typeReferenceTarget?: Resource[];
  subtype?: CodeableConcept[];
  relationship?: Coding;
  context?: AssetContextComponent[];
  condition?: StringType;
  periodType?: CodeableConcept[];
  period?: Period[];
  usePeriod?: Period[];
  text?: StringType;
  linkId?: StringType[];
  answer?: AnswerComponent[];
  securityLabelNumber?: UnsignedIntType[];
  valuedItem?: ValuedItemComponent[];
  typeFirstRep?: CodeableConcept;
  typeReferenceFirstRep?: Reference;
  subtypeFirstRep?: CodeableConcept;
  contextFirstRep?: AssetContextComponent;
  conditionElement?: StringType;
  periodTypeFirstRep?: CodeableConcept;
  periodFirstRep?: Period;
  usePeriodFirstRep?: Period;
  textElement?: StringType;
  answerFirstRep?: AnswerComponent;
  valuedItemFirstRep?: ValuedItemComponent;
  empty?: boolean;
}

export interface ContractOfferComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  identifier?: Identifier[];
  party?: ContractPartyComponent[];
  topic?: Reference;
  topicTarget?: Resource;
  type?: CodeableConcept;
  decision?: CodeableConcept;
  decisionMode?: CodeableConcept[];
  answer?: AnswerComponent[];
  text?: StringType;
  linkId?: StringType[];
  securityLabelNumber?: UnsignedIntType[];
  identifierFirstRep?: Identifier;
  partyFirstRep?: ContractPartyComponent;
  decisionModeFirstRep?: CodeableConcept;
  answerFirstRep?: AnswerComponent;
  textElement?: StringType;
  empty?: boolean;
}

export interface ContractPartyComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  reference?: Reference[];
  referenceTarget?: Resource[];
  role?: CodeableConcept;
  referenceFirstRep?: Reference;
  empty?: boolean;
}

export enum ContractPublicationStatus {
  AMENDED = 'AMENDED',
  APPENDED = 'APPENDED',
  CANCELLED = 'CANCELLED',
  DISPUTED = 'DISPUTED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  EXECUTABLE = 'EXECUTABLE',
  EXECUTED = 'EXECUTED',
  NEGOTIABLE = 'NEGOTIABLE',
  OFFERED = 'OFFERED',
  POLICY = 'POLICY',
  REJECTED = 'REJECTED',
  RENEWED = 'RENEWED',
  REVOKED = 'REVOKED',
  RESOLVED = 'RESOLVED',
  TERMINATED = 'TERMINATED',
  NULL = 'NULL',
}

export enum ContractStatus {
  AMENDED = 'AMENDED',
  APPENDED = 'APPENDED',
  CANCELLED = 'CANCELLED',
  DISPUTED = 'DISPUTED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  EXECUTABLE = 'EXECUTABLE',
  EXECUTED = 'EXECUTED',
  NEGOTIABLE = 'NEGOTIABLE',
  OFFERED = 'OFFERED',
  POLICY = 'POLICY',
  REJECTED = 'REJECTED',
  RENEWED = 'RENEWED',
  REVOKED = 'REVOKED',
  RESOLVED = 'RESOLVED',
  TERMINATED = 'TERMINATED',
  NULL = 'NULL',
}

export interface CostToBeneficiaryComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept;
  value?: Type;
  exception?: ExemptionComponent[];
  valueQuantity?: Quantity;
  valueMoney?: Money;
  exceptionFirstRep?: ExemptionComponent;
  empty?: boolean;
}

export interface Coverage {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationCoverageStatus;
  type?: CodeableConcept;
  policyHolder?: Reference;
  policyHolderTarget?: Resource;
  subscriber?: Reference;
  subscriberTarget?: Resource;
  subscriberId?: StringType;
  beneficiary?: Reference;
  beneficiaryTarget?: Patient;
  dependent?: StringType;
  relationship?: CodeableConcept;
  period?: Period;
  payor?: Reference[];
  payorTarget?: Resource[];
  class_?: ClassComponent[];
  order?: PositiveIntType;
  network?: StringType;
  costToBeneficiary?: CostToBeneficiaryComponent[];
  subrogation?: BooleanType;
  contract?: Reference[];
  contractTarget?: Contract[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationCoverageStatus;
  subscriberIdElement?: StringType;
  dependentElement?: StringType;
  payorFirstRep?: Reference;
  class_FirstRep?: ClassComponent;
  orderElement?: PositiveIntType;
  networkElement?: StringType;
  costToBeneficiaryFirstRep?: CostToBeneficiaryComponent;
  subrogationElement?: BooleanType;
  contractFirstRep?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface CoverageComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  coverage?: Reference;
  coverageTarget?: Coverage;
  priority?: PositiveIntType;
  priorityElement?: PositiveIntType;
  empty?: boolean;
}

export enum CoverageStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  DRAFT = 'DRAFT',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

/** @format date */
export type Date = string;

export interface Date1 {
  era?: Era;
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  dayOfMonth?: number;
  /** @format int32 */
  dayOfWeek?: number;
  leapYear?: boolean;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  millis?: number;
  /** @format int64 */
  fraction?: number;
  normalized?: boolean;
  zoneinfo?: TimeZone;
  /** @format int32 */
  zoneOffset?: number;
  /** @format int32 */
  daylightSaving?: number;
  /** @format int64 */
  timeOfDay?: number;
  daylightTime?: boolean;
  zone?: TimeZone;
  /** @format int32 */
  cachedYear?: number;
  /** @format int64 */
  cachedFixedDateJan1?: number;
  /** @format int64 */
  cachedFixedDateNextJan1?: number;
  /** @format int32 */
  normalizedYear?: number;
  /** @format int64 */
  cachedJan1?: number;
}

export interface DateTimeType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  valueAsString?: string;
  myCoercedValue?: Date;
  myStringValue?: string;
  value?: Date;
  empty?: boolean;
  primitive?: boolean;
  myFractionalSeconds?: string;
  myPrecision?: TemporalPrecisionEnum;
  myTimeZone?: TimeZone;
  myTimeZoneZulu?: boolean;
  /** @format int32 */
  day?: number;
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  millis?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  month?: number;
  /** @format float */
  secondsMilli?: number;
  /** @format int64 */
  nanos?: number;
  precision?: TemporalPrecisionEnum;
  /** @format int32 */
  second?: number;
  timeZone?: TimeZone;
  valueAsCalendar?: GregorianCalendar;
  /** @format int32 */
  year?: number;
  timeZoneZulu?: boolean;
  today?: boolean;
  valueAsV3String?: string;
  highEdge?: BaseDateTimeType;
  defaultPrecisionForDatatype?: TemporalPrecisionEnum;
  tzSign?: boolean;
  /** @format int32 */
  tzHour?: number;
  /** @format int32 */
  tzMin?: number;
  asV3?: string;
  dateTime?: boolean;
}

export interface DateType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  valueAsString?: string;
  myCoercedValue?: Date;
  myStringValue?: string;
  value?: Date;
  empty?: boolean;
  primitive?: boolean;
  myFractionalSeconds?: string;
  myPrecision?: TemporalPrecisionEnum;
  myTimeZone?: TimeZone;
  myTimeZoneZulu?: boolean;
  /** @format int32 */
  day?: number;
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  millis?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  month?: number;
  /** @format float */
  secondsMilli?: number;
  /** @format int64 */
  nanos?: number;
  precision?: TemporalPrecisionEnum;
  /** @format int32 */
  second?: number;
  timeZone?: TimeZone;
  valueAsCalendar?: GregorianCalendar;
  /** @format int32 */
  year?: number;
  timeZoneZulu?: boolean;
  today?: boolean;
  valueAsV3String?: string;
  highEdge?: BaseDateTimeType;
  defaultPrecisionForDatatype?: TemporalPrecisionEnum;
  dateTime?: boolean;
}

export enum DayOfWeek {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
  NULL = 'NULL',
}

export enum DaysOfWeek {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
  NULL = 'NULL',
}

export interface DecimalType {
  valueAsString?: string;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: number;
  myStringValue?: string;
  primitive?: boolean;
  /** @format int32 */
  valueAsInteger?: number;
  valueAsNumber?: number;
  /** @format int64 */
  value?: number;
}

export interface DiagnosisComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  condition?: Reference;
  conditionTarget?: Resource;
  use?: CodeableConcept;
  rank?: PositiveIntType;
  rankElement?: PositiveIntType;
  empty?: boolean;
}

export interface DiagnosisComponent1 {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  condition?: Reference;
  conditionTarget?: Condition;
  role?: CodeableConcept;
  rank?: PositiveIntType;
  rankElement?: PositiveIntType;
  empty?: boolean;
}

export interface Duration {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  value?: DecimalType;
  comparator?: EnumerationQuantityComparator;
  unit?: StringType;
  system?: UriType;
  code?: CodeType;
  valueElement?: DecimalType;
  comparatorElement?: EnumerationQuantityComparator;
  unitElement?: StringType;
  systemElement?: UriType;
  codeElement?: CodeType;
  version?: string;
  display?: string;
  empty?: boolean;
}

export enum EnableWhenBehavior {
  ALL = 'ALL',
  ANY = 'ANY',
  NULL = 'NULL',
}

export interface Encounter {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationEncounterStatus;
  statusHistory?: StatusHistoryComponent[];
  class_?: Coding;
  classHistory?: ClassHistoryComponent[];
  type?: CodeableConcept[];
  serviceType?: CodeableConcept;
  priority?: CodeableConcept;
  subject?: Reference;
  subjectTarget?: Resource;
  episodeOfCare?: Reference[];
  episodeOfCareTarget?: EpisodeOfCare[];
  basedOn?: Reference[];
  basedOnTarget?: ServiceRequest[];
  participant?: EncounterParticipantComponent[];
  appointment?: Reference[];
  appointmentTarget?: Appointment[];
  period?: Period;
  length?: Duration;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  reasonReferenceTarget?: Resource[];
  diagnosis?: DiagnosisComponent[];
  account?: Reference[];
  accountTarget?: Account[];
  hospitalization?: EncounterHospitalizationComponent;
  location?: EncounterLocationComponent[];
  serviceProvider?: Reference;
  serviceProviderTarget?: Organization;
  partOf?: Reference;
  partOfTarget?: Encounter;
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationEncounterStatus;
  statusHistoryFirstRep?: StatusHistoryComponent;
  classHistoryFirstRep?: ClassHistoryComponent;
  typeFirstRep?: CodeableConcept;
  episodeOfCareFirstRep?: Reference;
  basedOnFirstRep?: Reference;
  participantFirstRep?: EncounterParticipantComponent;
  appointmentFirstRep?: Reference;
  reasonCodeFirstRep?: CodeableConcept;
  reasonReferenceFirstRep?: Reference;
  diagnosisFirstRep?: DiagnosisComponent;
  accountFirstRep?: Reference;
  locationFirstRep?: EncounterLocationComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface EncounterHospitalizationComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  preAdmissionIdentifier?: Identifier;
  origin?: Reference;
  originTarget?: Resource;
  admitSource?: CodeableConcept;
  reAdmission?: CodeableConcept;
  dietPreference?: CodeableConcept[];
  specialCourtesy?: CodeableConcept[];
  specialArrangement?: CodeableConcept[];
  destination?: Reference;
  destinationTarget?: Resource;
  dischargeDisposition?: CodeableConcept;
  dietPreferenceFirstRep?: CodeableConcept;
  specialCourtesyFirstRep?: CodeableConcept;
  specialArrangementFirstRep?: CodeableConcept;
  empty?: boolean;
}

export interface EncounterLocationComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  location?: Reference;
  locationTarget?: Location1;
  status?: EnumerationEncounterLocationStatus;
  physicalType?: CodeableConcept;
  period?: Period;
  statusElement?: EnumerationEncounterLocationStatus;
  empty?: boolean;
}

export enum EncounterLocationStatus {
  PLANNED = 'PLANNED',
  ACTIVE = 'ACTIVE',
  RESERVED = 'RESERVED',
  COMPLETED = 'COMPLETED',
  NULL = 'NULL',
}

export interface EncounterParticipantComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept[];
  period?: Period;
  individual?: Reference;
  individualTarget?: Resource;
  typeFirstRep?: CodeableConcept;
  empty?: boolean;
}

export enum EncounterStatus {
  PLANNED = 'PLANNED',
  ARRIVED = 'ARRIVED',
  TRIAGED = 'TRIAGED',
  INPROGRESS = 'INPROGRESS',
  ONLEAVE = 'ONLEAVE',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  UNKNOWN = 'UNKNOWN',
  NULL = 'NULL',
}

export interface Endpoint {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationEndpointStatus;
  connectionType?: Coding;
  name?: StringType;
  managingOrganization?: Reference;
  managingOrganizationTarget?: Organization;
  contact?: ContactPoint[];
  period?: Period;
  payloadType?: CodeableConcept[];
  payloadMimeType?: CodeType[];
  address?: UrlType;
  header?: StringType[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationEndpointStatus;
  nameElement?: StringType;
  contactFirstRep?: ContactPoint;
  payloadTypeFirstRep?: CodeableConcept;
  addressElement?: UrlType;
  empty?: boolean;
  resourceType?: ResourceType;
}

export enum EndpointStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  ERROR = 'ERROR',
  OFF = 'OFF',
  ENTEREDINERROR = 'ENTEREDINERROR',
  TEST = 'TEST',
  NULL = 'NULL',
}

export type EnumFactoryAccountStatus = object;

export type EnumFactoryAddressType = object;

export type EnumFactoryAddressUse = object;

export type EnumFactoryAdministrativeGender = object;

export type EnumFactoryAppointmentStatus = object;

export type EnumFactoryCareTeamStatus = object;

export type EnumFactoryContactPointSystem = object;

export type EnumFactoryContactPointUse = object;

export type EnumFactoryContractPublicationStatus = object;

export type EnumFactoryContractStatus = object;

export type EnumFactoryCoverageStatus = object;

export type EnumFactoryDayOfWeek = object;

export type EnumFactoryDaysOfWeek = object;

export type EnumFactoryEnableWhenBehavior = object;

export type EnumFactoryEncounterLocationStatus = object;

export type EnumFactoryEncounterStatus = object;

export type EnumFactoryEndpointStatus = object;

export type EnumFactoryEpisodeOfCareStatus = object;

export type EnumFactoryEventTiming = object;

export type EnumFactoryFHIRSubstanceStatus = object;

export type EnumFactoryIdentifierUse = object;

export type EnumFactoryLinkType = object;

export type EnumFactoryLocationMode = object;

export type EnumFactoryLocationStatus = object;

export type EnumFactoryNameUse = object;

export type EnumFactoryNarrativeStatus = object;

export type EnumFactoryParticipantRequired = object;

export type EnumFactoryParticipationStatus = object;

export type EnumFactoryProvenanceEntityRole = object;

export type EnumFactoryPublicationStatus = object;

export type EnumFactoryQuantityComparator = object;

export type EnumFactoryQuestionnaireItemOperator = object;

export type EnumFactoryQuestionnaireItemType = object;

export type EnumFactoryQuestionnaireResponseStatus = object;

export type EnumFactoryServiceRequestIntent = object;

export type EnumFactoryServiceRequestPriority = object;

export type EnumFactoryServiceRequestStatus = object;

export type EnumFactorySlotStatus = object;

export type EnumFactorySpecimenStatus = object;

export type EnumFactoryUnitsOfTime = object;

export interface EnumerationAccountStatus {
  valueAsString?: string;
  value?: AccountStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: AccountStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryAccountStatus;
  enumFactory?: EnumFactoryAccountStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationAddressType {
  valueAsString?: string;
  value?: AddressType;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: AddressType;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryAddressType;
  enumFactory?: EnumFactoryAddressType;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationAddressUse {
  valueAsString?: string;
  value?: AddressUse;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: AddressUse;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryAddressUse;
  enumFactory?: EnumFactoryAddressUse;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationAdministrativeGender {
  valueAsString?: string;
  value?: AdministrativeGender;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: AdministrativeGender;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryAdministrativeGender;
  enumFactory?: EnumFactoryAdministrativeGender;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationAppointmentStatus {
  valueAsString?: string;
  value?: AppointmentStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: AppointmentStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryAppointmentStatus;
  enumFactory?: EnumFactoryAppointmentStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationCareTeamStatus {
  valueAsString?: string;
  value?: CareTeamStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: CareTeamStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryCareTeamStatus;
  enumFactory?: EnumFactoryCareTeamStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationContactPointSystem {
  valueAsString?: string;
  value?: ContactPointSystem;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ContactPointSystem;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryContactPointSystem;
  enumFactory?: EnumFactoryContactPointSystem;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationContactPointUse {
  valueAsString?: string;
  value?: ContactPointUse;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ContactPointUse;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryContactPointUse;
  enumFactory?: EnumFactoryContactPointUse;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationContractPublicationStatus {
  valueAsString?: string;
  value?: ContractPublicationStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ContractPublicationStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryContractPublicationStatus;
  enumFactory?: EnumFactoryContractPublicationStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationContractStatus {
  valueAsString?: string;
  value?: ContractStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ContractStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryContractStatus;
  enumFactory?: EnumFactoryContractStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationCoverageStatus {
  valueAsString?: string;
  value?: CoverageStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: CoverageStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryCoverageStatus;
  enumFactory?: EnumFactoryCoverageStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationEnableWhenBehavior {
  valueAsString?: string;
  value?: EnableWhenBehavior;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: EnableWhenBehavior;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryEnableWhenBehavior;
  enumFactory?: EnumFactoryEnableWhenBehavior;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationEncounterLocationStatus {
  valueAsString?: string;
  value?: EncounterLocationStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: EncounterLocationStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryEncounterLocationStatus;
  enumFactory?: EnumFactoryEncounterLocationStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationEncounterStatus {
  valueAsString?: string;
  value?: EncounterStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: EncounterStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryEncounterStatus;
  enumFactory?: EnumFactoryEncounterStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationEndpointStatus {
  valueAsString?: string;
  value?: EndpointStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: EndpointStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryEndpointStatus;
  enumFactory?: EnumFactoryEndpointStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationEpisodeOfCareStatus {
  valueAsString?: string;
  value?: EpisodeOfCareStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: EpisodeOfCareStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryEpisodeOfCareStatus;
  enumFactory?: EnumFactoryEpisodeOfCareStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationFHIRSubstanceStatus {
  valueAsString?: string;
  value?: FHIRSubstanceStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: FHIRSubstanceStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryFHIRSubstanceStatus;
  enumFactory?: EnumFactoryFHIRSubstanceStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationIdentifierUse {
  valueAsString?: string;
  value?: IdentifierUse;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: IdentifierUse;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryIdentifierUse;
  enumFactory?: EnumFactoryIdentifierUse;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationLinkType {
  valueAsString?: string;
  value?: LinkType;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: LinkType;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryLinkType;
  enumFactory?: EnumFactoryLinkType;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationLocationMode {
  valueAsString?: string;
  value?: LocationMode;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: LocationMode;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryLocationMode;
  enumFactory?: EnumFactoryLocationMode;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationLocationStatus {
  valueAsString?: string;
  value?: LocationStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: LocationStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryLocationStatus;
  enumFactory?: EnumFactoryLocationStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationNameUse {
  valueAsString?: string;
  value?: NameUse;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: NameUse;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryNameUse;
  enumFactory?: EnumFactoryNameUse;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationNarrativeStatus {
  valueAsString?: string;
  value?: NarrativeStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: NarrativeStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryNarrativeStatus;
  enumFactory?: EnumFactoryNarrativeStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationParticipantRequired {
  valueAsString?: string;
  value?: ParticipantRequired;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ParticipantRequired;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryParticipantRequired;
  enumFactory?: EnumFactoryParticipantRequired;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationParticipationStatus {
  valueAsString?: string;
  value?: ParticipationStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ParticipationStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryParticipationStatus;
  enumFactory?: EnumFactoryParticipationStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationProvenanceEntityRole {
  valueAsString?: string;
  value?: ProvenanceEntityRole;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ProvenanceEntityRole;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryProvenanceEntityRole;
  enumFactory?: EnumFactoryProvenanceEntityRole;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationPublicationStatus {
  valueAsString?: string;
  value?: PublicationStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: PublicationStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryPublicationStatus;
  enumFactory?: EnumFactoryPublicationStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationQuantityComparator {
  valueAsString?: string;
  value?: QuantityComparator;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: QuantityComparator;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryQuantityComparator;
  enumFactory?: EnumFactoryQuantityComparator;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationQuestionnaireItemOperator {
  valueAsString?: string;
  value?: QuestionnaireItemOperator;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: QuestionnaireItemOperator;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryQuestionnaireItemOperator;
  enumFactory?: EnumFactoryQuestionnaireItemOperator;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationQuestionnaireItemType {
  valueAsString?: string;
  value?: QuestionnaireItemType;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: QuestionnaireItemType;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryQuestionnaireItemType;
  enumFactory?: EnumFactoryQuestionnaireItemType;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationQuestionnaireResponseStatus {
  valueAsString?: string;
  value?: QuestionnaireResponseStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: QuestionnaireResponseStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryQuestionnaireResponseStatus;
  enumFactory?: EnumFactoryQuestionnaireResponseStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationServiceRequestIntent {
  valueAsString?: string;
  value?: ServiceRequestIntent;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ServiceRequestIntent;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryServiceRequestIntent;
  enumFactory?: EnumFactoryServiceRequestIntent;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationServiceRequestPriority {
  valueAsString?: string;
  value?: ServiceRequestPriority;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ServiceRequestPriority;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryServiceRequestPriority;
  enumFactory?: EnumFactoryServiceRequestPriority;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationServiceRequestStatus {
  valueAsString?: string;
  value?: ServiceRequestStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: ServiceRequestStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryServiceRequestStatus;
  enumFactory?: EnumFactoryServiceRequestStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationSlotStatus {
  valueAsString?: string;
  value?: SlotStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: SlotStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactorySlotStatus;
  enumFactory?: EnumFactorySlotStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationSpecimenStatus {
  valueAsString?: string;
  value?: SpecimenStatus;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: SpecimenStatus;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactorySpecimenStatus;
  enumFactory?: EnumFactorySpecimenStatus;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EnumerationUnitsOfTime {
  valueAsString?: string;
  value?: UnitsOfTime;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: UnitsOfTime;
  myStringValue?: string;
  primitive?: boolean;
  myEnumFactory?: EnumFactoryUnitsOfTime;
  enumFactory?: EnumFactoryUnitsOfTime;
  system?: string;
  version?: string;
  code?: string;
  display?: string;
}

export interface EpisodeOfCare {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationEpisodeOfCareStatus;
  statusHistory?: EpisodeOfCareStatusHistoryComponent[];
  type?: CodeableConcept[];
  diagnosis?: DiagnosisComponent1[];
  patient?: Reference;
  patientTarget?: Patient;
  managingOrganization?: Reference;
  managingOrganizationTarget?: Organization;
  period?: Period;
  referralRequest?: Reference[];
  referralRequestTarget?: ServiceRequest[];
  careManager?: Reference;
  careManagerTarget?: Resource;
  team?: Reference[];
  teamTarget?: CareTeam[];
  account?: Reference[];
  accountTarget?: Account[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationEpisodeOfCareStatus;
  statusHistoryFirstRep?: EpisodeOfCareStatusHistoryComponent;
  typeFirstRep?: CodeableConcept;
  diagnosisFirstRep?: DiagnosisComponent1;
  referralRequestFirstRep?: Reference;
  teamFirstRep?: Reference;
  accountFirstRep?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export enum EpisodeOfCareStatus {
  PLANNED = 'PLANNED',
  WAITLIST = 'WAITLIST',
  ACTIVE = 'ACTIVE',
  ONHOLD = 'ONHOLD',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

export interface EpisodeOfCareStatusHistoryComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  status?: EnumerationEpisodeOfCareStatus;
  period?: Period;
  statusElement?: EnumerationEpisodeOfCareStatus;
  empty?: boolean;
}

export interface Era {
  name?: string;
  abbr?: string;
  /** @format int64 */
  since?: number;
  sinceDate?: CalendarDate;
  localTime?: boolean;
  /** @format int32 */
  hash?: number;
  abbreviation?: string;
}

export interface ErrorResponse {
  error?: string;
  message?: string;
}

export enum EventTiming {
  MORN = 'MORN',
  MORN_EARLY = 'MORN_EARLY',
  MORN_LATE = 'MORN_LATE',
  NOON = 'NOON',
  AFT = 'AFT',
  AFT_EARLY = 'AFT_EARLY',
  AFT_LATE = 'AFT_LATE',
  EVE = 'EVE',
  EVE_EARLY = 'EVE_EARLY',
  EVE_LATE = 'EVE_LATE',
  NIGHT = 'NIGHT',
  PHS = 'PHS',
  HS = 'HS',
  WAKE = 'WAKE',
  C = 'C',
  CM = 'CM',
  CD = 'CD',
  CV = 'CV',
  AC = 'AC',
  ACM = 'ACM',
  ACD = 'ACD',
  ACV = 'ACV',
  PC = 'PC',
  PCM = 'PCM',
  PCD = 'PCD',
  PCV = 'PCV',
  NULL = 'NULL',
}

export interface ExemptionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept;
  period?: Period;
  empty?: boolean;
}

export interface Extension {
  extension?: Extension[];
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  valueAsPrimitive?: IPrimitiveTypeObject;
  url?: UriType;
  value?: Type;
  urlElement?: UriType;
  empty?: boolean;
}

export enum FHIRSubstanceStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

export enum FhirVersionEnum {
  DSTU2 = 'DSTU2',
  DSTU2HL7ORG = 'DSTU2_HL7ORG',
  DSTU21 = 'DSTU2_1',
  DSTU3 = 'DSTU3',
  R4 = 'R4',
  R4B = 'R4B',
  R5 = 'R5',
}

export interface FriendlyLanguageComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  content?: Type;
  contentAttachment?: Attachment;
  contentReference?: Reference;
  empty?: boolean;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NONE_BINARY = 'NONE_BINARY',
  OTHER = 'OTHER',
}

export interface GregorianCalendar {
  fields?: number[];
  isSet?: boolean[];
  /** @format int64 */
  time?: number;
  isTimeSet?: boolean;
  areFieldsSet?: boolean;
  lenient?: boolean;
  zone?: TimeZone;
  /** @format int32 */
  firstDayOfWeek?: number;
  /** @format int32 */
  minimalDaysInFirstWeek?: number;
  /** @format int32 */
  nextStamp?: number;
  /** @format int32 */
  serialVersionOnStream?: number;
  /** @format int64 */
  timeInMillis?: number;
  /** @format int32 */
  setStateFields?: number;
  /** @format int32 */
  fieldsComputed?: number;
  /** @format int32 */
  fieldsNormalized?: number;
  partiallyNormalized?: boolean;
  fullyNormalized?: boolean;
  zoneShared?: boolean;
  weekCountData?: Locale;
  /** @format int64 */
  gregorianCutover?: number;
  gregorianChange?: Date;
  calendarType?: string;
  /** @format int64 */
  yearOffsetInMillis?: number;
  timeZone?: TimeZone;
  weekDateSupported?: boolean;
  /** @format int32 */
  weekYear?: number;
  /** @format int32 */
  weeksInWeekYear?: number;
  normalizedCalendar?: GregorianCalendar;
  cutoverCalendarSystem?: BaseCalendar;
  invalidWeek1?: boolean;
  lastJulianDate?: Date1;
  /** @format int64 */
  currentFixedDate?: number;
}

export interface GuarantorComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  party?: Reference;
  partyTarget?: Resource;
  onHold?: BooleanType;
  period?: Period;
  onHoldElement?: BooleanType;
  empty?: boolean;
}

export interface HeightDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export interface HumanName {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  use?: EnumerationNameUse;
  text?: StringType;
  family?: StringType;
  given?: StringType[];
  prefix?: StringType[];
  suffix?: StringType[];
  period?: Period;
  useElement?: EnumerationNameUse;
  textElement?: StringType;
  familyElement?: StringType;
  givenAsSingleString?: string;
  prefixAsSingleString?: string;
  suffixAsSingleString?: string;
  nameAsSingleString?: string;
  empty?: boolean;
}

export interface IBaseCoding {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  code?: string;
  display?: string;
  system?: string;
  userSelected?: boolean;
  version?: string;
}

export interface IBaseDTO {
  /** @format int64 */
  id?: number;
}

export interface IBaseDatatype {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
}

export interface IBaseExtensionObjectObject {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: any[];
  url?: string;
  value?: IBaseDatatype;
}

export interface IBaseMetaType {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  lastUpdated?: Date;
  profile?: IPrimitiveTypeString[];
  security?: IBaseCoding[];
  tag?: IBaseCoding[];
  versionId?: string;
}

export interface IBaseResource {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  meta?: IBaseMetaType;
  idElement?: IIdType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
}

export interface IIdType {
  valueAsString?: string;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  baseUrl?: string;
  idPart?: string;
  /** @format int64 */
  idPartAsLong?: number;
  resourceType?: string;
  value?: string;
  versionIdPart?: string;
  /** @format int64 */
  versionIdPartAsLong?: number;
  absolute?: boolean;
  empty?: boolean;
  idPartValid?: boolean;
  idPartValidLong?: boolean;
  local?: boolean;
  versionIdPartValidLong?: boolean;
}

export interface IPrimitiveTypeObject {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  valueAsString?: string;
  value?: any;
}

export interface IPrimitiveTypeString {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  valueAsString?: string;
  value?: string;
}

export interface IdType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  primitive?: boolean;
  myBaseUrl?: string;
  myHaveComponentParts?: boolean;
  myResourceType?: string;
  myUnqualifiedId?: string;
  myUnqualifiedVersionId?: string;
  baseUrl?: string;
  idPart?: string;
  idPartAsBigDecimal?: number;
  /** @format int64 */
  idPartAsLong?: number;
  resourceType?: string;
  value?: string;
  valueAsString?: string;
  versionIdPart?: string;
  /** @format int64 */
  versionIdPartAsLong?: number;
  absolute?: boolean;
  empty?: boolean;
  idPartValid?: boolean;
  idPartValidLong?: boolean;
  local?: boolean;
  urn?: boolean;
  versionIdPartValidLong?: boolean;
}

export interface Identifier {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  use?: EnumerationIdentifierUse;
  type?: CodeableConcept;
  system?: UriType;
  value?: StringType;
  period?: Period;
  assigner?: Reference;
  assignerTarget?: Organization;
  useElement?: EnumerationIdentifierUse;
  systemElement?: UriType;
  valueElement?: StringType;
  empty?: boolean;
}

export enum IdentifierUse {
  USUAL = 'USUAL',
  OFFICIAL = 'OFFICIAL',
  TEMP = 'TEMP',
  SECONDARY = 'SECONDARY',
  OLD = 'OLD',
  NULL = 'NULL',
}

export interface InstantType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  valueAsString?: string;
  myCoercedValue?: Date;
  myStringValue?: string;
  value?: Date;
  empty?: boolean;
  primitive?: boolean;
  myFractionalSeconds?: string;
  myPrecision?: TemporalPrecisionEnum;
  myTimeZone?: TimeZone;
  myTimeZoneZulu?: boolean;
  /** @format int32 */
  day?: number;
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  millis?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  month?: number;
  /** @format float */
  secondsMilli?: number;
  /** @format int64 */
  nanos?: number;
  precision?: TemporalPrecisionEnum;
  /** @format int32 */
  second?: number;
  timeZone?: TimeZone;
  valueAsCalendar?: GregorianCalendar;
  /** @format int32 */
  year?: number;
  timeZoneZulu?: boolean;
  today?: boolean;
  valueAsV3String?: string;
  dateTime?: boolean;
  highEdge?: BaseDateTimeType;
  defaultPrecisionForDatatype?: TemporalPrecisionEnum;
}

export interface IntegerType {
  valueAsString?: string;
  /** @format int32 */
  value?: number;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  /** @format int32 */
  myCoercedValue?: number;
  myStringValue?: string;
  primitive?: boolean;
}

export interface LegalLanguageComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  content?: Type;
  contentAttachment?: Attachment;
  contentReference?: Reference;
  empty?: boolean;
}

export enum Level {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  NORMAL = 'NORMAL',
  INTENSE = 'INTENSE',
}

export enum LinkType {
  REPLACEDBY = 'REPLACEDBY',
  REPLACES = 'REPLACES',
  REFER = 'REFER',
  SEEALSO = 'SEEALSO',
  NULL = 'NULL',
}

/** @format date */
export type LocalDate = string;

/** @format date-time */
export type LocalDateTime = string;

export interface Locale {
  language?: string;
  script?: string;
  country?: string;
  variant?: string;
  /** @uniqueItems true */
  extensionKeys?: string[];
  /** @uniqueItems true */
  unicodeLocaleAttributes?: string[];
  /** @uniqueItems true */
  unicodeLocaleKeys?: string[];
  iSO3Language?: string;
  iSO3Country?: string;
  displayLanguage?: string;
  displayScript?: string;
  displayCountry?: string;
  displayVariant?: string;
  displayName?: string;
}

export interface Location {
  /** @format int32 */
  line?: number;
  /** @format int32 */
  column?: number;
}

export interface Location1 {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationLocationStatus;
  operationalStatus?: Coding;
  name?: StringType;
  alias?: StringType[];
  description?: StringType;
  mode?: EnumerationLocationMode;
  type?: CodeableConcept[];
  telecom?: ContactPoint[];
  address?: Address;
  physicalType?: CodeableConcept;
  position?: LocationPositionComponent;
  managingOrganization?: Reference;
  managingOrganizationTarget?: Organization;
  partOf?: Reference;
  partOfTarget?: Location1;
  hoursOfOperation?: LocationHoursOfOperationComponent[];
  availabilityExceptions?: StringType;
  endpoint?: Reference[];
  endpointTarget?: Endpoint[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationLocationStatus;
  nameElement?: StringType;
  descriptionElement?: StringType;
  modeElement?: EnumerationLocationMode;
  typeFirstRep?: CodeableConcept;
  telecomFirstRep?: ContactPoint;
  hoursOfOperationFirstRep?: LocationHoursOfOperationComponent;
  availabilityExceptionsElement?: StringType;
  endpointFirstRep?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface LocationHoursOfOperationComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  daysOfWeek?: {
    valueAsString?: string;
    value?: DaysOfWeek;
    empty?: boolean;
    formatCommentsPre?: string[];
    formatCommentsPost?: string[];
    extension?: IBaseExtensionObjectObject[];
    userData?: Record<string, any>;
    booleanPrimitive?: boolean;
    dateTime?: boolean;
    metadataBased?: boolean;
    resource?: boolean;
    xhtml?: XhtmlNode;
    id?: StringType;
    disallowExtensions?: boolean;
    idElement?: StringType;
    extensionFirstRep?: Extension;
    idBase?: string;
    myCoercedValue?: DaysOfWeek;
    myStringValue?: string;
    primitive?: boolean;
    myEnumFactory?: EnumFactoryDaysOfWeek;
    enumFactory?: EnumFactoryDaysOfWeek;
    system?: string;
    version?: string;
    code?: string;
    display?: string;
  }[];
  allDay?: BooleanType;
  openingTime?: TimeType;
  closingTime?: TimeType;
  allDayElement?: BooleanType;
  openingTimeElement?: TimeType;
  closingTimeElement?: TimeType;
  empty?: boolean;
}

export enum LocationMode {
  INSTANCE = 'INSTANCE',
  KIND = 'KIND',
  NULL = 'NULL',
}

export interface LocationPositionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  longitude?: DecimalType;
  latitude?: DecimalType;
  altitude?: DecimalType;
  longitudeElement?: DecimalType;
  latitudeElement?: DecimalType;
  altitudeElement?: DecimalType;
  empty?: boolean;
}

export enum LocationStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  INACTIVE = 'INACTIVE',
  NULL = 'NULL',
}

export interface MarkdownType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
  valueNotNull?: string;
}

export interface Meta {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  versionId?: IdType;
  lastUpdated?: InstantType;
  source?: UriType;
  profile?: CanonicalType[];
  security?: Coding[];
  tag?: Coding[];
  versionIdElement?: IdType;
  lastUpdatedElement?: InstantType;
  sourceElement?: UriType;
  securityFirstRep?: Coding;
  tagFirstRep?: Coding;
  empty?: boolean;
}

export interface Money {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  value?: DecimalType;
  currency?: CodeType;
  valueElement?: DecimalType;
  currencyElement?: CodeType;
  empty?: boolean;
}

export enum NameUse {
  USUAL = 'USUAL',
  OFFICIAL = 'OFFICIAL',
  TEMP = 'TEMP',
  NICKNAME = 'NICKNAME',
  ANONYMOUS = 'ANONYMOUS',
  OLD = 'OLD',
  MAIDEN = 'MAIDEN',
  NULL = 'NULL',
}

export interface Narrative {
  divAsString?: string;
  statusAsString?: string;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  status?: EnumerationNarrativeStatus;
  div?: XhtmlNode;
  statusElement?: EnumerationNarrativeStatus;
  empty?: boolean;
}

export enum NarrativeStatus {
  GENERATED = 'GENERATED',
  EXTENSIONS = 'EXTENSIONS',
  ADDITIONAL = 'ADDITIONAL',
  EMPTY = 'EMPTY',
  NULL = 'NULL',
}

export enum NodeType {
  Element = 'Element',
  Text = 'Text',
  Comment = 'Comment',
  DocType = 'DocType',
  Document = 'Document',
  Instruction = 'Instruction',
}

export interface OnboardingDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  email?: string;
  fullName?: string;
  BirthDate?: LocalDate;
  gender?: Gender;
  ablationDate?: LocalDate;
  /** @format int32 */
  height?: number;
  /** @format double */
  weight?: number;
  /** @format int32 */
  waistSize?: number;
  bloodPressure?: string;
  birthDate?: LocalDate;
}

export interface Organization {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  active?: BooleanType;
  type?: CodeableConcept[];
  name?: StringType;
  alias?: StringType[];
  telecom?: ContactPoint[];
  address?: Address[];
  partOf?: Reference;
  partOfTarget?: Organization;
  contact?: OrganizationContactComponent[];
  endpoint?: Reference[];
  endpointTarget?: Endpoint[];
  identifierFirstRep?: Identifier;
  activeElement?: BooleanType;
  typeFirstRep?: CodeableConcept;
  nameElement?: StringType;
  telecomFirstRep?: ContactPoint;
  addressFirstRep?: Address;
  contactFirstRep?: OrganizationContactComponent;
  endpointFirstRep?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface OrganizationContactComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  purpose?: CodeableConcept;
  name?: HumanName;
  telecom?: ContactPoint[];
  address?: Address;
  telecomFirstRep?: ContactPoint;
  empty?: boolean;
}

export enum ParticipantRequired {
  REQUIRED = 'REQUIRED',
  OPTIONAL = 'OPTIONAL',
  INFORMATIONONLY = 'INFORMATIONONLY',
  NULL = 'NULL',
}

export enum ParticipationStatus {
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  TENTATIVE = 'TENTATIVE',
  NEEDSACTION = 'NEEDSACTION',
  NULL = 'NULL',
}

export interface Patient {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  active?: BooleanType;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: EnumerationAdministrativeGender;
  birthDate?: DateType;
  deceased?: Type;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  multipleBirth?: Type;
  photo?: Attachment[];
  contact?: ContactComponent[];
  communication?: PatientCommunicationComponent[];
  generalPractitioner?: Reference[];
  generalPractitionerTarget?: Resource[];
  managingOrganization?: Reference;
  managingOrganizationTarget?: Organization;
  link?: PatientLinkComponent[];
  identifierFirstRep?: Identifier;
  activeElement?: BooleanType;
  nameFirstRep?: HumanName;
  telecomFirstRep?: ContactPoint;
  genderElement?: EnumerationAdministrativeGender;
  birthDateElement?: DateType;
  deceasedBooleanType?: BooleanType;
  deceasedDateTimeType?: DateTimeType;
  addressFirstRep?: Address;
  multipleBirthBooleanType?: BooleanType;
  multipleBirthIntegerType?: IntegerType;
  photoFirstRep?: Attachment;
  contactFirstRep?: ContactComponent;
  communicationFirstRep?: PatientCommunicationComponent;
  generalPractitionerFirstRep?: Reference;
  linkFirstRep?: PatientLinkComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface PatientCommunicationComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  language?: CodeableConcept;
  preferred?: BooleanType;
  preferredElement?: BooleanType;
  empty?: boolean;
}

export interface PatientLinkComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  other?: Reference;
  otherTarget?: Resource;
  type?: EnumerationLinkType;
  typeElement?: EnumerationLinkType;
  empty?: boolean;
}

export interface Period {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  start?: DateTimeType;
  end?: DateTimeType;
  startElement?: DateTimeType;
  endElement?: DateTimeType;
  empty?: boolean;
}

export interface PositiveIntType {
  valueAsString?: string;
  /** @format int32 */
  value?: number;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  /** @format int32 */
  myCoercedValue?: number;
  myStringValue?: string;
  primitive?: boolean;
}

export interface Provenance {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  target?: Reference[];
  targetTarget?: Resource[];
  occurred?: Type;
  recorded?: InstantType;
  policy?: UriType[];
  location?: Reference;
  locationTarget?: Location1;
  reason?: CodeableConcept[];
  activity?: CodeableConcept;
  agent?: ProvenanceAgentComponent[];
  entity?: ProvenanceEntityComponent[];
  signature?: Signature[];
  targetFirstRep?: Reference;
  occurredPeriod?: Period;
  occurredDateTimeType?: DateTimeType;
  recordedElement?: InstantType;
  reasonFirstRep?: CodeableConcept;
  agentFirstRep?: ProvenanceAgentComponent;
  entityFirstRep?: ProvenanceEntityComponent;
  signatureFirstRep?: Signature;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface ProvenanceAgentComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: CodeableConcept;
  role?: CodeableConcept[];
  who?: Reference;
  whoTarget?: Resource;
  onBehalfOf?: Reference;
  onBehalfOfTarget?: Resource;
  roleFirstRep?: CodeableConcept;
  empty?: boolean;
}

export interface ProvenanceEntityComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  role?: EnumerationProvenanceEntityRole;
  what?: Reference;
  whatTarget?: Resource;
  agent?: ProvenanceAgentComponent[];
  roleElement?: EnumerationProvenanceEntityRole;
  agentFirstRep?: ProvenanceAgentComponent;
  empty?: boolean;
}

export enum ProvenanceEntityRole {
  DERIVATION = 'DERIVATION',
  REVISION = 'REVISION',
  QUOTATION = 'QUOTATION',
  SOURCE = 'SOURCE',
  REMOVAL = 'REMOVAL',
  NULL = 'NULL',
}

export enum PublicationStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED',
  UNKNOWN = 'UNKNOWN',
  NULL = 'NULL',
}

export interface Quantity {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  value?: DecimalType;
  comparator?: EnumerationQuantityComparator;
  unit?: StringType;
  system?: UriType;
  code?: CodeType;
  valueElement?: DecimalType;
  comparatorElement?: EnumerationQuantityComparator;
  unitElement?: StringType;
  systemElement?: UriType;
  codeElement?: CodeType;
  empty?: boolean;
  version?: string;
  display?: string;
}

export enum QuantityComparator {
  LESS_THAN = 'LESS_THAN',
  LESS_OR_EQUAL = 'LESS_OR_EQUAL',
  GREATER_OR_EQUAL = 'GREATER_OR_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  NULL = 'NULL',
}

export interface Questionnaire {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  derivedFrom?: CanonicalType[];
  subjectType?: CodeType[];
  purpose?: MarkdownType;
  copyright?: MarkdownType;
  approvalDate?: DateType;
  lastReviewDate?: DateType;
  effectivePeriod?: Period;
  code?: Coding[];
  item?: QuestionnaireItemComponent[];
  urlElement?: UriType;
  url?: string;
  identifierFirstRep?: Identifier;
  versionElement?: StringType;
  version?: string;
  nameElement?: StringType;
  name?: string;
  titleElement?: StringType;
  title?: string;
  statusElement?: EnumerationPublicationStatus;
  status?: PublicationStatus;
  experimentalElement?: BooleanType;
  experimental?: boolean;
  dateElement?: DateTimeType;
  date?: Date;
  publisherElement?: StringType;
  publisher?: string;
  contact?: ContactDetail[];
  contactFirstRep?: ContactDetail;
  descriptionElement?: MarkdownType;
  description?: string;
  useContext?: UsageContext[];
  useContextFirstRep?: UsageContext;
  jurisdiction?: CodeableConcept[];
  jurisdictionFirstRep?: CodeableConcept;
  purposeElement?: MarkdownType;
  copyrightElement?: MarkdownType;
  approvalDateElement?: DateType;
  lastReviewDateElement?: DateType;
  codeFirstRep?: Coding;
  itemFirstRep?: QuestionnaireItemComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface QuestionnaireDTO {
  fHIR?: IBaseResource;
  /** @format int64 */
  id?: number;
  FHIR?: Questionnaire;
}

export interface QuestionnaireItemAnswerOptionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  value?: Type;
  initialSelected?: BooleanType;
  valueIntegerType?: IntegerType;
  valueDateType?: DateType;
  valueTimeType?: TimeType;
  valueStringType?: StringType;
  valueCoding?: Coding;
  valueReference?: Reference;
  initialSelectedElement?: BooleanType;
  empty?: boolean;
}

export interface QuestionnaireItemComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  linkId?: StringType;
  definition?: UriType;
  code?: Coding[];
  prefix?: StringType;
  text?: StringType;
  type?: EnumerationQuestionnaireItemType;
  enableWhen?: QuestionnaireItemEnableWhenComponent[];
  enableBehavior?: EnumerationEnableWhenBehavior;
  required?: BooleanType;
  repeats?: BooleanType;
  readOnly?: BooleanType;
  maxLength?: IntegerType;
  answerValueSet?: CanonicalType;
  answerOption?: QuestionnaireItemAnswerOptionComponent[];
  initial?: QuestionnaireItemInitialComponent[];
  item?: QuestionnaireItemComponent[];
  linkIdElement?: StringType;
  definitionElement?: UriType;
  codeFirstRep?: Coding;
  prefixElement?: StringType;
  textElement?: StringType;
  typeElement?: EnumerationQuestionnaireItemType;
  enableWhenFirstRep?: QuestionnaireItemEnableWhenComponent;
  enableBehaviorElement?: EnumerationEnableWhenBehavior;
  requiredElement?: BooleanType;
  repeatsElement?: BooleanType;
  readOnlyElement?: BooleanType;
  maxLengthElement?: IntegerType;
  answerValueSetElement?: CanonicalType;
  answerOptionFirstRep?: QuestionnaireItemAnswerOptionComponent;
  initialFirstRep?: QuestionnaireItemInitialComponent;
  itemFirstRep?: QuestionnaireItemComponent;
  empty?: boolean;
}

export interface QuestionnaireItemEnableWhenComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  question?: StringType;
  operator?: EnumerationQuestionnaireItemOperator;
  answer?: Type;
  questionElement?: StringType;
  operatorElement?: EnumerationQuestionnaireItemOperator;
  answerBooleanType?: BooleanType;
  answerDecimalType?: DecimalType;
  answerIntegerType?: IntegerType;
  answerDateType?: DateType;
  answerDateTimeType?: DateTimeType;
  answerTimeType?: TimeType;
  answerStringType?: StringType;
  answerCoding?: Coding;
  answerQuantity?: Quantity;
  answerReference?: Reference;
  empty?: boolean;
}

export interface QuestionnaireItemInitialComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  value?: Type;
  valueBooleanType?: BooleanType;
  valueDecimalType?: DecimalType;
  valueIntegerType?: IntegerType;
  valueDateType?: DateType;
  valueDateTimeType?: DateTimeType;
  valueTimeType?: TimeType;
  valueStringType?: StringType;
  valueUriType?: UriType;
  valueAttachment?: Attachment;
  valueCoding?: Coding;
  valueQuantity?: Quantity;
  valueReference?: Reference;
  empty?: boolean;
}

export enum QuestionnaireItemOperator {
  EXISTS = 'EXISTS',
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  LESS_THAN = 'LESS_THAN',
  GREATER_OR_EQUAL = 'GREATER_OR_EQUAL',
  LESS_OR_EQUAL = 'LESS_OR_EQUAL',
  NULL = 'NULL',
}

export enum QuestionnaireItemType {
  GROUP = 'GROUP',
  DISPLAY = 'DISPLAY',
  QUESTION = 'QUESTION',
  BOOLEAN = 'BOOLEAN',
  DECIMAL = 'DECIMAL',
  INTEGER = 'INTEGER',
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  TIME = 'TIME',
  STRING = 'STRING',
  TEXT = 'TEXT',
  URL = 'URL',
  CHOICE = 'CHOICE',
  OPENCHOICE = 'OPENCHOICE',
  ATTACHMENT = 'ATTACHMENT',
  REFERENCE = 'REFERENCE',
  QUANTITY = 'QUANTITY',
  NULL = 'NULL',
}

export interface QuestionnaireResponse {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier;
  basedOn?: Reference[];
  basedOnTarget?: Resource[];
  partOf?: Reference[];
  partOfTarget?: Resource[];
  questionnaire?: CanonicalType;
  status?: EnumerationQuestionnaireResponseStatus;
  subject?: Reference;
  subjectTarget?: Resource;
  encounter?: Reference;
  encounterTarget?: Encounter;
  authored?: DateTimeType;
  author?: Reference;
  authorTarget?: Resource;
  source?: Reference;
  sourceTarget?: Resource;
  item?: QuestionnaireResponseItemComponent[];
  basedOnFirstRep?: Reference;
  partOfFirstRep?: Reference;
  questionnaireElement?: CanonicalType;
  statusElement?: EnumerationQuestionnaireResponseStatus;
  authoredElement?: DateTimeType;
  itemFirstRep?: QuestionnaireResponseItemComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface QuestionnaireResponseDTO {
  fHIR?: IBaseResource;
  /** @format int64 */
  id?: number;
  owner?: UUID;
  FHIR?: QuestionnaireResponse;
}

export interface QuestionnaireResponseItemAnswerComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  value?: Type;
  item?: QuestionnaireResponseItemComponent[];
  valueBooleanType?: BooleanType;
  valueDecimalType?: DecimalType;
  valueIntegerType?: IntegerType;
  valueDateType?: DateType;
  valueDateTimeType?: DateTimeType;
  valueTimeType?: TimeType;
  valueStringType?: StringType;
  valueUriType?: UriType;
  valueAttachment?: Attachment;
  valueCoding?: Coding;
  valueQuantity?: Quantity;
  valueReference?: Reference;
  itemFirstRep?: QuestionnaireResponseItemComponent;
  empty?: boolean;
}

export interface QuestionnaireResponseItemComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  linkId?: StringType;
  definition?: UriType;
  text?: StringType;
  answer?: QuestionnaireResponseItemAnswerComponent[];
  item?: QuestionnaireResponseItemComponent[];
  linkIdElement?: StringType;
  definitionElement?: UriType;
  textElement?: StringType;
  answerFirstRep?: QuestionnaireResponseItemAnswerComponent;
  itemFirstRep?: QuestionnaireResponseItemComponent;
  empty?: boolean;
}

export enum QuestionnaireResponseStatus {
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
  AMENDED = 'AMENDED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  STOPPED = 'STOPPED',
  NULL = 'NULL',
}

export interface RAPADTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export interface Range {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  low?: Quantity;
  high?: Quantity;
  empty?: boolean;
}

export interface Ratio {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  numerator?: Quantity;
  denominator?: Quantity;
  empty?: boolean;
}

export interface RecipeDTO {
  /** @format int64 */
  id?: number;
  URL?: string;
  title?: string;
  description?: string;
  imageURL?: string;
  /** @format int32 */
  cookingTime?: number;
  uRL?: string;
}

export interface Reference {
  referenceElement?: IIdType;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  reference?: StringType;
  type?: UriType;
  identifier?: Identifier;
  display?: StringType;
  referenceElement_?: StringType;
  typeElement?: UriType;
  displayElement?: StringType;
  empty?: boolean;
}

export interface Resource {
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  id?: IdType;
  meta?: Meta;
  implicitRules?: UriType;
  language?: CodeType;
  idElement?: IdType;
  idPart?: string;
  implicitRulesElement?: UriType;
  languageElement?: CodeType;
  empty?: boolean;
  idBase?: string;
  resourceType?: ResourceType;
}

export enum ResourceType {
  Account = 'Account',
  ActivityDefinition = 'ActivityDefinition',
  AdverseEvent = 'AdverseEvent',
  AllergyIntolerance = 'AllergyIntolerance',
  Appointment = 'Appointment',
  AppointmentResponse = 'AppointmentResponse',
  AuditEvent = 'AuditEvent',
  Basic = 'Basic',
  Binary = 'Binary',
  BiologicallyDerivedProduct = 'BiologicallyDerivedProduct',
  BodyStructure = 'BodyStructure',
  Bundle = 'Bundle',
  CapabilityStatement = 'CapabilityStatement',
  CarePlan = 'CarePlan',
  CareTeam = 'CareTeam',
  CatalogEntry = 'CatalogEntry',
  ChargeItem = 'ChargeItem',
  ChargeItemDefinition = 'ChargeItemDefinition',
  Claim = 'Claim',
  ClaimResponse = 'ClaimResponse',
  ClinicalImpression = 'ClinicalImpression',
  CodeSystem = 'CodeSystem',
  Communication = 'Communication',
  CommunicationRequest = 'CommunicationRequest',
  CompartmentDefinition = 'CompartmentDefinition',
  Composition = 'Composition',
  ConceptMap = 'ConceptMap',
  Condition = 'Condition',
  Consent = 'Consent',
  Contract = 'Contract',
  Coverage = 'Coverage',
  CoverageEligibilityRequest = 'CoverageEligibilityRequest',
  CoverageEligibilityResponse = 'CoverageEligibilityResponse',
  DetectedIssue = 'DetectedIssue',
  Device = 'Device',
  DeviceDefinition = 'DeviceDefinition',
  DeviceMetric = 'DeviceMetric',
  DeviceRequest = 'DeviceRequest',
  DeviceUseStatement = 'DeviceUseStatement',
  DiagnosticReport = 'DiagnosticReport',
  DocumentManifest = 'DocumentManifest',
  DocumentReference = 'DocumentReference',
  EffectEvidenceSynthesis = 'EffectEvidenceSynthesis',
  Encounter = 'Encounter',
  Endpoint = 'Endpoint',
  EnrollmentRequest = 'EnrollmentRequest',
  EnrollmentResponse = 'EnrollmentResponse',
  EpisodeOfCare = 'EpisodeOfCare',
  EventDefinition = 'EventDefinition',
  Evidence = 'Evidence',
  EvidenceVariable = 'EvidenceVariable',
  ExampleScenario = 'ExampleScenario',
  ExplanationOfBenefit = 'ExplanationOfBenefit',
  FamilyMemberHistory = 'FamilyMemberHistory',
  Flag = 'Flag',
  Goal = 'Goal',
  GraphDefinition = 'GraphDefinition',
  Group = 'Group',
  GuidanceResponse = 'GuidanceResponse',
  HealthcareService = 'HealthcareService',
  ImagingStudy = 'ImagingStudy',
  Immunization = 'Immunization',
  ImmunizationEvaluation = 'ImmunizationEvaluation',
  ImmunizationRecommendation = 'ImmunizationRecommendation',
  ImplementationGuide = 'ImplementationGuide',
  InsurancePlan = 'InsurancePlan',
  Invoice = 'Invoice',
  Library = 'Library',
  Linkage = 'Linkage',
  List = 'List',
  Location = 'Location',
  Measure = 'Measure',
  MeasureReport = 'MeasureReport',
  Media = 'Media',
  Medication = 'Medication',
  MedicationAdministration = 'MedicationAdministration',
  MedicationDispense = 'MedicationDispense',
  MedicationKnowledge = 'MedicationKnowledge',
  MedicationRequest = 'MedicationRequest',
  MedicationStatement = 'MedicationStatement',
  MedicinalProduct = 'MedicinalProduct',
  MedicinalProductAuthorization = 'MedicinalProductAuthorization',
  MedicinalProductContraindication = 'MedicinalProductContraindication',
  MedicinalProductIndication = 'MedicinalProductIndication',
  MedicinalProductIngredient = 'MedicinalProductIngredient',
  MedicinalProductInteraction = 'MedicinalProductInteraction',
  MedicinalProductManufactured = 'MedicinalProductManufactured',
  MedicinalProductPackaged = 'MedicinalProductPackaged',
  MedicinalProductPharmaceutical = 'MedicinalProductPharmaceutical',
  MedicinalProductUndesirableEffect = 'MedicinalProductUndesirableEffect',
  MessageDefinition = 'MessageDefinition',
  MessageHeader = 'MessageHeader',
  MolecularSequence = 'MolecularSequence',
  NamingSystem = 'NamingSystem',
  NutritionOrder = 'NutritionOrder',
  Observation = 'Observation',
  ObservationDefinition = 'ObservationDefinition',
  OperationDefinition = 'OperationDefinition',
  OperationOutcome = 'OperationOutcome',
  Organization = 'Organization',
  OrganizationAffiliation = 'OrganizationAffiliation',
  Parameters = 'Parameters',
  Patient = 'Patient',
  PaymentNotice = 'PaymentNotice',
  PaymentReconciliation = 'PaymentReconciliation',
  Person = 'Person',
  PlanDefinition = 'PlanDefinition',
  Practitioner = 'Practitioner',
  PractitionerRole = 'PractitionerRole',
  Procedure = 'Procedure',
  Provenance = 'Provenance',
  Questionnaire = 'Questionnaire',
  QuestionnaireResponse = 'QuestionnaireResponse',
  RelatedPerson = 'RelatedPerson',
  RequestGroup = 'RequestGroup',
  ResearchDefinition = 'ResearchDefinition',
  ResearchElementDefinition = 'ResearchElementDefinition',
  ResearchStudy = 'ResearchStudy',
  ResearchSubject = 'ResearchSubject',
  RiskAssessment = 'RiskAssessment',
  RiskEvidenceSynthesis = 'RiskEvidenceSynthesis',
  Schedule = 'Schedule',
  SearchParameter = 'SearchParameter',
  ServiceRequest = 'ServiceRequest',
  Slot = 'Slot',
  Specimen = 'Specimen',
  SpecimenDefinition = 'SpecimenDefinition',
  StructureDefinition = 'StructureDefinition',
  StructureMap = 'StructureMap',
  Subscription = 'Subscription',
  Substance = 'Substance',
  SubstanceNucleicAcid = 'SubstanceNucleicAcid',
  SubstancePolymer = 'SubstancePolymer',
  SubstanceProtein = 'SubstanceProtein',
  SubstanceReferenceInformation = 'SubstanceReferenceInformation',
  SubstanceSourceMaterial = 'SubstanceSourceMaterial',
  SubstanceSpecification = 'SubstanceSpecification',
  SupplyDelivery = 'SupplyDelivery',
  SupplyRequest = 'SupplyRequest',
  Task = 'Task',
  TerminologyCapabilities = 'TerminologyCapabilities',
  TestReport = 'TestReport',
  TestScript = 'TestScript',
  ValueSet = 'ValueSet',
  VerificationResult = 'VerificationResult',
  VisionPrescription = 'VisionPrescription',
}

export interface Schedule {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  active?: BooleanType;
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  actor?: Reference[];
  actorTarget?: Resource[];
  planningHorizon?: Period;
  comment?: StringType;
  identifierFirstRep?: Identifier;
  activeElement?: BooleanType;
  serviceCategoryFirstRep?: CodeableConcept;
  serviceTypeFirstRep?: CodeableConcept;
  specialtyFirstRep?: CodeableConcept;
  actorFirstRep?: Reference;
  commentElement?: StringType;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface SecurityLabelComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  number?: UnsignedIntType[];
  classification?: Coding;
  category?: Coding[];
  control?: Coding[];
  categoryFirstRep?: Coding;
  controlFirstRep?: Coding;
  empty?: boolean;
}

export interface ServiceRequest {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  instantiatesCanonical?: CanonicalType[];
  instantiatesUri?: UriType[];
  basedOn?: Reference[];
  basedOnTarget?: Resource[];
  replaces?: Reference[];
  replacesTarget?: ServiceRequest[];
  requisition?: Identifier;
  status?: EnumerationServiceRequestStatus;
  intent?: EnumerationServiceRequestIntent;
  category?: CodeableConcept[];
  priority?: EnumerationServiceRequestPriority;
  doNotPerform?: BooleanType;
  code?: CodeableConcept;
  orderDetail?: CodeableConcept[];
  quantity?: Type;
  subject?: Reference;
  subjectTarget?: Resource;
  encounter?: Reference;
  encounterTarget?: Encounter;
  occurrence?: Type;
  asNeeded?: Type;
  authoredOn?: DateTimeType;
  requester?: Reference;
  requesterTarget?: Resource;
  performerType?: CodeableConcept;
  performer?: Reference[];
  performerTarget?: Resource[];
  locationCode?: CodeableConcept[];
  locationReference?: Reference[];
  locationReferenceTarget?: Location1[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  reasonReferenceTarget?: Resource[];
  insurance?: Reference[];
  insuranceTarget?: Resource[];
  supportingInfo?: Reference[];
  supportingInfoTarget?: Resource[];
  specimen?: Reference[];
  specimenTarget?: Specimen[];
  bodySite?: CodeableConcept[];
  note?: Annotation[];
  patientInstruction?: StringType;
  relevantHistory?: Reference[];
  relevantHistoryTarget?: Provenance[];
  identifierFirstRep?: Identifier;
  basedOnFirstRep?: Reference;
  replacesFirstRep?: Reference;
  statusElement?: EnumerationServiceRequestStatus;
  intentElement?: EnumerationServiceRequestIntent;
  categoryFirstRep?: CodeableConcept;
  priorityElement?: EnumerationServiceRequestPriority;
  doNotPerformElement?: BooleanType;
  orderDetailFirstRep?: CodeableConcept;
  quantityQuantity?: Quantity;
  quantityRatio?: Ratio;
  quantityRange?: Range;
  occurrenceDateTimeType?: DateTimeType;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;
  asNeededBooleanType?: BooleanType;
  asNeededCodeableConcept?: CodeableConcept;
  authoredOnElement?: DateTimeType;
  performerFirstRep?: Reference;
  locationCodeFirstRep?: CodeableConcept;
  locationReferenceFirstRep?: Reference;
  reasonCodeFirstRep?: CodeableConcept;
  reasonReferenceFirstRep?: Reference;
  insuranceFirstRep?: Reference;
  supportingInfoFirstRep?: Reference;
  specimenFirstRep?: Reference;
  bodySiteFirstRep?: CodeableConcept;
  noteFirstRep?: Annotation;
  patientInstructionElement?: StringType;
  relevantHistoryFirstRep?: Reference;
  empty?: boolean;
  resourceType?: ResourceType;
}

export enum ServiceRequestIntent {
  PROPOSAL = 'PROPOSAL',
  PLAN = 'PLAN',
  DIRECTIVE = 'DIRECTIVE',
  ORDER = 'ORDER',
  ORIGINALORDER = 'ORIGINALORDER',
  REFLEXORDER = 'REFLEXORDER',
  FILLERORDER = 'FILLERORDER',
  INSTANCEORDER = 'INSTANCEORDER',
  OPTION = 'OPTION',
  NULL = 'NULL',
}

export enum ServiceRequestPriority {
  ROUTINE = 'ROUTINE',
  URGENT = 'URGENT',
  ASAP = 'ASAP',
  STAT = 'STAT',
  NULL = 'NULL',
}

export enum ServiceRequestStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  ONHOLD = 'ONHOLD',
  REVOKED = 'REVOKED',
  COMPLETED = 'COMPLETED',
  ENTEREDINERROR = 'ENTEREDINERROR',
  UNKNOWN = 'UNKNOWN',
  NULL = 'NULL',
}

export interface SignatoryComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  type?: Coding;
  party?: Reference;
  partyTarget?: Resource;
  signature?: Signature[];
  signatureFirstRep?: Signature;
  empty?: boolean;
}

export interface Signature {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  type?: Coding[];
  when?: InstantType;
  who?: Reference;
  whoTarget?: Resource;
  onBehalfOf?: Reference;
  onBehalfOfTarget?: Resource;
  targetFormat?: CodeType;
  sigFormat?: CodeType;
  data?: Base64BinaryType;
  typeFirstRep?: Coding;
  whenElement?: InstantType;
  targetFormatElement?: CodeType;
  sigFormatElement?: CodeType;
  dataElement?: Base64BinaryType;
  empty?: boolean;
}

export interface Slot {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  appointmentType?: CodeableConcept;
  schedule?: Reference;
  scheduleTarget?: Schedule;
  status?: EnumerationSlotStatus;
  start?: InstantType;
  end?: InstantType;
  overbooked?: BooleanType;
  comment?: StringType;
  identifierFirstRep?: Identifier;
  serviceCategoryFirstRep?: CodeableConcept;
  serviceTypeFirstRep?: CodeableConcept;
  specialtyFirstRep?: CodeableConcept;
  statusElement?: EnumerationSlotStatus;
  startElement?: InstantType;
  endElement?: InstantType;
  overbookedElement?: BooleanType;
  commentElement?: StringType;
  empty?: boolean;
  resourceType?: ResourceType;
}

export enum SlotStatus {
  BUSY = 'BUSY',
  FREE = 'FREE',
  BUSYUNAVAILABLE = 'BUSYUNAVAILABLE',
  BUSYTENTATIVE = 'BUSYTENTATIVE',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

export interface Specimen {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  accessionIdentifier?: Identifier;
  status?: EnumerationSpecimenStatus;
  type?: CodeableConcept;
  subject?: Reference;
  subjectTarget?: Resource;
  receivedTime?: DateTimeType;
  parent?: Reference[];
  parentTarget?: Specimen[];
  request?: Reference[];
  requestTarget?: ServiceRequest[];
  collection?: SpecimenCollectionComponent;
  processing?: SpecimenProcessingComponent[];
  container?: SpecimenContainerComponent[];
  condition?: CodeableConcept[];
  note?: Annotation[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationSpecimenStatus;
  receivedTimeElement?: DateTimeType;
  parentFirstRep?: Reference;
  requestFirstRep?: Reference;
  processingFirstRep?: SpecimenProcessingComponent;
  containerFirstRep?: SpecimenContainerComponent;
  conditionFirstRep?: CodeableConcept;
  noteFirstRep?: Annotation;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface SpecimenCollectionComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  collector?: Reference;
  collectorTarget?: Resource;
  collected?: Type;
  duration?: Duration;
  quantity?: Quantity;
  method?: CodeableConcept;
  bodySite?: CodeableConcept;
  fastingStatus?: Type;
  collectedDateTimeType?: DateTimeType;
  collectedPeriod?: Period;
  fastingStatusCodeableConcept?: CodeableConcept;
  fastingStatusDuration?: Duration;
  empty?: boolean;
}

export interface SpecimenContainerComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  identifier?: Identifier[];
  description?: StringType;
  type?: CodeableConcept;
  capacity?: Quantity;
  specimenQuantity?: Quantity;
  additive?: Type;
  identifierFirstRep?: Identifier;
  descriptionElement?: StringType;
  additiveCodeableConcept?: CodeableConcept;
  additiveReference?: Reference;
  empty?: boolean;
}

export interface SpecimenProcessingComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  description?: StringType;
  procedure?: CodeableConcept;
  additive?: Reference[];
  additiveTarget?: Substance[];
  time?: Type;
  descriptionElement?: StringType;
  additiveFirstRep?: Reference;
  timeDateTimeType?: DateTimeType;
  timePeriod?: Period;
  empty?: boolean;
}

export enum SpecimenStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  UNSATISFACTORY = 'UNSATISFACTORY',
  ENTEREDINERROR = 'ENTEREDINERROR',
  NULL = 'NULL',
}

export interface SprintActivityDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  task?: TaskDTO;
  completed?: boolean;
  assignedDate?: LocalDate;
}

export interface SprintDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  sprintType: SprintType;
  startDate?: LocalDate;
  endDate?: LocalDate;
  completed?: boolean;
  level?: Level;
  /** @format float */
  score?: number;
  /** @format int64 */
  userID: number;
  activities?: SprintActivityDTO[];
}

export enum SprintType {
  FOOD = 'FOOD',
  ALCOHOL = 'ALCOHOL',
  PHYSICAL = 'PHYSICAL',
}

export interface StatusHistoryComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  status?: EnumerationEncounterStatus;
  period?: Period;
  statusElement?: EnumerationEncounterStatus;
  empty?: boolean;
}

export interface StepsDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export interface StringType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
  valueNotNull?: string;
}

export interface Substance {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  id?: string;
  idElement?: IIdType;
  languageElement?: IPrimitiveTypeString;
  meta?: IBaseMetaType;
  structureFhirVersionEnum?: FhirVersionEnum;
  deleted?: boolean;
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  xhtml?: XhtmlNode;
  resource?: boolean;
  implicitRules?: UriType;
  language?: CodeType;
  idPart?: string;
  implicitRulesElement?: UriType;
  idBase?: string;
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  identifier?: Identifier[];
  status?: EnumerationFHIRSubstanceStatus;
  category?: CodeableConcept[];
  code?: CodeableConcept;
  description?: StringType;
  instance?: SubstanceInstanceComponent[];
  ingredient?: SubstanceIngredientComponent[];
  identifierFirstRep?: Identifier;
  statusElement?: EnumerationFHIRSubstanceStatus;
  categoryFirstRep?: CodeableConcept;
  descriptionElement?: StringType;
  instanceFirstRep?: SubstanceInstanceComponent;
  ingredientFirstRep?: SubstanceIngredientComponent;
  empty?: boolean;
  resourceType?: ResourceType;
}

export interface SubstanceIngredientComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  quantity?: Ratio;
  substance?: Type;
  substanceCodeableConcept?: CodeableConcept;
  substanceReference?: Reference;
  empty?: boolean;
}

export interface SubstanceInstanceComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  identifier?: Identifier;
  expiry?: DateTimeType;
  quantity?: Quantity;
  expiryElement?: DateTimeType;
  empty?: boolean;
}

export interface TaskDTO {
  /** @format int64 */
  id?: number;
  type: SprintType;
  level?: Level;
  variant?: TaskVariant;
  title?: string;
  description?: string;
  videoURL?: string;
  active?: boolean;
}

export enum TaskVariant {
  REST = 'REST',
  ACTIVE = 'ACTIVE',
}

export enum TemporalPrecisionEnum {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  DAY = 'DAY',
  MINUTE = 'MINUTE',
  SECOND = 'SECOND',
  MILLI = 'MILLI',
}

export interface TermComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  identifier?: Identifier;
  issued?: DateTimeType;
  applies?: Period;
  topic?: Type;
  type?: CodeableConcept;
  subType?: CodeableConcept;
  text?: StringType;
  securityLabel?: SecurityLabelComponent[];
  offer?: ContractOfferComponent;
  asset?: ContractAssetComponent[];
  action?: ActionComponent[];
  group?: TermComponent[];
  issuedElement?: DateTimeType;
  topicCodeableConcept?: CodeableConcept;
  topicReference?: Reference;
  textElement?: StringType;
  securityLabelFirstRep?: SecurityLabelComponent;
  assetFirstRep?: ContractAssetComponent;
  actionFirstRep?: ActionComponent;
  groupFirstRep?: TermComponent;
  empty?: boolean;
}

export interface TimeType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format float */
  second?: number;
  precision?: TemporalPrecisionEnum;
}

export interface TimeZone {
  ID?: string;
  /** @format int32 */
  rawOffset?: number;
  iD?: string;
  displayName?: string;
  /** @format int32 */
  dSTSavings?: number;
}

export interface Timing {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtension?: Extension[];
  modifierExtensionFirstRep?: Extension;
  event?: DateTimeType[];
  repeat?: TimingRepeatComponent;
  code?: CodeableConcept;
  empty?: boolean;
}

export interface TimingRepeatComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  bounds?: Type;
  count?: PositiveIntType;
  countMax?: PositiveIntType;
  duration?: DecimalType;
  durationMax?: DecimalType;
  durationUnit?: EnumerationUnitsOfTime;
  frequency?: PositiveIntType;
  frequencyMax?: PositiveIntType;
  period?: DecimalType;
  periodMax?: DecimalType;
  periodUnit?: EnumerationUnitsOfTime;
  dayOfWeek?: {
    valueAsString?: string;
    value?: DayOfWeek;
    empty?: boolean;
    formatCommentsPre?: string[];
    formatCommentsPost?: string[];
    extension?: IBaseExtensionObjectObject[];
    userData?: Record<string, any>;
    booleanPrimitive?: boolean;
    dateTime?: boolean;
    metadataBased?: boolean;
    resource?: boolean;
    xhtml?: XhtmlNode;
    id?: StringType;
    disallowExtensions?: boolean;
    idElement?: StringType;
    extensionFirstRep?: Extension;
    idBase?: string;
    myCoercedValue?: DayOfWeek;
    myStringValue?: string;
    primitive?: boolean;
    myEnumFactory?: EnumFactoryDayOfWeek;
    enumFactory?: EnumFactoryDayOfWeek;
    system?: string;
    version?: string;
    code?: string;
    display?: string;
  }[];
  timeOfDay?: TimeType[];
  when?: {
    valueAsString?: string;
    value?: EventTiming;
    empty?: boolean;
    formatCommentsPre?: string[];
    formatCommentsPost?: string[];
    extension?: IBaseExtensionObjectObject[];
    userData?: Record<string, any>;
    booleanPrimitive?: boolean;
    dateTime?: boolean;
    metadataBased?: boolean;
    resource?: boolean;
    xhtml?: XhtmlNode;
    id?: StringType;
    disallowExtensions?: boolean;
    idElement?: StringType;
    extensionFirstRep?: Extension;
    idBase?: string;
    myCoercedValue?: EventTiming;
    myStringValue?: string;
    primitive?: boolean;
    myEnumFactory?: EnumFactoryEventTiming;
    enumFactory?: EnumFactoryEventTiming;
    system?: string;
    version?: string;
    code?: string;
    display?: string;
  }[];
  offset?: UnsignedIntType;
  boundsDuration?: Duration;
  boundsRange?: Range;
  boundsPeriod?: Period;
  countElement?: PositiveIntType;
  countMaxElement?: PositiveIntType;
  durationElement?: DecimalType;
  durationMaxElement?: DecimalType;
  durationUnitElement?: EnumerationUnitsOfTime;
  frequencyElement?: PositiveIntType;
  frequencyMaxElement?: PositiveIntType;
  periodElement?: DecimalType;
  periodMaxElement?: DecimalType;
  periodUnitElement?: EnumerationUnitsOfTime;
  offsetElement?: UnsignedIntType;
  empty?: boolean;
}

export interface Type {
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
}

/**
 * @format uuid
 * @pattern [a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}
 */
export type UUID = string;

export enum UnitsOfTime {
  S = 'S',
  MIN = 'MIN',
  H = 'H',
  D = 'D',
  WK = 'WK',
  MO = 'MO',
  A = 'A',
  NULL = 'NULL',
}

export interface UnsignedIntType {
  valueAsString?: string;
  /** @format int32 */
  value?: number;
  empty?: boolean;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  /** @format int32 */
  myCoercedValue?: number;
  myStringValue?: string;
  primitive?: boolean;
}

export interface UriType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
}

export interface UrlType {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  myCoercedValue?: string;
  myStringValue?: string;
  value?: string;
  valueAsString?: string;
  empty?: boolean;
  primitive?: boolean;
}

export interface UsageContext {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  extension?: Extension[];
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  code?: Coding;
  value?: Type;
  valueCodeableConcept?: CodeableConcept;
  valueQuantity?: Quantity;
  valueRange?: Range;
  valueReference?: Reference;
  empty?: boolean;
}

export interface UserDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  email: string;
  fullName: string;
  birthDate: LocalDate;
  gender?: Gender;
  ablationDate?: LocalDate;
  onboarded?: boolean;
}

export interface ValuedItemComponent {
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  extension?: IBaseExtensionObjectObject[];
  modifierExtension?: IBaseExtensionObjectObject[];
  userData?: Record<string, any>;
  primitive?: boolean;
  booleanPrimitive?: boolean;
  dateTime?: boolean;
  metadataBased?: boolean;
  resource?: boolean;
  xhtml?: XhtmlNode;
  id?: StringType;
  disallowExtensions?: boolean;
  idElement?: StringType;
  extensionFirstRep?: Extension;
  idBase?: string;
  modifierExtensionFirstRep?: Extension;
  entity?: Type;
  identifier?: Identifier;
  effectiveTime?: DateTimeType;
  quantity?: Quantity;
  unitPrice?: Money;
  factor?: DecimalType;
  points?: DecimalType;
  net?: Money;
  payment?: StringType;
  paymentDate?: DateTimeType;
  responsible?: Reference;
  responsibleTarget?: Resource;
  recipient?: Reference;
  recipientTarget?: Resource;
  linkId?: StringType[];
  securityLabelNumber?: UnsignedIntType[];
  entityCodeableConcept?: CodeableConcept;
  entityReference?: Reference;
  effectiveTimeElement?: DateTimeType;
  factorElement?: DecimalType;
  pointsElement?: DecimalType;
  paymentElement?: StringType;
  paymentDateElement?: DateTimeType;
  empty?: boolean;
}

export interface WaistSizeDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export interface WeightDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format double */
  value?: number;
}

export interface XhtmlNode {
  location?: Location;
  nodeType?: NodeType;
  name?: string;
  attributes?: Record<string, string>;
  childNodes?: XhtmlNodeList;
  content?: string;
  notPretty?: boolean;
  seperated?: boolean;
  emptyExpanded?: boolean;
  namedParams?: Record<string, XhtmlNode>;
  namedParamValues?: Record<string, string>;
  userData?: Record<string, any>;
  firstElement?: XhtmlNode;
  empty?: boolean;
  nsDecl?: string;
  valueAsString?: string;
  value?: string;
  formatCommentsPre?: string[];
  formatCommentsPost?: string[];
  noPretty?: boolean;
  para?: boolean;
}

export type XhtmlNodeList = XhtmlNode[];

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title backend API
 * @version 1.0.0-SNAPSHOT
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  export = {
    /**
     * No description
     *
     * @tags Export Controller
     * @name ExportList
     * @summary Export Data
     * @request GET:/export
     * @secure
     */
    exportList: (
      query?: {
        format?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/export`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  healthz = {
    /**
     * No description
     *
     * @tags Health Check Controller
     * @name HealthzList
     * @summary Health Check
     * @request GET:/healthz
     */
    healthzList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/healthz`,
        method: 'GET',
        ...params,
      }),
  };
  metrics = {
    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureList
     * @summary Get All
     * @request GET:/metrics/bloodpressure
     * @secure
     */
    bloodpressureList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/bloodpressure`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureCreate
     * @summary Create
     * @request POST:/metrics/bloodpressure
     * @secure
     */
    bloodpressureCreate: (data: BloodPressureDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/bloodpressure`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/bloodpressure/byId/{id}
     * @secure
     */
    bloodpressureByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/bloodpressure/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureLatestList
     * @summary Latest
     * @request GET:/metrics/bloodpressure/latest
     * @secure
     */
    bloodpressureLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/bloodpressure/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressurePaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/bloodpressure/paginated
     * @secure
     */
    bloodpressurePaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/bloodpressure/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureUpdate
     * @summary Update
     * @request PUT:/metrics/bloodpressure/{id}
     * @secure
     */
    bloodpressureUpdate: (
      id: number,
      data: BloodPressureDTO,
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/bloodpressure/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureDelete
     * @summary Delete
     * @request DELETE:/metrics/bloodpressure/{id}
     * @secure
     */
    bloodpressureDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/bloodpressure/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightList
     * @summary Get All
     * @request GET:/metrics/height
     * @secure
     */
    heightList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/height`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightCreate
     * @summary Create
     * @request POST:/metrics/height
     * @secure
     */
    heightCreate: (data: HeightDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/height`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/height/byId/{id}
     * @secure
     */
    heightByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/height/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightLatestList
     * @summary Latest
     * @request GET:/metrics/height/latest
     * @secure
     */
    heightLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/height/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightPaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/height/paginated
     * @secure
     */
    heightPaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/height/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightUpdate
     * @summary Update
     * @request PUT:/metrics/height/{id}
     * @secure
     */
    heightUpdate: (id: number, data: HeightDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/height/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightDelete
     * @summary Delete
     * @request DELETE:/metrics/height/{id}
     * @secure
     */
    heightDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/height/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaList
     * @summary Get All
     * @request GET:/metrics/rapa
     * @secure
     */
    rapaList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/rapa`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaCreate
     * @summary Create
     * @request POST:/metrics/rapa
     * @secure
     */
    rapaCreate: (data: RAPADTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/rapa`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/rapa/byId/{id}
     * @secure
     */
    rapaByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/rapa/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaLatestList
     * @summary Latest
     * @request GET:/metrics/rapa/latest
     * @secure
     */
    rapaLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/rapa/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaPaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/rapa/paginated
     * @secure
     */
    rapaPaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/rapa/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaUpdate
     * @summary Update
     * @request PUT:/metrics/rapa/{id}
     * @secure
     */
    rapaUpdate: (id: number, data: RAPADTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/rapa/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaDelete
     * @summary Delete
     * @request DELETE:/metrics/rapa/{id}
     * @secure
     */
    rapaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/rapa/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsList
     * @summary Get All
     * @request GET:/metrics/steps
     * @secure
     */
    stepsList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/steps`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsCreate
     * @summary Create
     * @request POST:/metrics/steps
     * @secure
     */
    stepsCreate: (data: StepsDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/steps`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/steps/byId/{id}
     * @secure
     */
    stepsByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/steps/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsLatestList
     * @summary Latest
     * @request GET:/metrics/steps/latest
     * @secure
     */
    stepsLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/steps/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsPaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/steps/paginated
     * @secure
     */
    stepsPaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/steps/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsUpdate
     * @summary Update
     * @request PUT:/metrics/steps/{id}
     * @secure
     */
    stepsUpdate: (id: number, data: StepsDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/steps/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsDelete
     * @summary Delete
     * @request DELETE:/metrics/steps/{id}
     * @secure
     */
    stepsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/steps/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeList
     * @summary Get All
     * @request GET:/metrics/waistsize
     * @secure
     */
    waistsizeList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/waistsize`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeCreate
     * @summary Create
     * @request POST:/metrics/waistsize
     * @secure
     */
    waistsizeCreate: (data: WaistSizeDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/waistsize`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/waistsize/byId/{id}
     * @secure
     */
    waistsizeByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/waistsize/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeLatestList
     * @summary Latest
     * @request GET:/metrics/waistsize/latest
     * @secure
     */
    waistsizeLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/waistsize/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizePaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/waistsize/paginated
     * @secure
     */
    waistsizePaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/waistsize/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeUpdate
     * @summary Update
     * @request PUT:/metrics/waistsize/{id}
     * @secure
     */
    waistsizeUpdate: (
      id: number,
      data: WaistSizeDTO,
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/waistsize/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeDelete
     * @summary Delete
     * @request DELETE:/metrics/waistsize/{id}
     * @secure
     */
    waistsizeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/waistsize/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightList
     * @summary Get All
     * @request GET:/metrics/weight
     * @secure
     */
    weightList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/weight`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightCreate
     * @summary Create
     * @request POST:/metrics/weight
     * @secure
     */
    weightCreate: (data: WeightDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/weight`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/weight/byId/{id}
     * @secure
     */
    weightByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/weight/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightLatestList
     * @summary Latest
     * @request GET:/metrics/weight/latest
     * @secure
     */
    weightLatestList: (params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/weight/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightPaginatedList
     * @summary Get Paginated
     * @request GET:/metrics/weight/paginated
     * @secure
     */
    weightPaginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/metrics/weight/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightUpdate
     * @summary Update
     * @request PUT:/metrics/weight/{id}
     * @secure
     */
    weightUpdate: (id: number, data: WeightDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/metrics/weight/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Weight Controller
     * @name WeightDelete
     * @summary Delete
     * @request DELETE:/metrics/weight/{id}
     * @secure
     */
    weightDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/metrics/weight/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  questionnaire = {
    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name QuestionnaireList
     * @summary Get All
     * @request GET:/questionnaire
     * @secure
     */
    questionnaireList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/questionnaire`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name QuestionnaireCreate
     * @summary Create
     * @request POST:/questionnaire
     * @secure
     */
    questionnaireCreate: (data: QuestionnaireDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaire`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/questionnaire/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaire/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/questionnaire/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/questionnaire/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name QuestionnaireUpdate
     * @summary Update
     * @request PUT:/questionnaire/{id}
     * @secure
     */
    questionnaireUpdate: (
      id: number,
      data: QuestionnaireDTO,
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaire/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Controller
     * @name QuestionnaireDelete
     * @summary Delete
     * @request DELETE:/questionnaire/{id}
     * @secure
     */
    questionnaireDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/questionnaire/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  questionnaireResponse = {
    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name QuestionnaireResponseList
     * @summary Get All
     * @request GET:/questionnaireResponse
     * @secure
     */
    questionnaireResponseList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/questionnaireResponse`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name QuestionnaireResponseCreate
     * @summary Create
     * @request POST:/questionnaireResponse
     * @secure
     */
    questionnaireResponseCreate: (
      data: QuestionnaireResponseDTO,
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaireResponse`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/questionnaireResponse/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaireResponse/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/questionnaireResponse/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/questionnaireResponse/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name QuestionnaireResponseUpdate
     * @summary Update
     * @request PUT:/questionnaireResponse/{id}
     * @secure
     */
    questionnaireResponseUpdate: (
      id: number,
      data: QuestionnaireResponseDTO,
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/questionnaireResponse/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire Response Controller
     * @name QuestionnaireResponseDelete
     * @summary Delete
     * @request DELETE:/questionnaireResponse/{id}
     * @secure
     */
    questionnaireResponseDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/questionnaireResponse/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  recipe = {
    /**
     * No description
     *
     * @tags Recipe Controller
     * @name RecipeList
     * @summary Get All
     * @request GET:/recipe
     * @secure
     */
    recipeList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/recipe`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe Controller
     * @name RecipeCreate
     * @summary Create
     * @request POST:/recipe
     * @secure
     */
    recipeCreate: (data: RecipeDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/recipe`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/recipe/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/recipe/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/recipe/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/recipe/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe Controller
     * @name RecipeUpdate
     * @summary Update
     * @request PUT:/recipe/{id}
     * @secure
     */
    recipeUpdate: (id: number, data: RecipeDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/recipe/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe Controller
     * @name RecipeDelete
     * @summary Delete
     * @request DELETE:/recipe/{id}
     * @secure
     */
    recipeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/recipe/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  sprint = {
    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintList
     * @summary Get All
     * @request GET:/sprint
     * @secure
     */
    sprintList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/sprint`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintCreate
     * @summary Create
     * @request POST:/sprint
     * @secure
     */
    sprintCreate: (data: SprintDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/sprint`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/sprint/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/sprint/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name LatestList
     * @summary Latest
     * @request GET:/sprint/latest
     * @secure
     */
    latestList: (
      query?: {
        /** filter by active */
        active?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/sprint/latest`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/sprint/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/sprint/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintUpdate
     * @summary Update
     * @request PUT:/sprint/{id}
     * @secure
     */
    sprintUpdate: (id: number, data: SprintDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/sprint/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintDelete
     * @summary Delete
     * @request DELETE:/sprint/{id}
     * @secure
     */
    sprintDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/sprint/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  task = {
    /**
     * No description
     *
     * @tags Task Controller
     * @name TaskList
     * @summary Get All
     * @request GET:/task
     * @secure
     */
    taskList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/task`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task Controller
     * @name TaskCreate
     * @summary Create
     * @request POST:/task
     * @secure
     */
    taskCreate: (data: TaskDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/task`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/task/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/task/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/task/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/task/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task Controller
     * @name TaskUpdate
     * @summary Update
     * @request PUT:/task/{id}
     * @secure
     */
    taskUpdate: (id: number, data: TaskDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/task/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task Controller
     * @name TaskDelete
     * @summary Delete
     * @request DELETE:/task/{id}
     * @secure
     */
    taskDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/task/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User Controller
     * @name UserList
     * @summary Get All
     * @request GET:/user
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserCreate
     * @summary Create
     * @request POST:/user
     * @secure
     */
    userCreate: (data: UserDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/user`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/user/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/user/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new user onboarding process
     *
     * @tags User Controller
     * @name OnboardingCreate
     * @summary Onboard a new user
     * @request POST:/user/onboarding
     * @secure
     */
    onboardingCreate: (data: OnboardingDTO, params: RequestParams = {}) =>
      this.request<UserDTO, ErrorResponse>({
        path: `/user/onboarding`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name PaginatedList
     * @summary Get Paginated
     * @request GET:/user/paginated
     * @secure
     */
    paginatedList: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        search?: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IBaseDTO[], ErrorResponse>({
        path: `/user/paginated`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the user associated with you
     *
     * @tags User Controller
     * @name SelfList
     * @summary Get self
     * @request GET:/user/self
     * @secure
     */
    selfList: (params: RequestParams = {}) =>
      this.request<UserDTO, ErrorResponse>({
        path: `/user/self`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserUpdate
     * @summary Update
     * @request PUT:/user/{id}
     * @secure
     */
    userUpdate: (id: number, data: UserDTO, params: RequestParams = {}) =>
      this.request<IBaseDTO, ErrorResponse>({
        path: `/user/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserDelete
     * @summary Delete
     * @request DELETE:/user/{id}
     * @secure
     */
    userDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/user/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
}
