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
   * A GeoJSON object MAY have a member named "bbox" to include
information on the coordinate range for its Geometries, Features, or
FeatureCollections. The value of the bbox member MUST be an array of
length 2*n where n is the number of dimensions represented in the
contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point. The axes order
of a bbox follows the axes order of geometries.
See https://datatracker.ietf.org/doc/html/rfc7946#section-5.
   *
   * Log Safety: UNSAFE
   */
export type BBox = Array<Coordinate>;

/**
 * Log Safety: UNSAFE
 */
export type Coordinate = number;

/**
 * See https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.2 for more information.
 *
 * Log Safety: UNSAFE
 */
export interface GeoPoint {
  coordinates: Position;
  bbox?: BBox;
}

/**
   * A linear ring is a closed LineString with four or more positions.
The first and last positions are equivalent, and they MUST contain
identical values; their representation SHOULD also be identical.
A linear ring is the boundary of a surface or the boundary of a hole in
a surface.
A linear ring MUST follow the right-hand rule with respect to the area
it bounds, i.e., exterior rings are counterclockwise, and holes are
clockwise.
See https://tools.ietf.org/html/rfc7946#section-3.1.6.
   *
   * Log Safety: UNSAFE
   */
export type LinearRing = Array<Position>;

/**
 * See https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6
 *
 * Log Safety: UNSAFE
 */
export interface Polygon {
  coordinates: Array<LinearRing>;
  bbox?: BBox;
}

/**
   * GeoJSon fundamental geometry construct.
A position is an array of numbers. There MUST be two or more elements.
The first two elements are longitude and latitude, precisely in that order and using decimal numbers.
Altitude or elevation MAY be included as an optional third element.
Implementations SHOULD NOT extend positions beyond three elements
because the semantics of extra elements are unspecified and ambiguous.
Historically, some implementations have used a fourth element to carry
a linear referencing measure (sometimes denoted as "M") or a numerical
timestamp, but in most situations a parser will not be able to properly
interpret these values. The interpretation and meaning of additional
elements is beyond the scope of this specification, and additional
elements MAY be ignored by parsers.
   *
   * Log Safety: UNSAFE
   */
export type Position = Array<Coordinate>;
