export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GatsbyImageData: any;
  JSON: any;
};

export type AvifOptions = {
  lossless: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  __typename?: 'ContentfulAsset';
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  description: Maybe<Scalars['String']>;
  file: Maybe<ContentfulAssetFile>;
  fixed: Maybe<ContentfulFixed>;
  fluid: Maybe<ContentfulFluid>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  resize: Maybe<ContentfulResize>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulAssetSys>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  toFormat?: InputMaybe<ContentfulImageFormat>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  toFormat?: InputMaybe<ContentfulImageFormat>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<ContentfulImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout?: InputMaybe<ContentfulImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ContentfulImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  toFormat?: InputMaybe<ContentfulImageFormat>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  description = 'description',
  file___contentType = 'file___contentType',
  file___details___image___height = 'file___details___image___height',
  file___details___image___width = 'file___details___image___width',
  file___details___size = 'file___details___size',
  file___fileName = 'file___fileName',
  file___url = 'file___url',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___aspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___base64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___height = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___src = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___tracedSVG = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___width = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___aspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___base64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___sizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___src = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___tracedSVG = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  node_locale = 'node_locale',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___aspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___base64 = 'resize___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___height = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___src = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___tracedSVG = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___width = 'resize___width',
  spaceId = 'spaceId',
  sys___revision = 'sys___revision',
  sys___type = 'sys___type',
  title = 'title',
  updatedAt = 'updatedAt'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  contentType: Maybe<Scalars['String']>;
  details: Maybe<ContentfulAssetFileDetails>;
  fileName: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  image: Maybe<ContentfulAssetFileDetailsImage>;
  size: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  height: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height: InputMaybe<IntQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType: InputMaybe<StringQueryOperatorInput>;
  details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  fixed: InputMaybe<ContentfulFixedFilterInput>;
  fluid: InputMaybe<ContentfulFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ContentfulResizeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulAssetSysFilterInput = {
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulBlogPost';
  author: Maybe<ContentfulPerson>;
  body: Maybe<ContentfulBlogPostBody>;
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  description: Maybe<ContentfulBlogPostDescription>;
  heroImage: Maybe<ContentfulAsset>;
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  publishDate: Maybe<Scalars['Date']>;
  slug: Maybe<Scalars['String']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulBlogPostSys>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostPublishDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulBlogPostBody = {
  __typename?: 'ContentfulBlogPostBody';
  raw: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyFilterInput = {
  raw: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostConnection = {
  __typename?: 'ContentfulBlogPostConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostEdge>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostDescription = {
  __typename?: 'ContentfulBlogPostDescription';
  raw: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionFilterInput = {
  raw: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostEdge = {
  __typename?: 'ContentfulBlogPostEdge';
  next: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  author___blog_post = 'author___blog_post',
  author___blog_post___author___blog_post = 'author___blog_post___author___blog_post',
  author___blog_post___author___children = 'author___blog_post___author___children',
  author___blog_post___author___company = 'author___blog_post___author___company',
  author___blog_post___author___contentful_id = 'author___blog_post___author___contentful_id',
  author___blog_post___author___createdAt = 'author___blog_post___author___createdAt',
  author___blog_post___author___email = 'author___blog_post___author___email',
  author___blog_post___author___facebook = 'author___blog_post___author___facebook',
  author___blog_post___author___github = 'author___blog_post___author___github',
  author___blog_post___author___id = 'author___blog_post___author___id',
  author___blog_post___author___name = 'author___blog_post___author___name',
  author___blog_post___author___node_locale = 'author___blog_post___author___node_locale',
  author___blog_post___author___phone = 'author___blog_post___author___phone',
  author___blog_post___author___spaceId = 'author___blog_post___author___spaceId',
  author___blog_post___author___title = 'author___blog_post___author___title',
  author___blog_post___author___twitter = 'author___blog_post___author___twitter',
  author___blog_post___author___updatedAt = 'author___blog_post___author___updatedAt',
  author___blog_post___body___raw = 'author___blog_post___body___raw',
  author___blog_post___children = 'author___blog_post___children',
  author___blog_post___children___children = 'author___blog_post___children___children',
  author___blog_post___children___id = 'author___blog_post___children___id',
  author___blog_post___contentful_id = 'author___blog_post___contentful_id',
  author___blog_post___createdAt = 'author___blog_post___createdAt',
  author___blog_post___description___raw = 'author___blog_post___description___raw',
  author___blog_post___heroImage___children = 'author___blog_post___heroImage___children',
  author___blog_post___heroImage___contentful_id = 'author___blog_post___heroImage___contentful_id',
  author___blog_post___heroImage___createdAt = 'author___blog_post___heroImage___createdAt',
  author___blog_post___heroImage___description = 'author___blog_post___heroImage___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___blog_post___heroImage___gatsbyImageData = 'author___blog_post___heroImage___gatsbyImageData',
  author___blog_post___heroImage___id = 'author___blog_post___heroImage___id',
  author___blog_post___heroImage___node_locale = 'author___blog_post___heroImage___node_locale',
  author___blog_post___heroImage___spaceId = 'author___blog_post___heroImage___spaceId',
  author___blog_post___heroImage___title = 'author___blog_post___heroImage___title',
  author___blog_post___heroImage___updatedAt = 'author___blog_post___heroImage___updatedAt',
  author___blog_post___id = 'author___blog_post___id',
  author___blog_post___internal___content = 'author___blog_post___internal___content',
  author___blog_post___internal___contentDigest = 'author___blog_post___internal___contentDigest',
  author___blog_post___internal___contentFilePath = 'author___blog_post___internal___contentFilePath',
  author___blog_post___internal___description = 'author___blog_post___internal___description',
  author___blog_post___internal___fieldOwners = 'author___blog_post___internal___fieldOwners',
  author___blog_post___internal___ignoreType = 'author___blog_post___internal___ignoreType',
  author___blog_post___internal___mediaType = 'author___blog_post___internal___mediaType',
  author___blog_post___internal___owner = 'author___blog_post___internal___owner',
  author___blog_post___internal___type = 'author___blog_post___internal___type',
  author___blog_post___node_locale = 'author___blog_post___node_locale',
  author___blog_post___parent___children = 'author___blog_post___parent___children',
  author___blog_post___parent___id = 'author___blog_post___parent___id',
  author___blog_post___publishDate = 'author___blog_post___publishDate',
  author___blog_post___slug = 'author___blog_post___slug',
  author___blog_post___spaceId = 'author___blog_post___spaceId',
  author___blog_post___sys___revision = 'author___blog_post___sys___revision',
  author___blog_post___sys___type = 'author___blog_post___sys___type',
  author___blog_post___tags = 'author___blog_post___tags',
  author___blog_post___title = 'author___blog_post___title',
  author___blog_post___updatedAt = 'author___blog_post___updatedAt',
  author___children = 'author___children',
  author___children___children = 'author___children___children',
  author___children___children___children = 'author___children___children___children',
  author___children___children___id = 'author___children___children___id',
  author___children___id = 'author___children___id',
  author___children___internal___content = 'author___children___internal___content',
  author___children___internal___contentDigest = 'author___children___internal___contentDigest',
  author___children___internal___contentFilePath = 'author___children___internal___contentFilePath',
  author___children___internal___description = 'author___children___internal___description',
  author___children___internal___fieldOwners = 'author___children___internal___fieldOwners',
  author___children___internal___ignoreType = 'author___children___internal___ignoreType',
  author___children___internal___mediaType = 'author___children___internal___mediaType',
  author___children___internal___owner = 'author___children___internal___owner',
  author___children___internal___type = 'author___children___internal___type',
  author___children___parent___children = 'author___children___parent___children',
  author___children___parent___id = 'author___children___parent___id',
  author___company = 'author___company',
  author___contentful_id = 'author___contentful_id',
  author___createdAt = 'author___createdAt',
  author___email = 'author___email',
  author___facebook = 'author___facebook',
  author___github = 'author___github',
  author___id = 'author___id',
  author___image___children = 'author___image___children',
  author___image___children___children = 'author___image___children___children',
  author___image___children___id = 'author___image___children___id',
  author___image___contentful_id = 'author___image___contentful_id',
  author___image___createdAt = 'author___image___createdAt',
  author___image___description = 'author___image___description',
  author___image___file___contentType = 'author___image___file___contentType',
  author___image___file___fileName = 'author___image___file___fileName',
  author___image___file___url = 'author___image___file___url',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___aspectRatio = 'author___image___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___base64 = 'author___image___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___height = 'author___image___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___src = 'author___image___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___srcSet = 'author___image___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___srcSetWebp = 'author___image___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___srcWebp = 'author___image___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___tracedSVG = 'author___image___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fixed___width = 'author___image___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___aspectRatio = 'author___image___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___base64 = 'author___image___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___sizes = 'author___image___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___src = 'author___image___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___srcSet = 'author___image___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___srcSetWebp = 'author___image___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___srcWebp = 'author___image___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___fluid___tracedSVG = 'author___image___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___gatsbyImageData = 'author___image___gatsbyImageData',
  author___image___id = 'author___image___id',
  author___image___internal___content = 'author___image___internal___content',
  author___image___internal___contentDigest = 'author___image___internal___contentDigest',
  author___image___internal___contentFilePath = 'author___image___internal___contentFilePath',
  author___image___internal___description = 'author___image___internal___description',
  author___image___internal___fieldOwners = 'author___image___internal___fieldOwners',
  author___image___internal___ignoreType = 'author___image___internal___ignoreType',
  author___image___internal___mediaType = 'author___image___internal___mediaType',
  author___image___internal___owner = 'author___image___internal___owner',
  author___image___internal___type = 'author___image___internal___type',
  author___image___node_locale = 'author___image___node_locale',
  author___image___parent___children = 'author___image___parent___children',
  author___image___parent___id = 'author___image___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___aspectRatio = 'author___image___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___base64 = 'author___image___resize___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___height = 'author___image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___src = 'author___image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___tracedSVG = 'author___image___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  author___image___resize___width = 'author___image___resize___width',
  author___image___spaceId = 'author___image___spaceId',
  author___image___sys___revision = 'author___image___sys___revision',
  author___image___sys___type = 'author___image___sys___type',
  author___image___title = 'author___image___title',
  author___image___updatedAt = 'author___image___updatedAt',
  author___internal___content = 'author___internal___content',
  author___internal___contentDigest = 'author___internal___contentDigest',
  author___internal___contentFilePath = 'author___internal___contentFilePath',
  author___internal___description = 'author___internal___description',
  author___internal___fieldOwners = 'author___internal___fieldOwners',
  author___internal___ignoreType = 'author___internal___ignoreType',
  author___internal___mediaType = 'author___internal___mediaType',
  author___internal___owner = 'author___internal___owner',
  author___internal___type = 'author___internal___type',
  author___name = 'author___name',
  author___node_locale = 'author___node_locale',
  author___parent___children = 'author___parent___children',
  author___parent___children___children = 'author___parent___children___children',
  author___parent___children___id = 'author___parent___children___id',
  author___parent___id = 'author___parent___id',
  author___parent___internal___content = 'author___parent___internal___content',
  author___parent___internal___contentDigest = 'author___parent___internal___contentDigest',
  author___parent___internal___contentFilePath = 'author___parent___internal___contentFilePath',
  author___parent___internal___description = 'author___parent___internal___description',
  author___parent___internal___fieldOwners = 'author___parent___internal___fieldOwners',
  author___parent___internal___ignoreType = 'author___parent___internal___ignoreType',
  author___parent___internal___mediaType = 'author___parent___internal___mediaType',
  author___parent___internal___owner = 'author___parent___internal___owner',
  author___parent___internal___type = 'author___parent___internal___type',
  author___parent___parent___children = 'author___parent___parent___children',
  author___parent___parent___id = 'author___parent___parent___id',
  author___phone = 'author___phone',
  author___shortBio___raw = 'author___shortBio___raw',
  author___spaceId = 'author___spaceId',
  author___sys___revision = 'author___sys___revision',
  author___sys___type = 'author___sys___type',
  author___title = 'author___title',
  author___twitter = 'author___twitter',
  author___updatedAt = 'author___updatedAt',
  body___raw = 'body___raw',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  description___raw = 'description___raw',
  heroImage___children = 'heroImage___children',
  heroImage___children___children = 'heroImage___children___children',
  heroImage___children___children___children = 'heroImage___children___children___children',
  heroImage___children___children___id = 'heroImage___children___children___id',
  heroImage___children___id = 'heroImage___children___id',
  heroImage___children___internal___content = 'heroImage___children___internal___content',
  heroImage___children___internal___contentDigest = 'heroImage___children___internal___contentDigest',
  heroImage___children___internal___contentFilePath = 'heroImage___children___internal___contentFilePath',
  heroImage___children___internal___description = 'heroImage___children___internal___description',
  heroImage___children___internal___fieldOwners = 'heroImage___children___internal___fieldOwners',
  heroImage___children___internal___ignoreType = 'heroImage___children___internal___ignoreType',
  heroImage___children___internal___mediaType = 'heroImage___children___internal___mediaType',
  heroImage___children___internal___owner = 'heroImage___children___internal___owner',
  heroImage___children___internal___type = 'heroImage___children___internal___type',
  heroImage___children___parent___children = 'heroImage___children___parent___children',
  heroImage___children___parent___id = 'heroImage___children___parent___id',
  heroImage___contentful_id = 'heroImage___contentful_id',
  heroImage___createdAt = 'heroImage___createdAt',
  heroImage___description = 'heroImage___description',
  heroImage___file___contentType = 'heroImage___file___contentType',
  heroImage___file___details___size = 'heroImage___file___details___size',
  heroImage___file___fileName = 'heroImage___file___fileName',
  heroImage___file___url = 'heroImage___file___url',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___aspectRatio = 'heroImage___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___base64 = 'heroImage___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___height = 'heroImage___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___src = 'heroImage___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___srcSet = 'heroImage___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___srcSetWebp = 'heroImage___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___srcWebp = 'heroImage___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___tracedSVG = 'heroImage___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fixed___width = 'heroImage___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___aspectRatio = 'heroImage___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___base64 = 'heroImage___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___sizes = 'heroImage___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___src = 'heroImage___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___srcSet = 'heroImage___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___srcSetWebp = 'heroImage___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___srcWebp = 'heroImage___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___fluid___tracedSVG = 'heroImage___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___gatsbyImageData = 'heroImage___gatsbyImageData',
  heroImage___id = 'heroImage___id',
  heroImage___internal___content = 'heroImage___internal___content',
  heroImage___internal___contentDigest = 'heroImage___internal___contentDigest',
  heroImage___internal___contentFilePath = 'heroImage___internal___contentFilePath',
  heroImage___internal___description = 'heroImage___internal___description',
  heroImage___internal___fieldOwners = 'heroImage___internal___fieldOwners',
  heroImage___internal___ignoreType = 'heroImage___internal___ignoreType',
  heroImage___internal___mediaType = 'heroImage___internal___mediaType',
  heroImage___internal___owner = 'heroImage___internal___owner',
  heroImage___internal___type = 'heroImage___internal___type',
  heroImage___node_locale = 'heroImage___node_locale',
  heroImage___parent___children = 'heroImage___parent___children',
  heroImage___parent___children___children = 'heroImage___parent___children___children',
  heroImage___parent___children___id = 'heroImage___parent___children___id',
  heroImage___parent___id = 'heroImage___parent___id',
  heroImage___parent___internal___content = 'heroImage___parent___internal___content',
  heroImage___parent___internal___contentDigest = 'heroImage___parent___internal___contentDigest',
  heroImage___parent___internal___contentFilePath = 'heroImage___parent___internal___contentFilePath',
  heroImage___parent___internal___description = 'heroImage___parent___internal___description',
  heroImage___parent___internal___fieldOwners = 'heroImage___parent___internal___fieldOwners',
  heroImage___parent___internal___ignoreType = 'heroImage___parent___internal___ignoreType',
  heroImage___parent___internal___mediaType = 'heroImage___parent___internal___mediaType',
  heroImage___parent___internal___owner = 'heroImage___parent___internal___owner',
  heroImage___parent___internal___type = 'heroImage___parent___internal___type',
  heroImage___parent___parent___children = 'heroImage___parent___parent___children',
  heroImage___parent___parent___id = 'heroImage___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___aspectRatio = 'heroImage___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___base64 = 'heroImage___resize___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___height = 'heroImage___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___src = 'heroImage___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___tracedSVG = 'heroImage___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  heroImage___resize___width = 'heroImage___resize___width',
  heroImage___spaceId = 'heroImage___spaceId',
  heroImage___sys___revision = 'heroImage___sys___revision',
  heroImage___sys___type = 'heroImage___sys___type',
  heroImage___title = 'heroImage___title',
  heroImage___updatedAt = 'heroImage___updatedAt',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  node_locale = 'node_locale',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  publishDate = 'publishDate',
  slug = 'slug',
  spaceId = 'spaceId',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___revision = 'sys___revision',
  sys___type = 'sys___type',
  tags = 'tags',
  title = 'title',
  updatedAt = 'updatedAt'
}

export type ContentfulBlogPostFilterInput = {
  author: InputMaybe<ContentfulPersonFilterInput>;
  body: InputMaybe<ContentfulBlogPostBodyFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<ContentfulBlogPostDescriptionFilterInput>;
  heroImage: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishDate: InputMaybe<DateQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch: InputMaybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  __typename?: 'ContentfulBlogPostGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostGroupConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulBlogPostFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  __typename?: 'ContentfulBlogPostSys';
  contentType: Maybe<ContentfulBlogPostSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentType = {
  __typename?: 'ContentfulBlogPostSysContentType';
  sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  __typename?: 'ContentfulBlogPostSysContentTypeSys';
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  contentType: InputMaybe<ContentfulBlogPostSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  displayField: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  displayField = 'displayField',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  sys___type = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogBreed = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulDogBreed';
  barking: Maybe<Scalars['Int']>;
  /** Returns the first child node of type contentfulDogBreedNameTextNode or null if there are no children of given type on this node */
  childContentfulDogBreedNameTextNode: Maybe<ContentfulDogBreedNameTextNode>;
  /** Returns the first child node of type contentfulDogBreedStoryTextNode or null if there are no children of given type on this node */
  childContentfulDogBreedStoryTextNode: Maybe<ContentfulDogBreedStoryTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulDogBreedNameTextNode */
  childrenContentfulDogBreedNameTextNode: Maybe<Array<Maybe<ContentfulDogBreedNameTextNode>>>;
  /** Returns all children nodes filtered by type contentfulDogBreedStoryTextNode */
  childrenContentfulDogBreedStoryTextNode: Maybe<Array<Maybe<ContentfulDogBreedStoryTextNode>>>;
  coatLength: Maybe<Scalars['Int']>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  drooling: Maybe<Scalars['Int']>;
  energy: Maybe<Scalars['Int']>;
  goodWithChildren: Maybe<Scalars['Int']>;
  goodWithOtherDogs: Maybe<Scalars['Int']>;
  goodWithStrangers: Maybe<Scalars['Int']>;
  grooming: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  imageLink: Maybe<Scalars['String']>;
  internal: Internal;
  maxHeightFemale: Maybe<Scalars['Float']>;
  maxHeightMale: Maybe<Scalars['Float']>;
  maxLifeExpentancy: Maybe<Scalars['Int']>;
  maxWeightFemale: Maybe<Scalars['Int']>;
  maxWeightMale: Maybe<Scalars['Int']>;
  minHeightFemale: Maybe<Scalars['Float']>;
  minHeightMale: Maybe<Scalars['Float']>;
  minLifeExpectancy: Maybe<Scalars['Int']>;
  minWeightFemale: Maybe<Scalars['Int']>;
  minWeightMale: Maybe<Scalars['Int']>;
  name: Maybe<ContentfulDogBreedNameTextNode>;
  node_locale: Scalars['String'];
  origin: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  playfulness: Maybe<Scalars['Int']>;
  protectiveness: Maybe<Scalars['Int']>;
  shedding: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  story: Maybe<ContentfulDogBreedStoryTextNode>;
  sys: Maybe<ContentfulDogBreedSys>;
  trainability: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulDogBreedCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulDogBreedUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulDogBreedConnection = {
  __typename?: 'ContentfulDogBreedConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedEdge>;
  group: Array<ContentfulDogBreedGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreed>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedConnectionDistinctArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedConnectionGroupArgs = {
  field: ContentfulDogBreedFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedConnectionMaxArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedConnectionMinArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedConnectionSumArgs = {
  field: ContentfulDogBreedFieldsEnum;
};

export type ContentfulDogBreedEdge = {
  __typename?: 'ContentfulDogBreedEdge';
  next: Maybe<ContentfulDogBreed>;
  node: ContentfulDogBreed;
  previous: Maybe<ContentfulDogBreed>;
};

export enum ContentfulDogBreedFieldsEnum {
  barking = 'barking',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___children = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___children',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___children___children = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___children___children',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___children___id = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___excerpt = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___excerptAst = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___excerptAst',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___headings = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___depth = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___id = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___value = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___headings___value',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___html = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___html',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___htmlAst = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___htmlAst',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___id = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___id',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___content = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___content',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentFilePath = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentFilePath',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___description = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___description',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___owner = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___owner',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___type = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___internal___type',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___parent___children = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___parent___children',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___parent___id = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___parent___id',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childMarkdownRemark___tableOfContents = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___tableOfContents',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___timeToRead = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___timeToRead',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___words = 'childContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___words',
  childContentfulDogBreedNameTextNode___children = 'childContentfulDogBreedNameTextNode___children',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___children = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___children',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___id = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerpt = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerptAst',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___id = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___value = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___value',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___html = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___html',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___htmlAst',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___id = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___id',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___content = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___content',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentDigest',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentFilePath = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentFilePath',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___description = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___description',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___ignoreType',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___mediaType',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___owner',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___type = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___type',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___children = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___children',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___id = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___id',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___tableOfContents',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___timeToRead',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___sentences',
  childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___words',
  childContentfulDogBreedNameTextNode___children___children = 'childContentfulDogBreedNameTextNode___children___children',
  childContentfulDogBreedNameTextNode___children___children___children = 'childContentfulDogBreedNameTextNode___children___children___children',
  childContentfulDogBreedNameTextNode___children___children___id = 'childContentfulDogBreedNameTextNode___children___children___id',
  childContentfulDogBreedNameTextNode___children___id = 'childContentfulDogBreedNameTextNode___children___id',
  childContentfulDogBreedNameTextNode___children___internal___content = 'childContentfulDogBreedNameTextNode___children___internal___content',
  childContentfulDogBreedNameTextNode___children___internal___contentDigest = 'childContentfulDogBreedNameTextNode___children___internal___contentDigest',
  childContentfulDogBreedNameTextNode___children___internal___contentFilePath = 'childContentfulDogBreedNameTextNode___children___internal___contentFilePath',
  childContentfulDogBreedNameTextNode___children___internal___description = 'childContentfulDogBreedNameTextNode___children___internal___description',
  childContentfulDogBreedNameTextNode___children___internal___fieldOwners = 'childContentfulDogBreedNameTextNode___children___internal___fieldOwners',
  childContentfulDogBreedNameTextNode___children___internal___ignoreType = 'childContentfulDogBreedNameTextNode___children___internal___ignoreType',
  childContentfulDogBreedNameTextNode___children___internal___mediaType = 'childContentfulDogBreedNameTextNode___children___internal___mediaType',
  childContentfulDogBreedNameTextNode___children___internal___owner = 'childContentfulDogBreedNameTextNode___children___internal___owner',
  childContentfulDogBreedNameTextNode___children___internal___type = 'childContentfulDogBreedNameTextNode___children___internal___type',
  childContentfulDogBreedNameTextNode___children___parent___children = 'childContentfulDogBreedNameTextNode___children___parent___children',
  childContentfulDogBreedNameTextNode___children___parent___id = 'childContentfulDogBreedNameTextNode___children___parent___id',
  childContentfulDogBreedNameTextNode___id = 'childContentfulDogBreedNameTextNode___id',
  childContentfulDogBreedNameTextNode___internal___content = 'childContentfulDogBreedNameTextNode___internal___content',
  childContentfulDogBreedNameTextNode___internal___contentDigest = 'childContentfulDogBreedNameTextNode___internal___contentDigest',
  childContentfulDogBreedNameTextNode___internal___contentFilePath = 'childContentfulDogBreedNameTextNode___internal___contentFilePath',
  childContentfulDogBreedNameTextNode___internal___description = 'childContentfulDogBreedNameTextNode___internal___description',
  childContentfulDogBreedNameTextNode___internal___fieldOwners = 'childContentfulDogBreedNameTextNode___internal___fieldOwners',
  childContentfulDogBreedNameTextNode___internal___ignoreType = 'childContentfulDogBreedNameTextNode___internal___ignoreType',
  childContentfulDogBreedNameTextNode___internal___mediaType = 'childContentfulDogBreedNameTextNode___internal___mediaType',
  childContentfulDogBreedNameTextNode___internal___owner = 'childContentfulDogBreedNameTextNode___internal___owner',
  childContentfulDogBreedNameTextNode___internal___type = 'childContentfulDogBreedNameTextNode___internal___type',
  childContentfulDogBreedNameTextNode___name = 'childContentfulDogBreedNameTextNode___name',
  childContentfulDogBreedNameTextNode___parent___children = 'childContentfulDogBreedNameTextNode___parent___children',
  childContentfulDogBreedNameTextNode___parent___children___children = 'childContentfulDogBreedNameTextNode___parent___children___children',
  childContentfulDogBreedNameTextNode___parent___children___id = 'childContentfulDogBreedNameTextNode___parent___children___id',
  childContentfulDogBreedNameTextNode___parent___id = 'childContentfulDogBreedNameTextNode___parent___id',
  childContentfulDogBreedNameTextNode___parent___internal___content = 'childContentfulDogBreedNameTextNode___parent___internal___content',
  childContentfulDogBreedNameTextNode___parent___internal___contentDigest = 'childContentfulDogBreedNameTextNode___parent___internal___contentDigest',
  childContentfulDogBreedNameTextNode___parent___internal___contentFilePath = 'childContentfulDogBreedNameTextNode___parent___internal___contentFilePath',
  childContentfulDogBreedNameTextNode___parent___internal___description = 'childContentfulDogBreedNameTextNode___parent___internal___description',
  childContentfulDogBreedNameTextNode___parent___internal___fieldOwners = 'childContentfulDogBreedNameTextNode___parent___internal___fieldOwners',
  childContentfulDogBreedNameTextNode___parent___internal___ignoreType = 'childContentfulDogBreedNameTextNode___parent___internal___ignoreType',
  childContentfulDogBreedNameTextNode___parent___internal___mediaType = 'childContentfulDogBreedNameTextNode___parent___internal___mediaType',
  childContentfulDogBreedNameTextNode___parent___internal___owner = 'childContentfulDogBreedNameTextNode___parent___internal___owner',
  childContentfulDogBreedNameTextNode___parent___internal___type = 'childContentfulDogBreedNameTextNode___parent___internal___type',
  childContentfulDogBreedNameTextNode___parent___parent___children = 'childContentfulDogBreedNameTextNode___parent___parent___children',
  childContentfulDogBreedNameTextNode___parent___parent___id = 'childContentfulDogBreedNameTextNode___parent___parent___id',
  childContentfulDogBreedNameTextNode___sys___type = 'childContentfulDogBreedNameTextNode___sys___type',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___children = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___children',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___children___children = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___children___children',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___children___id = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___excerpt = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___excerptAst = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___excerptAst',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___depth = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___id = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___value = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___value',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___html = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___html',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___htmlAst = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___htmlAst',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___id = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___id',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___content = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___content',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentFilePath = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentFilePath',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___description = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___description',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___owner = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___owner',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___type = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___type',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___children = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___children',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___id = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___id',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___tableOfContents = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___tableOfContents',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___timeToRead = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___timeToRead',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___words = 'childContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___words',
  childContentfulDogBreedStoryTextNode___children = 'childContentfulDogBreedStoryTextNode___children',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___children = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___children',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___id = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerpt = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerptAst',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___id = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___value = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___value',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___html = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___html',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___htmlAst',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___id = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___id',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___content = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___content',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentDigest',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentFilePath = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentFilePath',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___description = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___description',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___ignoreType',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___mediaType',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___owner',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___type = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___type',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___children = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___children',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___id = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___id',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___tableOfContents',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___timeToRead',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___sentences',
  childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___words',
  childContentfulDogBreedStoryTextNode___children___children = 'childContentfulDogBreedStoryTextNode___children___children',
  childContentfulDogBreedStoryTextNode___children___children___children = 'childContentfulDogBreedStoryTextNode___children___children___children',
  childContentfulDogBreedStoryTextNode___children___children___id = 'childContentfulDogBreedStoryTextNode___children___children___id',
  childContentfulDogBreedStoryTextNode___children___id = 'childContentfulDogBreedStoryTextNode___children___id',
  childContentfulDogBreedStoryTextNode___children___internal___content = 'childContentfulDogBreedStoryTextNode___children___internal___content',
  childContentfulDogBreedStoryTextNode___children___internal___contentDigest = 'childContentfulDogBreedStoryTextNode___children___internal___contentDigest',
  childContentfulDogBreedStoryTextNode___children___internal___contentFilePath = 'childContentfulDogBreedStoryTextNode___children___internal___contentFilePath',
  childContentfulDogBreedStoryTextNode___children___internal___description = 'childContentfulDogBreedStoryTextNode___children___internal___description',
  childContentfulDogBreedStoryTextNode___children___internal___fieldOwners = 'childContentfulDogBreedStoryTextNode___children___internal___fieldOwners',
  childContentfulDogBreedStoryTextNode___children___internal___ignoreType = 'childContentfulDogBreedStoryTextNode___children___internal___ignoreType',
  childContentfulDogBreedStoryTextNode___children___internal___mediaType = 'childContentfulDogBreedStoryTextNode___children___internal___mediaType',
  childContentfulDogBreedStoryTextNode___children___internal___owner = 'childContentfulDogBreedStoryTextNode___children___internal___owner',
  childContentfulDogBreedStoryTextNode___children___internal___type = 'childContentfulDogBreedStoryTextNode___children___internal___type',
  childContentfulDogBreedStoryTextNode___children___parent___children = 'childContentfulDogBreedStoryTextNode___children___parent___children',
  childContentfulDogBreedStoryTextNode___children___parent___id = 'childContentfulDogBreedStoryTextNode___children___parent___id',
  childContentfulDogBreedStoryTextNode___id = 'childContentfulDogBreedStoryTextNode___id',
  childContentfulDogBreedStoryTextNode___internal___content = 'childContentfulDogBreedStoryTextNode___internal___content',
  childContentfulDogBreedStoryTextNode___internal___contentDigest = 'childContentfulDogBreedStoryTextNode___internal___contentDigest',
  childContentfulDogBreedStoryTextNode___internal___contentFilePath = 'childContentfulDogBreedStoryTextNode___internal___contentFilePath',
  childContentfulDogBreedStoryTextNode___internal___description = 'childContentfulDogBreedStoryTextNode___internal___description',
  childContentfulDogBreedStoryTextNode___internal___fieldOwners = 'childContentfulDogBreedStoryTextNode___internal___fieldOwners',
  childContentfulDogBreedStoryTextNode___internal___ignoreType = 'childContentfulDogBreedStoryTextNode___internal___ignoreType',
  childContentfulDogBreedStoryTextNode___internal___mediaType = 'childContentfulDogBreedStoryTextNode___internal___mediaType',
  childContentfulDogBreedStoryTextNode___internal___owner = 'childContentfulDogBreedStoryTextNode___internal___owner',
  childContentfulDogBreedStoryTextNode___internal___type = 'childContentfulDogBreedStoryTextNode___internal___type',
  childContentfulDogBreedStoryTextNode___parent___children = 'childContentfulDogBreedStoryTextNode___parent___children',
  childContentfulDogBreedStoryTextNode___parent___children___children = 'childContentfulDogBreedStoryTextNode___parent___children___children',
  childContentfulDogBreedStoryTextNode___parent___children___id = 'childContentfulDogBreedStoryTextNode___parent___children___id',
  childContentfulDogBreedStoryTextNode___parent___id = 'childContentfulDogBreedStoryTextNode___parent___id',
  childContentfulDogBreedStoryTextNode___parent___internal___content = 'childContentfulDogBreedStoryTextNode___parent___internal___content',
  childContentfulDogBreedStoryTextNode___parent___internal___contentDigest = 'childContentfulDogBreedStoryTextNode___parent___internal___contentDigest',
  childContentfulDogBreedStoryTextNode___parent___internal___contentFilePath = 'childContentfulDogBreedStoryTextNode___parent___internal___contentFilePath',
  childContentfulDogBreedStoryTextNode___parent___internal___description = 'childContentfulDogBreedStoryTextNode___parent___internal___description',
  childContentfulDogBreedStoryTextNode___parent___internal___fieldOwners = 'childContentfulDogBreedStoryTextNode___parent___internal___fieldOwners',
  childContentfulDogBreedStoryTextNode___parent___internal___ignoreType = 'childContentfulDogBreedStoryTextNode___parent___internal___ignoreType',
  childContentfulDogBreedStoryTextNode___parent___internal___mediaType = 'childContentfulDogBreedStoryTextNode___parent___internal___mediaType',
  childContentfulDogBreedStoryTextNode___parent___internal___owner = 'childContentfulDogBreedStoryTextNode___parent___internal___owner',
  childContentfulDogBreedStoryTextNode___parent___internal___type = 'childContentfulDogBreedStoryTextNode___parent___internal___type',
  childContentfulDogBreedStoryTextNode___parent___parent___children = 'childContentfulDogBreedStoryTextNode___parent___parent___children',
  childContentfulDogBreedStoryTextNode___parent___parent___id = 'childContentfulDogBreedStoryTextNode___parent___parent___id',
  childContentfulDogBreedStoryTextNode___story = 'childContentfulDogBreedStoryTextNode___story',
  childContentfulDogBreedStoryTextNode___sys___type = 'childContentfulDogBreedStoryTextNode___sys___type',
  children = 'children',
  childrenContentfulDogBreedNameTextNode = 'childrenContentfulDogBreedNameTextNode',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children___children = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children___children',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children___id = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___excerpt = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___excerptAst',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___id = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___value = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___headings___value',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___html = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___html',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___htmlAst',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___id = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___id',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___content = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___content',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentDigest',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentFilePath = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___contentFilePath',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___description = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___description',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___fieldOwners',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___ignoreType',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___mediaType',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___owner',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___type = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___internal___type',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___parent___children = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___parent___children',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___parent___id = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___parent___id',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___tableOfContents',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___timeToRead',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___paragraphs',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___sentences',
  childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulDogBreedNameTextNode___childMarkdownRemark___wordCount___words',
  childrenContentfulDogBreedNameTextNode___children = 'childrenContentfulDogBreedNameTextNode___children',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___children',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___excerptAst',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___headings___value',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___html = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___html',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___htmlAst',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___id = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___id',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___content',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentDigest',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentFilePath = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___contentFilePath',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___description',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___ignoreType',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___mediaType',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___owner',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___internal___type',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___children',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___parent___id',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___tableOfContents',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___timeToRead',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___sentences',
  childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulDogBreedNameTextNode___childrenMarkdownRemark___wordCount___words',
  childrenContentfulDogBreedNameTextNode___children___children = 'childrenContentfulDogBreedNameTextNode___children___children',
  childrenContentfulDogBreedNameTextNode___children___children___children = 'childrenContentfulDogBreedNameTextNode___children___children___children',
  childrenContentfulDogBreedNameTextNode___children___children___id = 'childrenContentfulDogBreedNameTextNode___children___children___id',
  childrenContentfulDogBreedNameTextNode___children___id = 'childrenContentfulDogBreedNameTextNode___children___id',
  childrenContentfulDogBreedNameTextNode___children___internal___content = 'childrenContentfulDogBreedNameTextNode___children___internal___content',
  childrenContentfulDogBreedNameTextNode___children___internal___contentDigest = 'childrenContentfulDogBreedNameTextNode___children___internal___contentDigest',
  childrenContentfulDogBreedNameTextNode___children___internal___contentFilePath = 'childrenContentfulDogBreedNameTextNode___children___internal___contentFilePath',
  childrenContentfulDogBreedNameTextNode___children___internal___description = 'childrenContentfulDogBreedNameTextNode___children___internal___description',
  childrenContentfulDogBreedNameTextNode___children___internal___fieldOwners = 'childrenContentfulDogBreedNameTextNode___children___internal___fieldOwners',
  childrenContentfulDogBreedNameTextNode___children___internal___ignoreType = 'childrenContentfulDogBreedNameTextNode___children___internal___ignoreType',
  childrenContentfulDogBreedNameTextNode___children___internal___mediaType = 'childrenContentfulDogBreedNameTextNode___children___internal___mediaType',
  childrenContentfulDogBreedNameTextNode___children___internal___owner = 'childrenContentfulDogBreedNameTextNode___children___internal___owner',
  childrenContentfulDogBreedNameTextNode___children___internal___type = 'childrenContentfulDogBreedNameTextNode___children___internal___type',
  childrenContentfulDogBreedNameTextNode___children___parent___children = 'childrenContentfulDogBreedNameTextNode___children___parent___children',
  childrenContentfulDogBreedNameTextNode___children___parent___id = 'childrenContentfulDogBreedNameTextNode___children___parent___id',
  childrenContentfulDogBreedNameTextNode___id = 'childrenContentfulDogBreedNameTextNode___id',
  childrenContentfulDogBreedNameTextNode___internal___content = 'childrenContentfulDogBreedNameTextNode___internal___content',
  childrenContentfulDogBreedNameTextNode___internal___contentDigest = 'childrenContentfulDogBreedNameTextNode___internal___contentDigest',
  childrenContentfulDogBreedNameTextNode___internal___contentFilePath = 'childrenContentfulDogBreedNameTextNode___internal___contentFilePath',
  childrenContentfulDogBreedNameTextNode___internal___description = 'childrenContentfulDogBreedNameTextNode___internal___description',
  childrenContentfulDogBreedNameTextNode___internal___fieldOwners = 'childrenContentfulDogBreedNameTextNode___internal___fieldOwners',
  childrenContentfulDogBreedNameTextNode___internal___ignoreType = 'childrenContentfulDogBreedNameTextNode___internal___ignoreType',
  childrenContentfulDogBreedNameTextNode___internal___mediaType = 'childrenContentfulDogBreedNameTextNode___internal___mediaType',
  childrenContentfulDogBreedNameTextNode___internal___owner = 'childrenContentfulDogBreedNameTextNode___internal___owner',
  childrenContentfulDogBreedNameTextNode___internal___type = 'childrenContentfulDogBreedNameTextNode___internal___type',
  childrenContentfulDogBreedNameTextNode___name = 'childrenContentfulDogBreedNameTextNode___name',
  childrenContentfulDogBreedNameTextNode___parent___children = 'childrenContentfulDogBreedNameTextNode___parent___children',
  childrenContentfulDogBreedNameTextNode___parent___children___children = 'childrenContentfulDogBreedNameTextNode___parent___children___children',
  childrenContentfulDogBreedNameTextNode___parent___children___id = 'childrenContentfulDogBreedNameTextNode___parent___children___id',
  childrenContentfulDogBreedNameTextNode___parent___id = 'childrenContentfulDogBreedNameTextNode___parent___id',
  childrenContentfulDogBreedNameTextNode___parent___internal___content = 'childrenContentfulDogBreedNameTextNode___parent___internal___content',
  childrenContentfulDogBreedNameTextNode___parent___internal___contentDigest = 'childrenContentfulDogBreedNameTextNode___parent___internal___contentDigest',
  childrenContentfulDogBreedNameTextNode___parent___internal___contentFilePath = 'childrenContentfulDogBreedNameTextNode___parent___internal___contentFilePath',
  childrenContentfulDogBreedNameTextNode___parent___internal___description = 'childrenContentfulDogBreedNameTextNode___parent___internal___description',
  childrenContentfulDogBreedNameTextNode___parent___internal___fieldOwners = 'childrenContentfulDogBreedNameTextNode___parent___internal___fieldOwners',
  childrenContentfulDogBreedNameTextNode___parent___internal___ignoreType = 'childrenContentfulDogBreedNameTextNode___parent___internal___ignoreType',
  childrenContentfulDogBreedNameTextNode___parent___internal___mediaType = 'childrenContentfulDogBreedNameTextNode___parent___internal___mediaType',
  childrenContentfulDogBreedNameTextNode___parent___internal___owner = 'childrenContentfulDogBreedNameTextNode___parent___internal___owner',
  childrenContentfulDogBreedNameTextNode___parent___internal___type = 'childrenContentfulDogBreedNameTextNode___parent___internal___type',
  childrenContentfulDogBreedNameTextNode___parent___parent___children = 'childrenContentfulDogBreedNameTextNode___parent___parent___children',
  childrenContentfulDogBreedNameTextNode___parent___parent___id = 'childrenContentfulDogBreedNameTextNode___parent___parent___id',
  childrenContentfulDogBreedNameTextNode___sys___type = 'childrenContentfulDogBreedNameTextNode___sys___type',
  childrenContentfulDogBreedStoryTextNode = 'childrenContentfulDogBreedStoryTextNode',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children___children = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children___children',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children___id = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___excerpt = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___excerptAst',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___id = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___value = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___headings___value',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___html = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___html',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___htmlAst',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___id = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___id',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___content = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___content',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentDigest',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentFilePath = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___contentFilePath',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___description = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___description',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___fieldOwners',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___ignoreType',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___mediaType',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___owner',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___type = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___internal___type',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___children = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___children',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___id = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___parent___id',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___tableOfContents',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___timeToRead',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___paragraphs',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___sentences',
  childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulDogBreedStoryTextNode___childMarkdownRemark___wordCount___words',
  childrenContentfulDogBreedStoryTextNode___children = 'childrenContentfulDogBreedStoryTextNode___children',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___children',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___excerptAst',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___headings___value',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___html = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___html',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___htmlAst',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___id = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___id',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___content',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentDigest',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentFilePath = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___contentFilePath',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___description',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___fieldOwners',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___ignoreType',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___mediaType',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___owner',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___internal___type',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___children',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___parent___id',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___tableOfContents',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___timeToRead',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___sentences',
  childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulDogBreedStoryTextNode___childrenMarkdownRemark___wordCount___words',
  childrenContentfulDogBreedStoryTextNode___children___children = 'childrenContentfulDogBreedStoryTextNode___children___children',
  childrenContentfulDogBreedStoryTextNode___children___children___children = 'childrenContentfulDogBreedStoryTextNode___children___children___children',
  childrenContentfulDogBreedStoryTextNode___children___children___id = 'childrenContentfulDogBreedStoryTextNode___children___children___id',
  childrenContentfulDogBreedStoryTextNode___children___id = 'childrenContentfulDogBreedStoryTextNode___children___id',
  childrenContentfulDogBreedStoryTextNode___children___internal___content = 'childrenContentfulDogBreedStoryTextNode___children___internal___content',
  childrenContentfulDogBreedStoryTextNode___children___internal___contentDigest = 'childrenContentfulDogBreedStoryTextNode___children___internal___contentDigest',
  childrenContentfulDogBreedStoryTextNode___children___internal___contentFilePath = 'childrenContentfulDogBreedStoryTextNode___children___internal___contentFilePath',
  childrenContentfulDogBreedStoryTextNode___children___internal___description = 'childrenContentfulDogBreedStoryTextNode___children___internal___description',
  childrenContentfulDogBreedStoryTextNode___children___internal___fieldOwners = 'childrenContentfulDogBreedStoryTextNode___children___internal___fieldOwners',
  childrenContentfulDogBreedStoryTextNode___children___internal___ignoreType = 'childrenContentfulDogBreedStoryTextNode___children___internal___ignoreType',
  childrenContentfulDogBreedStoryTextNode___children___internal___mediaType = 'childrenContentfulDogBreedStoryTextNode___children___internal___mediaType',
  childrenContentfulDogBreedStoryTextNode___children___internal___owner = 'childrenContentfulDogBreedStoryTextNode___children___internal___owner',
  childrenContentfulDogBreedStoryTextNode___children___internal___type = 'childrenContentfulDogBreedStoryTextNode___children___internal___type',
  childrenContentfulDogBreedStoryTextNode___children___parent___children = 'childrenContentfulDogBreedStoryTextNode___children___parent___children',
  childrenContentfulDogBreedStoryTextNode___children___parent___id = 'childrenContentfulDogBreedStoryTextNode___children___parent___id',
  childrenContentfulDogBreedStoryTextNode___id = 'childrenContentfulDogBreedStoryTextNode___id',
  childrenContentfulDogBreedStoryTextNode___internal___content = 'childrenContentfulDogBreedStoryTextNode___internal___content',
  childrenContentfulDogBreedStoryTextNode___internal___contentDigest = 'childrenContentfulDogBreedStoryTextNode___internal___contentDigest',
  childrenContentfulDogBreedStoryTextNode___internal___contentFilePath = 'childrenContentfulDogBreedStoryTextNode___internal___contentFilePath',
  childrenContentfulDogBreedStoryTextNode___internal___description = 'childrenContentfulDogBreedStoryTextNode___internal___description',
  childrenContentfulDogBreedStoryTextNode___internal___fieldOwners = 'childrenContentfulDogBreedStoryTextNode___internal___fieldOwners',
  childrenContentfulDogBreedStoryTextNode___internal___ignoreType = 'childrenContentfulDogBreedStoryTextNode___internal___ignoreType',
  childrenContentfulDogBreedStoryTextNode___internal___mediaType = 'childrenContentfulDogBreedStoryTextNode___internal___mediaType',
  childrenContentfulDogBreedStoryTextNode___internal___owner = 'childrenContentfulDogBreedStoryTextNode___internal___owner',
  childrenContentfulDogBreedStoryTextNode___internal___type = 'childrenContentfulDogBreedStoryTextNode___internal___type',
  childrenContentfulDogBreedStoryTextNode___parent___children = 'childrenContentfulDogBreedStoryTextNode___parent___children',
  childrenContentfulDogBreedStoryTextNode___parent___children___children = 'childrenContentfulDogBreedStoryTextNode___parent___children___children',
  childrenContentfulDogBreedStoryTextNode___parent___children___id = 'childrenContentfulDogBreedStoryTextNode___parent___children___id',
  childrenContentfulDogBreedStoryTextNode___parent___id = 'childrenContentfulDogBreedStoryTextNode___parent___id',
  childrenContentfulDogBreedStoryTextNode___parent___internal___content = 'childrenContentfulDogBreedStoryTextNode___parent___internal___content',
  childrenContentfulDogBreedStoryTextNode___parent___internal___contentDigest = 'childrenContentfulDogBreedStoryTextNode___parent___internal___contentDigest',
  childrenContentfulDogBreedStoryTextNode___parent___internal___contentFilePath = 'childrenContentfulDogBreedStoryTextNode___parent___internal___contentFilePath',
  childrenContentfulDogBreedStoryTextNode___parent___internal___description = 'childrenContentfulDogBreedStoryTextNode___parent___internal___description',
  childrenContentfulDogBreedStoryTextNode___parent___internal___fieldOwners = 'childrenContentfulDogBreedStoryTextNode___parent___internal___fieldOwners',
  childrenContentfulDogBreedStoryTextNode___parent___internal___ignoreType = 'childrenContentfulDogBreedStoryTextNode___parent___internal___ignoreType',
  childrenContentfulDogBreedStoryTextNode___parent___internal___mediaType = 'childrenContentfulDogBreedStoryTextNode___parent___internal___mediaType',
  childrenContentfulDogBreedStoryTextNode___parent___internal___owner = 'childrenContentfulDogBreedStoryTextNode___parent___internal___owner',
  childrenContentfulDogBreedStoryTextNode___parent___internal___type = 'childrenContentfulDogBreedStoryTextNode___parent___internal___type',
  childrenContentfulDogBreedStoryTextNode___parent___parent___children = 'childrenContentfulDogBreedStoryTextNode___parent___parent___children',
  childrenContentfulDogBreedStoryTextNode___parent___parent___id = 'childrenContentfulDogBreedStoryTextNode___parent___parent___id',
  childrenContentfulDogBreedStoryTextNode___story = 'childrenContentfulDogBreedStoryTextNode___story',
  childrenContentfulDogBreedStoryTextNode___sys___type = 'childrenContentfulDogBreedStoryTextNode___sys___type',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  coatLength = 'coatLength',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  drooling = 'drooling',
  energy = 'energy',
  goodWithChildren = 'goodWithChildren',
  goodWithOtherDogs = 'goodWithOtherDogs',
  goodWithStrangers = 'goodWithStrangers',
  grooming = 'grooming',
  id = 'id',
  imageLink = 'imageLink',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  maxHeightFemale = 'maxHeightFemale',
  maxHeightMale = 'maxHeightMale',
  maxLifeExpentancy = 'maxLifeExpentancy',
  maxWeightFemale = 'maxWeightFemale',
  maxWeightMale = 'maxWeightMale',
  minHeightFemale = 'minHeightFemale',
  minHeightMale = 'minHeightMale',
  minLifeExpectancy = 'minLifeExpectancy',
  minWeightFemale = 'minWeightFemale',
  minWeightMale = 'minWeightMale',
  name___childMarkdownRemark___children = 'name___childMarkdownRemark___children',
  name___childMarkdownRemark___children___children = 'name___childMarkdownRemark___children___children',
  name___childMarkdownRemark___children___id = 'name___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___excerpt = 'name___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___excerptAst = 'name___childMarkdownRemark___excerptAst',
  name___childMarkdownRemark___frontmatter___title = 'name___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___headings = 'name___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___headings___depth = 'name___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___headings___id = 'name___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___headings___value = 'name___childMarkdownRemark___headings___value',
  name___childMarkdownRemark___html = 'name___childMarkdownRemark___html',
  name___childMarkdownRemark___htmlAst = 'name___childMarkdownRemark___htmlAst',
  name___childMarkdownRemark___id = 'name___childMarkdownRemark___id',
  name___childMarkdownRemark___internal___content = 'name___childMarkdownRemark___internal___content',
  name___childMarkdownRemark___internal___contentDigest = 'name___childMarkdownRemark___internal___contentDigest',
  name___childMarkdownRemark___internal___contentFilePath = 'name___childMarkdownRemark___internal___contentFilePath',
  name___childMarkdownRemark___internal___description = 'name___childMarkdownRemark___internal___description',
  name___childMarkdownRemark___internal___fieldOwners = 'name___childMarkdownRemark___internal___fieldOwners',
  name___childMarkdownRemark___internal___ignoreType = 'name___childMarkdownRemark___internal___ignoreType',
  name___childMarkdownRemark___internal___mediaType = 'name___childMarkdownRemark___internal___mediaType',
  name___childMarkdownRemark___internal___owner = 'name___childMarkdownRemark___internal___owner',
  name___childMarkdownRemark___internal___type = 'name___childMarkdownRemark___internal___type',
  name___childMarkdownRemark___parent___children = 'name___childMarkdownRemark___parent___children',
  name___childMarkdownRemark___parent___id = 'name___childMarkdownRemark___parent___id',
  name___childMarkdownRemark___rawMarkdownBody = 'name___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childMarkdownRemark___tableOfContents = 'name___childMarkdownRemark___tableOfContents',
  name___childMarkdownRemark___timeToRead = 'name___childMarkdownRemark___timeToRead',
  name___childMarkdownRemark___wordCount___paragraphs = 'name___childMarkdownRemark___wordCount___paragraphs',
  name___childMarkdownRemark___wordCount___sentences = 'name___childMarkdownRemark___wordCount___sentences',
  name___childMarkdownRemark___wordCount___words = 'name___childMarkdownRemark___wordCount___words',
  name___children = 'name___children',
  name___childrenMarkdownRemark = 'name___childrenMarkdownRemark',
  name___childrenMarkdownRemark___children = 'name___childrenMarkdownRemark___children',
  name___childrenMarkdownRemark___children___children = 'name___childrenMarkdownRemark___children___children',
  name___childrenMarkdownRemark___children___id = 'name___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___excerpt = 'name___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___excerptAst = 'name___childrenMarkdownRemark___excerptAst',
  name___childrenMarkdownRemark___frontmatter___title = 'name___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___headings = 'name___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___headings___depth = 'name___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___headings___id = 'name___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___headings___value = 'name___childrenMarkdownRemark___headings___value',
  name___childrenMarkdownRemark___html = 'name___childrenMarkdownRemark___html',
  name___childrenMarkdownRemark___htmlAst = 'name___childrenMarkdownRemark___htmlAst',
  name___childrenMarkdownRemark___id = 'name___childrenMarkdownRemark___id',
  name___childrenMarkdownRemark___internal___content = 'name___childrenMarkdownRemark___internal___content',
  name___childrenMarkdownRemark___internal___contentDigest = 'name___childrenMarkdownRemark___internal___contentDigest',
  name___childrenMarkdownRemark___internal___contentFilePath = 'name___childrenMarkdownRemark___internal___contentFilePath',
  name___childrenMarkdownRemark___internal___description = 'name___childrenMarkdownRemark___internal___description',
  name___childrenMarkdownRemark___internal___fieldOwners = 'name___childrenMarkdownRemark___internal___fieldOwners',
  name___childrenMarkdownRemark___internal___ignoreType = 'name___childrenMarkdownRemark___internal___ignoreType',
  name___childrenMarkdownRemark___internal___mediaType = 'name___childrenMarkdownRemark___internal___mediaType',
  name___childrenMarkdownRemark___internal___owner = 'name___childrenMarkdownRemark___internal___owner',
  name___childrenMarkdownRemark___internal___type = 'name___childrenMarkdownRemark___internal___type',
  name___childrenMarkdownRemark___parent___children = 'name___childrenMarkdownRemark___parent___children',
  name___childrenMarkdownRemark___parent___id = 'name___childrenMarkdownRemark___parent___id',
  name___childrenMarkdownRemark___rawMarkdownBody = 'name___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  name___childrenMarkdownRemark___tableOfContents = 'name___childrenMarkdownRemark___tableOfContents',
  name___childrenMarkdownRemark___timeToRead = 'name___childrenMarkdownRemark___timeToRead',
  name___childrenMarkdownRemark___wordCount___paragraphs = 'name___childrenMarkdownRemark___wordCount___paragraphs',
  name___childrenMarkdownRemark___wordCount___sentences = 'name___childrenMarkdownRemark___wordCount___sentences',
  name___childrenMarkdownRemark___wordCount___words = 'name___childrenMarkdownRemark___wordCount___words',
  name___children___children = 'name___children___children',
  name___children___children___children = 'name___children___children___children',
  name___children___children___id = 'name___children___children___id',
  name___children___id = 'name___children___id',
  name___children___internal___content = 'name___children___internal___content',
  name___children___internal___contentDigest = 'name___children___internal___contentDigest',
  name___children___internal___contentFilePath = 'name___children___internal___contentFilePath',
  name___children___internal___description = 'name___children___internal___description',
  name___children___internal___fieldOwners = 'name___children___internal___fieldOwners',
  name___children___internal___ignoreType = 'name___children___internal___ignoreType',
  name___children___internal___mediaType = 'name___children___internal___mediaType',
  name___children___internal___owner = 'name___children___internal___owner',
  name___children___internal___type = 'name___children___internal___type',
  name___children___parent___children = 'name___children___parent___children',
  name___children___parent___id = 'name___children___parent___id',
  name___id = 'name___id',
  name___internal___content = 'name___internal___content',
  name___internal___contentDigest = 'name___internal___contentDigest',
  name___internal___contentFilePath = 'name___internal___contentFilePath',
  name___internal___description = 'name___internal___description',
  name___internal___fieldOwners = 'name___internal___fieldOwners',
  name___internal___ignoreType = 'name___internal___ignoreType',
  name___internal___mediaType = 'name___internal___mediaType',
  name___internal___owner = 'name___internal___owner',
  name___internal___type = 'name___internal___type',
  name___name = 'name___name',
  name___parent___children = 'name___parent___children',
  name___parent___children___children = 'name___parent___children___children',
  name___parent___children___id = 'name___parent___children___id',
  name___parent___id = 'name___parent___id',
  name___parent___internal___content = 'name___parent___internal___content',
  name___parent___internal___contentDigest = 'name___parent___internal___contentDigest',
  name___parent___internal___contentFilePath = 'name___parent___internal___contentFilePath',
  name___parent___internal___description = 'name___parent___internal___description',
  name___parent___internal___fieldOwners = 'name___parent___internal___fieldOwners',
  name___parent___internal___ignoreType = 'name___parent___internal___ignoreType',
  name___parent___internal___mediaType = 'name___parent___internal___mediaType',
  name___parent___internal___owner = 'name___parent___internal___owner',
  name___parent___internal___type = 'name___parent___internal___type',
  name___parent___parent___children = 'name___parent___parent___children',
  name___parent___parent___id = 'name___parent___parent___id',
  name___sys___type = 'name___sys___type',
  node_locale = 'node_locale',
  origin = 'origin',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  playfulness = 'playfulness',
  protectiveness = 'protectiveness',
  shedding = 'shedding',
  spaceId = 'spaceId',
  story___childMarkdownRemark___children = 'story___childMarkdownRemark___children',
  story___childMarkdownRemark___children___children = 'story___childMarkdownRemark___children___children',
  story___childMarkdownRemark___children___id = 'story___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___excerpt = 'story___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___excerptAst = 'story___childMarkdownRemark___excerptAst',
  story___childMarkdownRemark___frontmatter___title = 'story___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___headings = 'story___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___headings___depth = 'story___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___headings___id = 'story___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___headings___value = 'story___childMarkdownRemark___headings___value',
  story___childMarkdownRemark___html = 'story___childMarkdownRemark___html',
  story___childMarkdownRemark___htmlAst = 'story___childMarkdownRemark___htmlAst',
  story___childMarkdownRemark___id = 'story___childMarkdownRemark___id',
  story___childMarkdownRemark___internal___content = 'story___childMarkdownRemark___internal___content',
  story___childMarkdownRemark___internal___contentDigest = 'story___childMarkdownRemark___internal___contentDigest',
  story___childMarkdownRemark___internal___contentFilePath = 'story___childMarkdownRemark___internal___contentFilePath',
  story___childMarkdownRemark___internal___description = 'story___childMarkdownRemark___internal___description',
  story___childMarkdownRemark___internal___fieldOwners = 'story___childMarkdownRemark___internal___fieldOwners',
  story___childMarkdownRemark___internal___ignoreType = 'story___childMarkdownRemark___internal___ignoreType',
  story___childMarkdownRemark___internal___mediaType = 'story___childMarkdownRemark___internal___mediaType',
  story___childMarkdownRemark___internal___owner = 'story___childMarkdownRemark___internal___owner',
  story___childMarkdownRemark___internal___type = 'story___childMarkdownRemark___internal___type',
  story___childMarkdownRemark___parent___children = 'story___childMarkdownRemark___parent___children',
  story___childMarkdownRemark___parent___id = 'story___childMarkdownRemark___parent___id',
  story___childMarkdownRemark___rawMarkdownBody = 'story___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childMarkdownRemark___tableOfContents = 'story___childMarkdownRemark___tableOfContents',
  story___childMarkdownRemark___timeToRead = 'story___childMarkdownRemark___timeToRead',
  story___childMarkdownRemark___wordCount___paragraphs = 'story___childMarkdownRemark___wordCount___paragraphs',
  story___childMarkdownRemark___wordCount___sentences = 'story___childMarkdownRemark___wordCount___sentences',
  story___childMarkdownRemark___wordCount___words = 'story___childMarkdownRemark___wordCount___words',
  story___children = 'story___children',
  story___childrenMarkdownRemark = 'story___childrenMarkdownRemark',
  story___childrenMarkdownRemark___children = 'story___childrenMarkdownRemark___children',
  story___childrenMarkdownRemark___children___children = 'story___childrenMarkdownRemark___children___children',
  story___childrenMarkdownRemark___children___id = 'story___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___excerpt = 'story___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___excerptAst = 'story___childrenMarkdownRemark___excerptAst',
  story___childrenMarkdownRemark___frontmatter___title = 'story___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___headings = 'story___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___headings___depth = 'story___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___headings___id = 'story___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___headings___value = 'story___childrenMarkdownRemark___headings___value',
  story___childrenMarkdownRemark___html = 'story___childrenMarkdownRemark___html',
  story___childrenMarkdownRemark___htmlAst = 'story___childrenMarkdownRemark___htmlAst',
  story___childrenMarkdownRemark___id = 'story___childrenMarkdownRemark___id',
  story___childrenMarkdownRemark___internal___content = 'story___childrenMarkdownRemark___internal___content',
  story___childrenMarkdownRemark___internal___contentDigest = 'story___childrenMarkdownRemark___internal___contentDigest',
  story___childrenMarkdownRemark___internal___contentFilePath = 'story___childrenMarkdownRemark___internal___contentFilePath',
  story___childrenMarkdownRemark___internal___description = 'story___childrenMarkdownRemark___internal___description',
  story___childrenMarkdownRemark___internal___fieldOwners = 'story___childrenMarkdownRemark___internal___fieldOwners',
  story___childrenMarkdownRemark___internal___ignoreType = 'story___childrenMarkdownRemark___internal___ignoreType',
  story___childrenMarkdownRemark___internal___mediaType = 'story___childrenMarkdownRemark___internal___mediaType',
  story___childrenMarkdownRemark___internal___owner = 'story___childrenMarkdownRemark___internal___owner',
  story___childrenMarkdownRemark___internal___type = 'story___childrenMarkdownRemark___internal___type',
  story___childrenMarkdownRemark___parent___children = 'story___childrenMarkdownRemark___parent___children',
  story___childrenMarkdownRemark___parent___id = 'story___childrenMarkdownRemark___parent___id',
  story___childrenMarkdownRemark___rawMarkdownBody = 'story___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  story___childrenMarkdownRemark___tableOfContents = 'story___childrenMarkdownRemark___tableOfContents',
  story___childrenMarkdownRemark___timeToRead = 'story___childrenMarkdownRemark___timeToRead',
  story___childrenMarkdownRemark___wordCount___paragraphs = 'story___childrenMarkdownRemark___wordCount___paragraphs',
  story___childrenMarkdownRemark___wordCount___sentences = 'story___childrenMarkdownRemark___wordCount___sentences',
  story___childrenMarkdownRemark___wordCount___words = 'story___childrenMarkdownRemark___wordCount___words',
  story___children___children = 'story___children___children',
  story___children___children___children = 'story___children___children___children',
  story___children___children___id = 'story___children___children___id',
  story___children___id = 'story___children___id',
  story___children___internal___content = 'story___children___internal___content',
  story___children___internal___contentDigest = 'story___children___internal___contentDigest',
  story___children___internal___contentFilePath = 'story___children___internal___contentFilePath',
  story___children___internal___description = 'story___children___internal___description',
  story___children___internal___fieldOwners = 'story___children___internal___fieldOwners',
  story___children___internal___ignoreType = 'story___children___internal___ignoreType',
  story___children___internal___mediaType = 'story___children___internal___mediaType',
  story___children___internal___owner = 'story___children___internal___owner',
  story___children___internal___type = 'story___children___internal___type',
  story___children___parent___children = 'story___children___parent___children',
  story___children___parent___id = 'story___children___parent___id',
  story___id = 'story___id',
  story___internal___content = 'story___internal___content',
  story___internal___contentDigest = 'story___internal___contentDigest',
  story___internal___contentFilePath = 'story___internal___contentFilePath',
  story___internal___description = 'story___internal___description',
  story___internal___fieldOwners = 'story___internal___fieldOwners',
  story___internal___ignoreType = 'story___internal___ignoreType',
  story___internal___mediaType = 'story___internal___mediaType',
  story___internal___owner = 'story___internal___owner',
  story___internal___type = 'story___internal___type',
  story___parent___children = 'story___parent___children',
  story___parent___children___children = 'story___parent___children___children',
  story___parent___children___id = 'story___parent___children___id',
  story___parent___id = 'story___parent___id',
  story___parent___internal___content = 'story___parent___internal___content',
  story___parent___internal___contentDigest = 'story___parent___internal___contentDigest',
  story___parent___internal___contentFilePath = 'story___parent___internal___contentFilePath',
  story___parent___internal___description = 'story___parent___internal___description',
  story___parent___internal___fieldOwners = 'story___parent___internal___fieldOwners',
  story___parent___internal___ignoreType = 'story___parent___internal___ignoreType',
  story___parent___internal___mediaType = 'story___parent___internal___mediaType',
  story___parent___internal___owner = 'story___parent___internal___owner',
  story___parent___internal___type = 'story___parent___internal___type',
  story___parent___parent___children = 'story___parent___parent___children',
  story___parent___parent___id = 'story___parent___parent___id',
  story___story = 'story___story',
  story___sys___type = 'story___sys___type',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___revision = 'sys___revision',
  sys___type = 'sys___type',
  trainability = 'trainability',
  updatedAt = 'updatedAt'
}

export type ContentfulDogBreedFilterInput = {
  barking: InputMaybe<IntQueryOperatorInput>;
  childContentfulDogBreedNameTextNode: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
  childContentfulDogBreedStoryTextNode: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulDogBreedNameTextNode: InputMaybe<ContentfulDogBreedNameTextNodeFilterListInput>;
  childrenContentfulDogBreedStoryTextNode: InputMaybe<ContentfulDogBreedStoryTextNodeFilterListInput>;
  coatLength: InputMaybe<IntQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  drooling: InputMaybe<IntQueryOperatorInput>;
  energy: InputMaybe<IntQueryOperatorInput>;
  goodWithChildren: InputMaybe<IntQueryOperatorInput>;
  goodWithOtherDogs: InputMaybe<IntQueryOperatorInput>;
  goodWithStrangers: InputMaybe<IntQueryOperatorInput>;
  grooming: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  imageLink: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  maxHeightFemale: InputMaybe<FloatQueryOperatorInput>;
  maxHeightMale: InputMaybe<FloatQueryOperatorInput>;
  maxLifeExpentancy: InputMaybe<IntQueryOperatorInput>;
  maxWeightFemale: InputMaybe<IntQueryOperatorInput>;
  maxWeightMale: InputMaybe<IntQueryOperatorInput>;
  minHeightFemale: InputMaybe<FloatQueryOperatorInput>;
  minHeightMale: InputMaybe<FloatQueryOperatorInput>;
  minLifeExpectancy: InputMaybe<IntQueryOperatorInput>;
  minWeightFemale: InputMaybe<IntQueryOperatorInput>;
  minWeightMale: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  origin: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  playfulness: InputMaybe<IntQueryOperatorInput>;
  protectiveness: InputMaybe<IntQueryOperatorInput>;
  shedding: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  story: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
  sys: InputMaybe<ContentfulDogBreedSysFilterInput>;
  trainability: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulDogBreedGroupConnection = {
  __typename?: 'ContentfulDogBreedGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulDogBreedGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreed>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedGroupConnectionDistinctArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedGroupConnectionGroupArgs = {
  field: ContentfulDogBreedFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedGroupConnectionMaxArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedGroupConnectionMinArgs = {
  field: ContentfulDogBreedFieldsEnum;
};


export type ContentfulDogBreedGroupConnectionSumArgs = {
  field: ContentfulDogBreedFieldsEnum;
};

export type ContentfulDogBreedSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulDogBreedFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDogBreedSys = {
  __typename?: 'ContentfulDogBreedSys';
  contentType: Maybe<ContentfulDogBreedSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulDogBreedSysContentType = {
  __typename?: 'ContentfulDogBreedSysContentType';
  sys: Maybe<ContentfulDogBreedSysContentTypeSys>;
};

export type ContentfulDogBreedSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulDogBreedSysContentTypeSysFilterInput>;
};

export type ContentfulDogBreedSysContentTypeSys = {
  __typename?: 'ContentfulDogBreedSysContentTypeSys';
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulDogBreedSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogBreedSysFilterInput = {
  contentType: InputMaybe<ContentfulDogBreedSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  contentful_id = 'contentful_id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  node_locale = 'node_locale',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type ContentfulEntryFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ContentfulFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ContentfulFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  BOTTOM = 'BOTTOM',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  CENTER = 'CENTER',
  FACE = 'FACE',
  FACES = 'FACES',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT'
}

export enum ContentfulImageFormat {
  AUTO = 'AUTO',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ContentfulImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum ContentfulImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export type ContentfulPerson = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulPerson';
  blog_post: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  children: Array<Node>;
  company: Maybe<Scalars['String']>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  email: Maybe<Scalars['String']>;
  facebook: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<ContentfulAsset>;
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  phone: Maybe<Scalars['String']>;
  shortBio: Maybe<ContentfulPersonShortBio>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulPersonSys>;
  title: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulPersonCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  __typename?: 'ContentfulPersonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulPersonEdge>;
  group: Array<ContentfulPersonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  field: ContentfulPersonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulPersonConnectionMaxArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionMinArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionSumArgs = {
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  __typename?: 'ContentfulPersonEdge';
  next: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous: Maybe<ContentfulPerson>;
};

export enum ContentfulPersonFieldsEnum {
  blog_post = 'blog_post',
  blog_post___author___blog_post = 'blog_post___author___blog_post',
  blog_post___author___blog_post___children = 'blog_post___author___blog_post___children',
  blog_post___author___blog_post___contentful_id = 'blog_post___author___blog_post___contentful_id',
  blog_post___author___blog_post___createdAt = 'blog_post___author___blog_post___createdAt',
  blog_post___author___blog_post___id = 'blog_post___author___blog_post___id',
  blog_post___author___blog_post___node_locale = 'blog_post___author___blog_post___node_locale',
  blog_post___author___blog_post___publishDate = 'blog_post___author___blog_post___publishDate',
  blog_post___author___blog_post___slug = 'blog_post___author___blog_post___slug',
  blog_post___author___blog_post___spaceId = 'blog_post___author___blog_post___spaceId',
  blog_post___author___blog_post___tags = 'blog_post___author___blog_post___tags',
  blog_post___author___blog_post___title = 'blog_post___author___blog_post___title',
  blog_post___author___blog_post___updatedAt = 'blog_post___author___blog_post___updatedAt',
  blog_post___author___children = 'blog_post___author___children',
  blog_post___author___children___children = 'blog_post___author___children___children',
  blog_post___author___children___id = 'blog_post___author___children___id',
  blog_post___author___company = 'blog_post___author___company',
  blog_post___author___contentful_id = 'blog_post___author___contentful_id',
  blog_post___author___createdAt = 'blog_post___author___createdAt',
  blog_post___author___email = 'blog_post___author___email',
  blog_post___author___facebook = 'blog_post___author___facebook',
  blog_post___author___github = 'blog_post___author___github',
  blog_post___author___id = 'blog_post___author___id',
  blog_post___author___image___children = 'blog_post___author___image___children',
  blog_post___author___image___contentful_id = 'blog_post___author___image___contentful_id',
  blog_post___author___image___createdAt = 'blog_post___author___image___createdAt',
  blog_post___author___image___description = 'blog_post___author___image___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___author___image___gatsbyImageData = 'blog_post___author___image___gatsbyImageData',
  blog_post___author___image___id = 'blog_post___author___image___id',
  blog_post___author___image___node_locale = 'blog_post___author___image___node_locale',
  blog_post___author___image___spaceId = 'blog_post___author___image___spaceId',
  blog_post___author___image___title = 'blog_post___author___image___title',
  blog_post___author___image___updatedAt = 'blog_post___author___image___updatedAt',
  blog_post___author___internal___content = 'blog_post___author___internal___content',
  blog_post___author___internal___contentDigest = 'blog_post___author___internal___contentDigest',
  blog_post___author___internal___contentFilePath = 'blog_post___author___internal___contentFilePath',
  blog_post___author___internal___description = 'blog_post___author___internal___description',
  blog_post___author___internal___fieldOwners = 'blog_post___author___internal___fieldOwners',
  blog_post___author___internal___ignoreType = 'blog_post___author___internal___ignoreType',
  blog_post___author___internal___mediaType = 'blog_post___author___internal___mediaType',
  blog_post___author___internal___owner = 'blog_post___author___internal___owner',
  blog_post___author___internal___type = 'blog_post___author___internal___type',
  blog_post___author___name = 'blog_post___author___name',
  blog_post___author___node_locale = 'blog_post___author___node_locale',
  blog_post___author___parent___children = 'blog_post___author___parent___children',
  blog_post___author___parent___id = 'blog_post___author___parent___id',
  blog_post___author___phone = 'blog_post___author___phone',
  blog_post___author___shortBio___raw = 'blog_post___author___shortBio___raw',
  blog_post___author___spaceId = 'blog_post___author___spaceId',
  blog_post___author___sys___revision = 'blog_post___author___sys___revision',
  blog_post___author___sys___type = 'blog_post___author___sys___type',
  blog_post___author___title = 'blog_post___author___title',
  blog_post___author___twitter = 'blog_post___author___twitter',
  blog_post___author___updatedAt = 'blog_post___author___updatedAt',
  blog_post___body___raw = 'blog_post___body___raw',
  blog_post___children = 'blog_post___children',
  blog_post___children___children = 'blog_post___children___children',
  blog_post___children___children___children = 'blog_post___children___children___children',
  blog_post___children___children___id = 'blog_post___children___children___id',
  blog_post___children___id = 'blog_post___children___id',
  blog_post___children___internal___content = 'blog_post___children___internal___content',
  blog_post___children___internal___contentDigest = 'blog_post___children___internal___contentDigest',
  blog_post___children___internal___contentFilePath = 'blog_post___children___internal___contentFilePath',
  blog_post___children___internal___description = 'blog_post___children___internal___description',
  blog_post___children___internal___fieldOwners = 'blog_post___children___internal___fieldOwners',
  blog_post___children___internal___ignoreType = 'blog_post___children___internal___ignoreType',
  blog_post___children___internal___mediaType = 'blog_post___children___internal___mediaType',
  blog_post___children___internal___owner = 'blog_post___children___internal___owner',
  blog_post___children___internal___type = 'blog_post___children___internal___type',
  blog_post___children___parent___children = 'blog_post___children___parent___children',
  blog_post___children___parent___id = 'blog_post___children___parent___id',
  blog_post___contentful_id = 'blog_post___contentful_id',
  blog_post___createdAt = 'blog_post___createdAt',
  blog_post___description___raw = 'blog_post___description___raw',
  blog_post___heroImage___children = 'blog_post___heroImage___children',
  blog_post___heroImage___children___children = 'blog_post___heroImage___children___children',
  blog_post___heroImage___children___id = 'blog_post___heroImage___children___id',
  blog_post___heroImage___contentful_id = 'blog_post___heroImage___contentful_id',
  blog_post___heroImage___createdAt = 'blog_post___heroImage___createdAt',
  blog_post___heroImage___description = 'blog_post___heroImage___description',
  blog_post___heroImage___file___contentType = 'blog_post___heroImage___file___contentType',
  blog_post___heroImage___file___fileName = 'blog_post___heroImage___file___fileName',
  blog_post___heroImage___file___url = 'blog_post___heroImage___file___url',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___aspectRatio = 'blog_post___heroImage___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___base64 = 'blog_post___heroImage___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___height = 'blog_post___heroImage___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___src = 'blog_post___heroImage___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___srcSet = 'blog_post___heroImage___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___srcSetWebp = 'blog_post___heroImage___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___srcWebp = 'blog_post___heroImage___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___tracedSVG = 'blog_post___heroImage___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fixed___width = 'blog_post___heroImage___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___aspectRatio = 'blog_post___heroImage___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___base64 = 'blog_post___heroImage___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___sizes = 'blog_post___heroImage___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___src = 'blog_post___heroImage___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___srcSet = 'blog_post___heroImage___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___srcSetWebp = 'blog_post___heroImage___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___srcWebp = 'blog_post___heroImage___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___fluid___tracedSVG = 'blog_post___heroImage___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___gatsbyImageData = 'blog_post___heroImage___gatsbyImageData',
  blog_post___heroImage___id = 'blog_post___heroImage___id',
  blog_post___heroImage___internal___content = 'blog_post___heroImage___internal___content',
  blog_post___heroImage___internal___contentDigest = 'blog_post___heroImage___internal___contentDigest',
  blog_post___heroImage___internal___contentFilePath = 'blog_post___heroImage___internal___contentFilePath',
  blog_post___heroImage___internal___description = 'blog_post___heroImage___internal___description',
  blog_post___heroImage___internal___fieldOwners = 'blog_post___heroImage___internal___fieldOwners',
  blog_post___heroImage___internal___ignoreType = 'blog_post___heroImage___internal___ignoreType',
  blog_post___heroImage___internal___mediaType = 'blog_post___heroImage___internal___mediaType',
  blog_post___heroImage___internal___owner = 'blog_post___heroImage___internal___owner',
  blog_post___heroImage___internal___type = 'blog_post___heroImage___internal___type',
  blog_post___heroImage___node_locale = 'blog_post___heroImage___node_locale',
  blog_post___heroImage___parent___children = 'blog_post___heroImage___parent___children',
  blog_post___heroImage___parent___id = 'blog_post___heroImage___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___aspectRatio = 'blog_post___heroImage___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___base64 = 'blog_post___heroImage___resize___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___height = 'blog_post___heroImage___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___src = 'blog_post___heroImage___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___tracedSVG = 'blog_post___heroImage___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  blog_post___heroImage___resize___width = 'blog_post___heroImage___resize___width',
  blog_post___heroImage___spaceId = 'blog_post___heroImage___spaceId',
  blog_post___heroImage___sys___revision = 'blog_post___heroImage___sys___revision',
  blog_post___heroImage___sys___type = 'blog_post___heroImage___sys___type',
  blog_post___heroImage___title = 'blog_post___heroImage___title',
  blog_post___heroImage___updatedAt = 'blog_post___heroImage___updatedAt',
  blog_post___id = 'blog_post___id',
  blog_post___internal___content = 'blog_post___internal___content',
  blog_post___internal___contentDigest = 'blog_post___internal___contentDigest',
  blog_post___internal___contentFilePath = 'blog_post___internal___contentFilePath',
  blog_post___internal___description = 'blog_post___internal___description',
  blog_post___internal___fieldOwners = 'blog_post___internal___fieldOwners',
  blog_post___internal___ignoreType = 'blog_post___internal___ignoreType',
  blog_post___internal___mediaType = 'blog_post___internal___mediaType',
  blog_post___internal___owner = 'blog_post___internal___owner',
  blog_post___internal___type = 'blog_post___internal___type',
  blog_post___node_locale = 'blog_post___node_locale',
  blog_post___parent___children = 'blog_post___parent___children',
  blog_post___parent___children___children = 'blog_post___parent___children___children',
  blog_post___parent___children___id = 'blog_post___parent___children___id',
  blog_post___parent___id = 'blog_post___parent___id',
  blog_post___parent___internal___content = 'blog_post___parent___internal___content',
  blog_post___parent___internal___contentDigest = 'blog_post___parent___internal___contentDigest',
  blog_post___parent___internal___contentFilePath = 'blog_post___parent___internal___contentFilePath',
  blog_post___parent___internal___description = 'blog_post___parent___internal___description',
  blog_post___parent___internal___fieldOwners = 'blog_post___parent___internal___fieldOwners',
  blog_post___parent___internal___ignoreType = 'blog_post___parent___internal___ignoreType',
  blog_post___parent___internal___mediaType = 'blog_post___parent___internal___mediaType',
  blog_post___parent___internal___owner = 'blog_post___parent___internal___owner',
  blog_post___parent___internal___type = 'blog_post___parent___internal___type',
  blog_post___parent___parent___children = 'blog_post___parent___parent___children',
  blog_post___parent___parent___id = 'blog_post___parent___parent___id',
  blog_post___publishDate = 'blog_post___publishDate',
  blog_post___slug = 'blog_post___slug',
  blog_post___spaceId = 'blog_post___spaceId',
  blog_post___sys___revision = 'blog_post___sys___revision',
  blog_post___sys___type = 'blog_post___sys___type',
  blog_post___tags = 'blog_post___tags',
  blog_post___title = 'blog_post___title',
  blog_post___updatedAt = 'blog_post___updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  company = 'company',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  email = 'email',
  facebook = 'facebook',
  github = 'github',
  id = 'id',
  image___children = 'image___children',
  image___children___children = 'image___children___children',
  image___children___children___children = 'image___children___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___id = 'image___children___id',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___contentFilePath = 'image___children___internal___contentFilePath',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___children___parent___children = 'image___children___parent___children',
  image___children___parent___id = 'image___children___parent___id',
  image___contentful_id = 'image___contentful_id',
  image___createdAt = 'image___createdAt',
  image___description = 'image___description',
  image___file___contentType = 'image___file___contentType',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___url = 'image___file___url',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___base64 = 'image___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___height = 'image___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___src = 'image___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___srcSet = 'image___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fixed___width = 'image___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___base64 = 'image___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___sizes = 'image___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___src = 'image___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___srcSet = 'image___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___gatsbyImageData = 'image___gatsbyImageData',
  image___id = 'image___id',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___contentFilePath = 'image___internal___contentFilePath',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___node_locale = 'image___node_locale',
  image___parent___children = 'image___parent___children',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___id = 'image___parent___id',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___contentFilePath = 'image___parent___internal___contentFilePath',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___parent___id = 'image___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___base64 = 'image___resize___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___height = 'image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___src = 'image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  image___resize___width = 'image___resize___width',
  image___spaceId = 'image___spaceId',
  image___sys___revision = 'image___sys___revision',
  image___sys___type = 'image___sys___type',
  image___title = 'image___title',
  image___updatedAt = 'image___updatedAt',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  node_locale = 'node_locale',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  phone = 'phone',
  shortBio___raw = 'shortBio___raw',
  spaceId = 'spaceId',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___revision = 'sys___revision',
  sys___type = 'sys___type',
  title = 'title',
  twitter = 'twitter',
  updatedAt = 'updatedAt'
}

export type ContentfulPersonFilterInput = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  company: InputMaybe<StringQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  facebook: InputMaybe<StringQueryOperatorInput>;
  github: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  shortBio: InputMaybe<ContentfulPersonShortBioFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulPersonSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  twitter: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulPersonGroupConnection = {
  __typename?: 'ContentfulPersonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulPersonEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulPersonGroupConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonGroupConnectionGroupArgs = {
  field: ContentfulPersonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulPersonGroupConnectionMaxArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonGroupConnectionMinArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonGroupConnectionSumArgs = {
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonShortBio = {
  __typename?: 'ContentfulPersonShortBio';
  raw: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioFilterInput = {
  raw: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulPersonFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  __typename?: 'ContentfulPersonSys';
  contentType: Maybe<ContentfulPersonSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentType = {
  __typename?: 'ContentfulPersonSysContentType';
  sys: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  __typename?: 'ContentfulPersonSysContentTypeSys';
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  contentType: InputMaybe<ContentfulPersonSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ContentfulResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___contentFilePath = 'childImageSharp___children___internal___contentFilePath',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___contentFilePath = 'childImageSharp___internal___contentFilePath',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___contentFilePath = 'childImageSharp___parent___internal___contentFilePath',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  children = 'children',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___contentFilePath = 'childrenImageSharp___children___internal___contentFilePath',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___contentFilePath = 'childrenImageSharp___internal___contentFilePath',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___contentFilePath = 'childrenImageSharp___parent___internal___contentFilePath',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq: InputMaybe<Scalars['GatsbyImageData']>;
  in: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  ne: InputMaybe<Scalars['GatsbyImageData']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST'
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  FILL = 'FILL',
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___aspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___base64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___height = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___originalName = 'fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___src = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___tracedSVG = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___width = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___aspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___base64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___originalImg = 'fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___originalName = 'fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___presentationHeight = 'fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___presentationWidth = 'fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___sizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___src = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___tracedSVG = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___aspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___height = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___originalName = 'resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___src = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___tracedSVG = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___width = 'resize___width'
}

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  contentFilePath: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
  PLAIN = 'PLAIN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  value: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  children: Array<Node>;
  excerpt: Maybe<Scalars['String']>;
  excerptAst: Maybe<Scalars['JSON']>;
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  tableOfContents: Maybe<Scalars['String']>;
  timeToRead: Maybe<Scalars['Int']>;
  wordCount: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  excerpt = 'excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  excerptAst = 'excerptAst',
  frontmatter___title = 'frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings = 'headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___depth = 'headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___id = 'headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___value = 'headings___value',
  html = 'html',
  htmlAst = 'htmlAst',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  rawMarkdownBody = 'rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>;
  sentences: InputMaybe<IntQueryOperatorInput>;
  words: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax: InputMaybe<Scalars['Float']>;
  background: InputMaybe<Scalars['String']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  turdSize: InputMaybe<Scalars['Float']>;
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulDogBreed: ContentfulDogBreedConnection;
  allContentfulDogBreedNameTextNode: ContentfulDogBreedNameTextNodeConnection;
  allContentfulDogBreedStoryTextNode: ContentfulDogBreedStoryTextNodeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allContentfulPerson: ContentfulPersonConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  contentfulAsset: Maybe<ContentfulAsset>;
  contentfulBlogPost: Maybe<ContentfulBlogPost>;
  contentfulContentType: Maybe<ContentfulContentType>;
  contentfulDogBreed: Maybe<ContentfulDogBreed>;
  contentfulDogBreedNameTextNode: Maybe<ContentfulDogBreedNameTextNode>;
  contentfulDogBreedStoryTextNode: Maybe<ContentfulDogBreedStoryTextNode>;
  contentfulEntry: Maybe<ContentfulEntry>;
  contentfulPerson: Maybe<ContentfulPerson>;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  markdownRemark: Maybe<MarkdownRemark>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter: InputMaybe<ContentfulBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulBlogPostSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulDogBreedArgs = {
  filter: InputMaybe<ContentfulDogBreedFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulDogBreedSortInput>;
};


export type QueryAllContentfulDogBreedNameTextNodeArgs = {
  filter: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulDogBreedNameTextNodeSortInput>;
};


export type QueryAllContentfulDogBreedStoryTextNodeArgs = {
  filter: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulDogBreedStoryTextNodeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter: InputMaybe<ContentfulPersonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulPersonSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


export type QueryContentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  fixed: InputMaybe<ContentfulFixedFilterInput>;
  fluid: InputMaybe<ContentfulFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ContentfulResizeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulBlogPostArgs = {
  author: InputMaybe<ContentfulPersonFilterInput>;
  body: InputMaybe<ContentfulBlogPostBodyFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<ContentfulBlogPostDescriptionFilterInput>;
  heroImage: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishDate: InputMaybe<DateQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulDogBreedArgs = {
  barking: InputMaybe<IntQueryOperatorInput>;
  childContentfulDogBreedNameTextNode: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
  childContentfulDogBreedStoryTextNode: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulDogBreedNameTextNode: InputMaybe<ContentfulDogBreedNameTextNodeFilterListInput>;
  childrenContentfulDogBreedStoryTextNode: InputMaybe<ContentfulDogBreedStoryTextNodeFilterListInput>;
  coatLength: InputMaybe<IntQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  drooling: InputMaybe<IntQueryOperatorInput>;
  energy: InputMaybe<IntQueryOperatorInput>;
  goodWithChildren: InputMaybe<IntQueryOperatorInput>;
  goodWithOtherDogs: InputMaybe<IntQueryOperatorInput>;
  goodWithStrangers: InputMaybe<IntQueryOperatorInput>;
  grooming: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  imageLink: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  maxHeightFemale: InputMaybe<FloatQueryOperatorInput>;
  maxHeightMale: InputMaybe<FloatQueryOperatorInput>;
  maxLifeExpentancy: InputMaybe<IntQueryOperatorInput>;
  maxWeightFemale: InputMaybe<IntQueryOperatorInput>;
  maxWeightMale: InputMaybe<IntQueryOperatorInput>;
  minHeightFemale: InputMaybe<FloatQueryOperatorInput>;
  minHeightMale: InputMaybe<FloatQueryOperatorInput>;
  minLifeExpectancy: InputMaybe<IntQueryOperatorInput>;
  minWeightFemale: InputMaybe<IntQueryOperatorInput>;
  minWeightMale: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  origin: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  playfulness: InputMaybe<IntQueryOperatorInput>;
  protectiveness: InputMaybe<IntQueryOperatorInput>;
  shedding: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  story: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
  sys: InputMaybe<ContentfulDogBreedSysFilterInput>;
  trainability: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulDogBreedNameTextNodeArgs = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulDogBreedNameTextNodeSysFilterInput>;
};


export type QueryContentfulDogBreedStoryTextNodeArgs = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  story: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulDogBreedStoryTextNodeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulPersonArgs = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  company: InputMaybe<StringQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  facebook: InputMaybe<StringQueryOperatorInput>;
  github: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  shortBio: InputMaybe<ContentfulPersonShortBioFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulPersonSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  twitter: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  graphqlTypegen: Maybe<Scalars['Boolean']>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  trailingSlash: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  graphqlTypegen = 'graphqlTypegen',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___title = 'siteMetadata___title',
  trailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___contentFilePath = 'pluginCreator___children___internal___contentFilePath',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___contentFilePath = 'pluginCreator___internal___contentFilePath',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___contentFilePath = 'pluginCreator___parent___internal___contentFilePath',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit: InputMaybe<ImageFit>;
  grayscale: InputMaybe<Scalars['Boolean']>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type ContentfulDogBreedNameTextNode = Node & {
  __typename?: 'contentfulDogBreedNameTextNode';
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulDogBreedNameTextNodeSys>;
};

export type ContentfulDogBreedNameTextNodeConnection = {
  __typename?: 'contentfulDogBreedNameTextNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedNameTextNodeEdge>;
  group: Array<ContentfulDogBreedNameTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreedNameTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedNameTextNodeConnectionDistinctArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeConnectionGroupArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedNameTextNodeConnectionMaxArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeConnectionMinArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeConnectionSumArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};

export type ContentfulDogBreedNameTextNodeEdge = {
  __typename?: 'contentfulDogBreedNameTextNodeEdge';
  next: Maybe<ContentfulDogBreedNameTextNode>;
  node: ContentfulDogBreedNameTextNode;
  previous: Maybe<ContentfulDogBreedNameTextNode>;
};

export enum ContentfulDogBreedNameTextNodeFieldsEnum {
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___contentFilePath = 'childMarkdownRemark___children___internal___contentFilePath',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___contentFilePath = 'childMarkdownRemark___internal___contentFilePath',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___contentFilePath = 'childMarkdownRemark___parent___internal___contentFilePath',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  children = 'children',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___contentFilePath = 'childrenMarkdownRemark___children___internal___contentFilePath',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___contentFilePath = 'childrenMarkdownRemark___internal___contentFilePath',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___contentFilePath = 'childrenMarkdownRemark___parent___internal___contentFilePath',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  sys___type = 'sys___type'
}

export type ContentfulDogBreedNameTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulDogBreedNameTextNodeSysFilterInput>;
};

export type ContentfulDogBreedNameTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulDogBreedNameTextNodeFilterInput>;
};

export type ContentfulDogBreedNameTextNodeGroupConnection = {
  __typename?: 'contentfulDogBreedNameTextNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedNameTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulDogBreedNameTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreedNameTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedNameTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeGroupConnectionGroupArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedNameTextNodeGroupConnectionMaxArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeGroupConnectionMinArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};


export type ContentfulDogBreedNameTextNodeGroupConnectionSumArgs = {
  field: ContentfulDogBreedNameTextNodeFieldsEnum;
};

export type ContentfulDogBreedNameTextNodeSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulDogBreedNameTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDogBreedNameTextNodeSys = {
  __typename?: 'contentfulDogBreedNameTextNodeSys';
  type: Maybe<Scalars['String']>;
};

export type ContentfulDogBreedNameTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogBreedStoryTextNode = Node & {
  __typename?: 'contentfulDogBreedStoryTextNode';
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  story: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulDogBreedStoryTextNodeSys>;
};

export type ContentfulDogBreedStoryTextNodeConnection = {
  __typename?: 'contentfulDogBreedStoryTextNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedStoryTextNodeEdge>;
  group: Array<ContentfulDogBreedStoryTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreedStoryTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedStoryTextNodeConnectionDistinctArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeConnectionGroupArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedStoryTextNodeConnectionMaxArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeConnectionMinArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeConnectionSumArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};

export type ContentfulDogBreedStoryTextNodeEdge = {
  __typename?: 'contentfulDogBreedStoryTextNodeEdge';
  next: Maybe<ContentfulDogBreedStoryTextNode>;
  node: ContentfulDogBreedStoryTextNode;
  previous: Maybe<ContentfulDogBreedStoryTextNode>;
};

export enum ContentfulDogBreedStoryTextNodeFieldsEnum {
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___contentFilePath = 'childMarkdownRemark___children___internal___contentFilePath',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___contentFilePath = 'childMarkdownRemark___internal___contentFilePath',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___contentFilePath = 'childMarkdownRemark___parent___internal___contentFilePath',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  children = 'children',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___contentFilePath = 'childrenMarkdownRemark___children___internal___contentFilePath',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___contentFilePath = 'childrenMarkdownRemark___internal___contentFilePath',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___contentFilePath = 'childrenMarkdownRemark___parent___internal___contentFilePath',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___contentFilePath = 'children___children___internal___contentFilePath',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___contentFilePath = 'children___internal___contentFilePath',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___contentFilePath = 'children___parent___internal___contentFilePath',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___contentFilePath = 'internal___contentFilePath',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___contentFilePath = 'parent___children___internal___contentFilePath',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___contentFilePath = 'parent___internal___contentFilePath',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___contentFilePath = 'parent___parent___internal___contentFilePath',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  story = 'story',
  sys___type = 'sys___type'
}

export type ContentfulDogBreedStoryTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  story: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulDogBreedStoryTextNodeSysFilterInput>;
};

export type ContentfulDogBreedStoryTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulDogBreedStoryTextNodeFilterInput>;
};

export type ContentfulDogBreedStoryTextNodeGroupConnection = {
  __typename?: 'contentfulDogBreedStoryTextNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogBreedStoryTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulDogBreedStoryTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogBreedStoryTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogBreedStoryTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeGroupConnectionGroupArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogBreedStoryTextNodeGroupConnectionMaxArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeGroupConnectionMinArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};


export type ContentfulDogBreedStoryTextNodeGroupConnectionSumArgs = {
  field: ContentfulDogBreedStoryTextNodeFieldsEnum;
};

export type ContentfulDogBreedStoryTextNodeSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulDogBreedStoryTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDogBreedStoryTextNodeSys = {
  __typename?: 'contentfulDogBreedStoryTextNodeSys';
  type: Maybe<Scalars['String']>;
};

export type ContentfulDogBreedStoryTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type GatsbyContentfulFixedFragment = { __typename?: 'ContentfulFixed', base64: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyContentfulFixed_TracedSvgFragment = { __typename?: 'ContentfulFixed', tracedSVG: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyContentfulFixed_NoBase64Fragment = { __typename?: 'ContentfulFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyContentfulFixed_WithWebpFragment = { __typename?: 'ContentfulFixed', base64: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = { __typename?: 'ContentfulFixed', width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyContentfulFluidFragment = { __typename?: 'ContentfulFluid', base64: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyContentfulFluid_TracedSvgFragment = { __typename?: 'ContentfulFluid', tracedSVG: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyContentfulFluid_NoBase64Fragment = { __typename?: 'ContentfulFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyContentfulFluid_WithWebpFragment = { __typename?: 'ContentfulFluid', base64: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = { __typename?: 'ContentfulFluid', aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed', base64: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed', base64: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid', base64: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid', maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid', base64: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { __typename?: 'Query', allSiteFunction: { __typename?: 'SiteFunctionConnection', nodes: Array<{ __typename?: 'SiteFunction', functionRoute: string }> }, allSitePage: { __typename?: 'SitePageConnection', nodes: Array<{ __typename?: 'SitePage', path: string }> } };

export type AllDogBreedsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDogBreedsQuery = { __typename?: 'Query', allContentfulDogBreed: { __typename?: 'ContentfulDogBreedConnection', edges: Array<{ __typename?: 'ContentfulDogBreedEdge', node: { __typename?: 'ContentfulDogBreed', id: string, name: { __typename?: 'contentfulDogBreedNameTextNode', name: string } } }> } };

export type FindAllDogBreedsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllDogBreedsQuery = { __typename?: 'Query', allContentfulDogBreed: { __typename?: 'ContentfulDogBreedConnection', nodes: Array<{ __typename?: 'ContentfulDogBreed', imageLink: string, id: string, name: { __typename?: 'contentfulDogBreedNameTextNode', name: string } }> } };

export type DogBreedByNameQueryVariables = Exact<{
  name: Scalars['String'];
  nextDogBreed: InputMaybe<Scalars['String']>;
  previousDogBreed: InputMaybe<Scalars['String']>;
}>;


export type DogBreedByNameQuery = { __typename?: 'Query', contentfulDogBreed: { __typename?: 'ContentfulDogBreed', barking: number, coatLength: number, drooling: number, energy: number, goodWithChildren: number, goodWithOtherDogs: number, goodWithStrangers: number, grooming: number, imageLink: string, maxHeightMale: number, maxWeightMale: number, maxHeightFemale: number, maxWeightFemale: number, maxLifeExpentancy: number, minWeightMale: number, minHeightMale: number, minHeightFemale: number, minWeightFemale: number, minLifeExpectancy: number, playfulness: number, protectiveness: number, shedding: number, trainability: number, origin: string, name: { __typename?: 'contentfulDogBreedNameTextNode', name: string }, story: { __typename?: 'contentfulDogBreedStoryTextNode', story: string } }, previous: { __typename?: 'ContentfulDogBreed', id: string, name: { __typename?: 'contentfulDogBreedNameTextNode', name: string } }, next: { __typename?: 'ContentfulDogBreed', id: string, name: { __typename?: 'contentfulDogBreedNameTextNode', name: string } } };
