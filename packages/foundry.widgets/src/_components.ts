/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as _Core from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface ListReleasesResponse {
  data: Array<Release>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface Release {
  widgetSetRid: WidgetSetRid;
  version: ReleaseVersion;
  locator: ReleaseLocator;
  description?: string;
}

/**
 * A locator for where the backing files of a release are stored.
 *
 * Log Safety: UNSAFE
 */
export interface ReleaseLocator {
  repositoryRid: RepositoryRid;
  repositoryVersion: RepositoryVersion;
}

/**
 * The semantic version of the widget set.
 *
 * Log Safety: UNSAFE
 */
export type ReleaseVersion = LooselyBrandedString<"ReleaseVersion">;

/**
 * Log Safety: SAFE
 */
export interface Repository {
  rid: RepositoryRid;
  widgetSetRid?: WidgetSetRid;
}

/**
 * A Resource Identifier (RID) identifying a repository.
 *
 * Log Safety: SAFE
 */
export type RepositoryRid = LooselyBrandedString<"RepositoryRid">;

/**
 * A semantic version of a repository storing backing files.
 *
 * Log Safety: UNSAFE
 */
export type RepositoryVersion = LooselyBrandedString<"RepositoryVersion">;

/**
 * Log Safety: SAFE
 */
export interface WidgetSet {
  rid: WidgetSetRid;
  publishRepositoryRid?: RepositoryRid;
}

/**
 * A Resource Identifier (RID) identifying a widget set.
 *
 * Log Safety: SAFE
 */
export type WidgetSetRid = LooselyBrandedString<"WidgetSetRid">;
