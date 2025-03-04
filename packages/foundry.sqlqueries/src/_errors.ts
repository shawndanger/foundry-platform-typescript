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
 * Could not cancel the Query.
 *
 * Log Safety: UNSAFE
 */
export interface CancelQueryPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CancelQueryPermissionDenied";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * Could not execute the Query.
 *
 * Log Safety: SAFE
 */
export interface ExecuteQueryPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteQueryPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not getResults the Query.
 *
 * Log Safety: UNSAFE
 */
export interface GetResultsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetResultsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * Could not getStatus the Query.
 *
 * Log Safety: UNSAFE
 */
export interface GetStatusPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetStatusPermissionDenied";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * The query was canceled.
 *
 * Log Safety: UNSAFE
 */
export interface QueryCanceled {
  errorCode: "INVALID_ARGUMENT";
  errorName: "QueryCanceled";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * The query failed.
 *
 * Log Safety: UNSAFE
 */
export interface QueryFailed {
  errorCode: "INTERNAL";
  errorName: "QueryFailed";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
    errorMessage: unknown;
  };
}

/**
 * The query cannot be parsed.
 *
 * Log Safety: UNSAFE
 */
export interface QueryParseError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "QueryParseError";
  errorInstanceId: string;
  parameters: {
    errorMessage: unknown;
  };
}

/**
 * The provided token does not have permission to access the given query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "QueryPermissionDenied";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * The query is running.
 *
 * Log Safety: UNSAFE
 */
export interface QueryRunning {
  errorCode: "INVALID_ARGUMENT";
  errorName: "QueryRunning";
  errorInstanceId: string;
  parameters: {
    queryId: unknown;
  };
}

/**
 * The provided token does not have permission to access the inputs to the query.
 *
 * Log Safety: SAFE
 */
export interface ReadQueryInputsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReadQueryInputsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    rids: unknown;
  };
}
