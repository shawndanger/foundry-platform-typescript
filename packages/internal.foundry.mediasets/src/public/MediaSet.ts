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

import type * as _Core from "@osdk/internal.foundry.core";
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
import type * as _Mediasets from "../_components.js";

//

const _read: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    mediaItemRid: _Core.MediaItemRid,
  ) => Promise<Response>
> = [0, "/v2/mediasets/{0}/items/{1}", , , "*/*"];

/**
 * Gets the content of a media item.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-read]
 * URL: /v2/mediasets/{mediaSetRid}/items/{mediaItemRid}
 */
export function read(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [mediaSetRid: _Core.MediaSetRid, mediaItemRid: _Core.MediaItemRid]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _read, ...args);
}

const _info: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    mediaItemRid: _Core.MediaItemRid,
  ) => Promise<_Mediasets.GetMediaItemInfoResponse>
> = [0, "/v2/mediasets/{0}/items/{1}/info"];

/**
 * Gets information about the media item.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-read]
 * URL: /v2/mediasets/{mediaSetRid}/items/{mediaItemRid}/info
 */
export function info(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [mediaSetRid: _Core.MediaSetRid, mediaItemRid: _Core.MediaItemRid]
): Promise<_Mediasets.GetMediaItemInfoResponse> {
  return $foundryPlatformFetch($ctx, _info, ...args);
}

const _reference: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    mediaItemRid: _Core.MediaItemRid,
  ) => Promise<_Core.MediaReference>
> = [0, "/v2/mediasets/{0}/items/{1}/reference"];

/**
 * Gets the [media reference](https://www.palantir.com/docs/foundry/data-integration/media-sets/#media-references) for this media item.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-read]
 * URL: /v2/mediasets/{mediaSetRid}/items/{mediaItemRid}/reference
 */
export function reference(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [mediaSetRid: _Core.MediaSetRid, mediaItemRid: _Core.MediaItemRid]
): Promise<_Core.MediaReference> {
  return $foundryPlatformFetch($ctx, _reference, ...args);
}

const _upload: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    $body: Blob,
    $queryParams?: {
      mediaItemPath?: _Core.MediaItemPath | undefined;
      branchName?: _Mediasets.BranchName | undefined;
      branchRid?: _Mediasets.BranchRid | undefined;
      viewRid?: _Core.MediaSetViewRid | undefined;
      transactionId?: _Mediasets.TransactionId | undefined;
    },
  ) => Promise<_Mediasets.PutMediaItemResponse>
> = [1, "/v2/mediasets/{0}/items", 3, "*/*"];

/**
 * Uploads a media item to an existing media set.
 * The body of the request must contain the binary content of the file and the `Content-Type` header must be `application/octet-stream`.
 * A branch name, or branch rid, or view rid may optionally be specified.  If none is specified, the item will be uploaded to the default branch. If more than one is specified, an error is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-write]
 * URL: /v2/mediasets/{mediaSetRid}/items
 */
export function upload(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    mediaSetRid: _Core.MediaSetRid,
    $body: Blob,
    $queryParams?: {
      mediaItemPath?: _Core.MediaItemPath | undefined;
      branchName?: _Mediasets.BranchName | undefined;
      branchRid?: _Mediasets.BranchRid | undefined;
      viewRid?: _Core.MediaSetViewRid | undefined;
      transactionId?: _Mediasets.TransactionId | undefined;
    },
  ]
): Promise<_Mediasets.PutMediaItemResponse> {
  return $foundryPlatformFetch($ctx, _upload, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    $queryParams?: { branchName?: _Mediasets.BranchName | undefined },
  ) => Promise<_Mediasets.TransactionId>
> = [1, "/v2/mediasets/{0}/transactions", 2];

/**
 * Creates a new transaction. Items uploaded to the media set while this transaction is open will not be reflected until the transaction is committed.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-write]
 * URL: /v2/mediasets/{mediaSetRid}/transactions
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    mediaSetRid: _Core.MediaSetRid,

    $queryParams?: { branchName?: _Mediasets.BranchName | undefined },
  ]
): Promise<_Mediasets.TransactionId> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _commit: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    transactionId: _Mediasets.TransactionId,
  ) => Promise<void>
> = [1, "/v2/mediasets/{0}/transactions/{1}/commit"];

/**
 * Commits an open transaction. On success, items uploaded to the media set during this transaction will become available.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-write]
 * URL: /v2/mediasets/{mediaSetRid}/transactions/{transactionId}/commit
 */
export function commit(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    mediaSetRid: _Core.MediaSetRid,
    transactionId: _Mediasets.TransactionId,
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _commit, ...args);
}

const _abort: $FoundryPlatformMethod<
  (
    mediaSetRid: _Core.MediaSetRid,
    transactionId: _Mediasets.TransactionId,
  ) => Promise<void>
> = [1, "/v2/mediasets/{0}/transactions/{1}/abort"];

/**
 * Aborts an open transaction. Items uploaded to the media set during this transaction will be deleted.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:mediasets-write]
 * URL: /v2/mediasets/{mediaSetRid}/transactions/{transactionId}/abort
 */
export function abort(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    mediaSetRid: _Core.MediaSetRid,
    transactionId: _Mediasets.TransactionId,
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _abort, ...args);
}
