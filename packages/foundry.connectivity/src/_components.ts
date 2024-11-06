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
import type * as _Datasets from "@osdk/foundry.datasets";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * The agent proxy runtime is used to connect
to data sources not accessible over the Internet. The agent acts as an inverting network proxy, forwarding
network traffic originating in Foundry into the network where the agent is deployed, and relaying traffic
back to Foundry. This allows capabilities in Foundry to work almost exactly the same as when using a
direct connection but without requiring you to allow inbound network traffic to your systems originating
from Foundry's IP addresses.
   *
   * Log Safety: UNSAFE
   */
export interface AgentProxyRuntime {
  agentRids: Array<AgentRid>;
}

/**
 * The Resource Identifier (RID) of an Agent.
 *
 * Log Safety: UNSAFE
 */
export type AgentRid = LooselyBrandedString<"AgentRid">;

/**
   * The agent worker runtime is used to
connect to data sources not accessible over the Internet. An agent worker should only be used when the desired
connector does not support the agent proxy runtime. Agent worker runtimes are associated with a single or
multiple agents that store the source configuration and credentials locally in an encrypted format,
and run source capabilities on the agent itself.
   *
   * Log Safety: UNSAFE
   */
export interface AgentWorkerRuntime {
  agentRids: Array<AgentRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Connection {
  rid: ConnectionRid;
  displayName: ConnectionDisplayName;
  runtimePlatform: RuntimePlatform;
}

/**
 * Log Safety: UNSAFE
 */
export type ConnectionDisplayName = LooselyBrandedString<
  "ConnectionDisplayName"
>;

/**
 * The Resource Identifier (RID) of a Connection (formerly known as a source).
 *
 * Log Safety: SAFE
 */
export type ConnectionRid = LooselyBrandedString<"ConnectionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateFileImportRequest {
  datasetRid: _Datasets.DatasetRid;
  importMode: FileImportMode;
  displayName: FileImportDisplayName;
  branchName?: _Datasets.BranchName;
  subfolder?: string;
  fileImportFilters: Array<FileImportFilter>;
}

/**
   * Direct connections enable users to connect
to data sources accessible over the Internet without needing to set up an agent. If your Foundry stack is
hosted on-premises, you can also connect to data sources within your on-premises network.
This is the preferred source connection method if the data source is accessible over the Internet.
   *
   * Log Safety: SAFE
   */
export interface DirectConnectionRuntime {
  networkEgressPolicyRids: Array<NetworkEgressPolicyRid>;
}

/**
 * If any file has a relative path matching the regular expression, sync all files in the subfolder that are not otherwise filtered.
 *
 * Log Safety: UNSAFE
 */
export interface FileAnyPathMatchesFilter {
  regex: string;
}

/**
 * Import all filtered files only if there are at least the specified number of files remaining.
 *
 * Log Safety: SAFE
 */
export interface FileAtLeastCountFilter {
  minFilesCount: number;
}

/**
   * Only import files that have changed or been added since the last import run. Whether or not a file is considered to be changed is determined by the specified file properties.
This will exclude files uploaded in any previous imports, regardless of the file import mode used. A SNAPSHOT file import mode does not reset the filter.
   *
   * Log Safety: SAFE
   */
export interface FileChangedSinceLastUploadFilter {
  fileProperties: Array<FileProperty>;
}

/**
 * Log Safety: UNSAFE
 */
export interface FileImport {
  rid: FileImportRid;
  connectionRid: ConnectionRid;
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
  displayName: FileImportDisplayName;
  fileImportFilters: Array<FileImportFilter>;
  importMode: FileImportMode;
  subfolder?: string;
}

/**
   * A custom file import filter. Custom file import filters can be fetched but cannot currently be used
when creating or updating file imports.
   *
   * Log Safety: UNSAFE
   */
export interface FileImportCustomFilter {
  config: any;
}

/**
 * Log Safety: UNSAFE
 */
export type FileImportDisplayName = LooselyBrandedString<
  "FileImportDisplayName"
>;

/**
   * Filters allow you to filter source files
before they are imported into Foundry.
   *
   * Log Safety: UNSAFE
   */
export type FileImportFilter =
  | ({ type: "pathNotMatchesFilter" } & FilePathNotMatchesFilter)
  | ({ type: "anyPathMatchesFilter" } & FileAnyPathMatchesFilter)
  | ({ type: "filesCountLimitFilter" } & FilesCountLimitFilter)
  | ({
    type: "changedSinceLastUploadFilter";
  } & FileChangedSinceLastUploadFilter)
  | ({ type: "customFilter" } & FileImportCustomFilter)
  | ({ type: "lastModifiedAfterFilter" } & FileLastModifiedAfterFilter)
  | ({ type: "pathMatchesFilter" } & FilePathMatchesFilter)
  | ({ type: "atLeastCountFilter" } & FileAtLeastCountFilter)
  | ({ type: "fileSizeFilter" } & FileSizeFilter);

/**
   * Import mode governs how raw files are read from an external system, and written into a Foundry dataset.
SNAPSHOT: Defines a new dataset state consisting only of files from a particular import execution.
APPEND: Purely additive and yields data from previous import executions in addition to newly added files.
UPDATE: Replaces existing files from previous import executions based on file names.
   *
   * Log Safety: SAFE
   */
export type FileImportMode = "SNAPSHOT" | "APPEND" | "UPDATE";

/**
 * The Resource Identifier (RID) of a FileImport (formerly known as a batch sync).
 *
 * Log Safety: SAFE
 */
export type FileImportRid = LooselyBrandedString<"FileImportRid">;

/**
 * Only import files that have been modified after a specified timestamp
 *
 * Log Safety: UNSAFE
 */
export interface FileLastModifiedAfterFilter {
  afterTimestamp?: string;
}

/**
   * Only import files whose path (relative to the root of the source) matches the regular expression.
Example
Suppose we are importing files from relative/subfolder.
relative/subfolder contains:

relative/subfolder/include-file.txt
relative/subfolder/exclude-file.txt
relative/subfolder/other-file.txt

With the relative/subfolder/include-.*.txt regex, only relative/subfolder/include-file.txt will be imported.
   *
   * Log Safety: UNSAFE
   */
export interface FilePathMatchesFilter {
  regex: string;
}

/**
   * Only import files whose path (relative to the root of the source) does not match the regular expression.
Example
Suppose we are importing files from relative/subfolder.
relative/subfolder contains:

relative/subfolder/include-file.txt
relative/subfolder/exclude-file.txt
relative/subfolder/other-file.txt

With the relative/subfolder/exclude-.*.txt regex, both relative/subfolder/include-file.txt and relative/subfolder/other-file.txt will be imported,
and relative/subfolder/exclude-file.txt will be excluded from the import.
   *
   * Log Safety: UNSAFE
   */
export interface FilePathNotMatchesFilter {
  regex: string;
}

/**
 * Log Safety: SAFE
 */
export type FileProperty = "LAST_MODIFIED" | "SIZE";

/**
   * Only import files whose size is between the specified minimum and maximum values.
At least one of gt or lt should be present.
If both are present, the value specified for gt must be strictly less than lt - 1.
   *
   * Log Safety: SAFE
   */
export interface FileSizeFilter {
  gt?: _Core.SizeBytes;
  lt?: _Core.SizeBytes;
}

/**
   * Only retain filesCount number of files in each transaction.
The choice of files to retain is made without any guarantee of order.
This option can increase the reliability of incremental syncs.
   *
   * Log Safety: SAFE
   */
export interface FilesCountLimitFilter {
  filesCount: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListFileImportsResponse {
  data: Array<FileImport>;
  nextPageToken?: _Core.PageToken;
}

/**
 * The Resource Identifier (RID) of a Network Egress Policy.
 *
 * Log Safety: SAFE
 */
export type NetworkEgressPolicyRid = LooselyBrandedString<
  "NetworkEgressPolicyRid"
>;

/**
 * Log Safety: DO_NOT_LOG
 */
export type PlaintextValue = LooselyBrandedString<"PlaintextValue">;

/**
   * The runtime of a Connection, which defines the
networking configuration and where capabilities are executed.
   *
   * Log Safety: UNSAFE
   */
export type RuntimePlatform =
  | ({ type: "directConnectionRuntime" } & DirectConnectionRuntime)
  | ({ type: "agentProxyRuntime" } & AgentProxyRuntime)
  | ({ type: "agentWorkerRuntime" } & AgentWorkerRuntime);

/**
 * Log Safety: UNSAFE
 */
export type SecretName = LooselyBrandedString<"SecretName">;

/**
 * Log Safety: DO_NOT_LOG
 */
export interface UpdateSecretsConnectionRequest {
  secrets: Record<SecretName, PlaintextValue>;
}
