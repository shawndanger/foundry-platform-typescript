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
import type * as _Orchestration from "@osdk/foundry.orchestration";
import type {
  SharedClient as $OldClient,
  SharedClientContext as $OldClientContext,
} from "@osdk/shared.client";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client2";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Connectivity from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    $body: _Connectivity.CreateFileImportRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.FileImport>
> = [1, "/v2/connectivity/connections/{0}/fileImports", 3];

/**
 * Creates a new FileImport.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-file-import-write]
 * URL: /v2/connectivity/connections/{connectionRid}/fileImports
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    $body: _Connectivity.CreateFileImportRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.FileImport> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteFileImport: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/connectivity/connections/{0}/fileImports/{1}", 2];

/**
 * Delete the FileImport with the specified RID.
 * Deleting the file import does not delete the destination dataset but the dataset will no longer
 * be updated by this import.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-file-import-write]
 * URL: /v2/connectivity/connections/{connectionRid}/fileImports/{fileImportRid}
 */
export function deleteFileImport(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteFileImport, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.FileImport>
> = [0, "/v2/connectivity/connections/{0}/fileImports/{1}", 2];

/**
 * Get the FileImport with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-file-import-read]
 * URL: /v2/connectivity/connections/{connectionRid}/fileImports/{fileImportRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.FileImport> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _execute: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.BuildRid>
> = [1, "/v2/connectivity/connections/{0}/fileImports/{1}/execute", 2];

/**
 * Executes the FileImport, which runs asynchronously as a [Foundry Build](https://www.palantir.com/docs/foundry/data-integration/builds/).
 * The returned BuildRid can be used to check the status via the Orchestration API.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-file-import-execute]
 * URL: /v2/connectivity/connections/{connectionRid}/fileImports/{fileImportRid}/execute
 */
export function execute(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    fileImportRid: _Connectivity.FileImportRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.BuildRid> {
  return $foundryPlatformFetch($ctx, _execute, ...args);
}
