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

const _get: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    tableImportRid: _Connectivity.TableImportRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.TableImport>
> = [0, "/v2/connectivity/connections/{0}/tableImports/{1}", 2];

/**
 * Get the TableImport with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: []
 * URL: /v2/connectivity/connections/{connectionRid}/tableImports/{tableImportRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    tableImportRid: _Connectivity.TableImportRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.TableImport> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
