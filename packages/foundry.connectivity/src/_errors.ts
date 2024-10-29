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
   * Details of the connection (such as which types of import it supports) could not be determined.

   *
   * Log Safety: UNSAFE
   */
export interface ConnectionDetailsNotDetermined {
  errorCode: "INTERNAL";
  errorName: "ConnectionDetailsNotDetermined";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
    connectionType: unknown;
  };
}

/**
 * The given Connection could not be found.
 *
 * Log Safety: SAFE
 */
export interface ConnectionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ConnectionNotFound";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
 * Could not create the FileImport.
 *
 * Log Safety: SAFE
 */
export interface CreateFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
 * Could not delete the FileImport.
 *
 * Log Safety: SAFE
 */
export interface DeleteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
 * Could not execute the FileImport.
 *
 * Log Safety: SAFE
 */
export interface ExecuteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * Custom file import filters can be fetched but cannot currently be used
when creating or updating file imports.

   *
   * Log Safety: UNSAFE
   */
export interface FileImportCustomFilterCannotBeUsedToCreateOrUpdateFileImports {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileImportCustomFilterCannotBeUsedToCreateOrUpdateFileImports";
  errorInstanceId: string;
  parameters: {
    config: unknown;
  };
}

/**
 * The given FileImport could not be found.
 *
 * Log Safety: SAFE
 */
export interface FileImportNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FileImportNotFound";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * The specified connection does not support file imports.

   *
   * Log Safety: SAFE
   */
export interface FileImportNotSupportedForConnection {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileImportNotSupportedForConnection";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
   * The `gt` field in the FileSizeFilter cannot be a negative number.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterGreaterThanCannotBeNegative {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterGreaterThanCannotBeNegative";
  errorInstanceId: string;
  parameters: {
    gt: unknown;
  };
}

/**
   * The provided `gt` and `lt` fields in the FileSizeFilter are invalid. No files will ever
satisfy the provided range. The value specified for `gt` must be strictly less than `lt - 1`.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterInvalidGreaterThanAndLessThanRange {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterInvalidGreaterThanAndLessThanRange";
  errorInstanceId: string;
  parameters: {
    gt: unknown;
    lt: unknown;
  };
}

/**
   * The `lt` field in the FileSizeFilter must be at least 1 byte.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterLessThanMustBeOneByteOrLarger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterLessThanMustBeOneByteOrLarger";
  errorInstanceId: string;
  parameters: {
    lt: unknown;
  };
}

/**
   * Both the `gt` and `lt` fields are missing from the FileSizeFilter. At least one of these
fields must be present

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterMissingGreaterThanAndLessThan {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterMissingGreaterThanAndLessThan";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The secret names provided do not exist on the connection.

   *
   * Log Safety: UNSAFE
   */
export interface SecretNamesDoNotExist {
  errorCode: "INVALID_ARGUMENT";
  errorName: "SecretNamesDoNotExist";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
    secretNames: unknown;
  };
}

/**
 * Could not updateSecrets the Connection.
 *
 * Log Safety: SAFE
 */
export interface UpdateSecretsConnectionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UpdateSecretsConnectionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}
