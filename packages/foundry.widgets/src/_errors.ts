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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Could not delete the Release.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteReleasePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteReleasePermissionDenied";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
    releaseVersion: unknown;
  };
}

/**
 * The .zip archive contains too many files.
 *
 * Log Safety: SAFE
 */
export interface FileCountLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileCountLimitExceeded";
  errorInstanceId: string;
  parameters: {
    fileCountLimit: unknown;
  };
}

/**
   * A file inside the .zip archive is too big. You must ensure that all files inside
the .zip archive are within the limit.
   *
   * Log Safety: UNSAFE
   */
export interface FileSizeLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeLimitExceeded";
  errorInstanceId: string;
  parameters: {
    fileSizeBytesLimit: unknown;
    currentFileSizeBytes: unknown;
    currentFilePath: unknown;
  };
}

/**
   * The manifest file in the .zip archive at the path .palantir/widgets.config.json
could not be found or is not well formed.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidManifest {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidManifest";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
  };
}

/**
 * The manifest file targets a widget set that has not linked the repository to publish.
 *
 * Log Safety: SAFE
 */
export interface InvalidPublishRepository {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPublishRepository";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given version is invalid. Versions must follow semantic versioning with major, minor, and patch versions separate by periods, e.g. 0.1.0 or 1.2.3.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidVersion";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * Could not publish the Repository.
 *
 * Log Safety: SAFE
 */
export interface PublishReleasePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PublishReleasePermissionDenied";
  errorInstanceId: string;
  parameters: {
    repositoryRid: unknown;
  };
}

/**
 * The given Release could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface ReleaseNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ReleaseNotFound";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
    releaseVersion: unknown;
  };
}

/**
 * The given Repository could not be found.
 *
 * Log Safety: SAFE
 */
export interface RepositoryNotFound {
  errorCode: "NOT_FOUND";
  errorName: "RepositoryNotFound";
  errorInstanceId: string;
  parameters: {
    repositoryRid: unknown;
  };
}

/**
 * The given version already exists.
 *
 * Log Safety: UNSAFE
 */
export interface VersionAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "VersionAlreadyExists";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
   * The widget set contains too many versions. You must delete an old version before
uploading a new one.
   *
   * Log Safety: SAFE
   */
export interface VersionLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "VersionLimitExceeded";
  errorInstanceId: string;
  parameters: {
    versionLimit: unknown;
  };
}

/**
 * The given WidgetSet could not be found.
 *
 * Log Safety: SAFE
 */
export interface WidgetSetNotFound {
  errorCode: "NOT_FOUND";
  errorName: "WidgetSetNotFound";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
  };
}
