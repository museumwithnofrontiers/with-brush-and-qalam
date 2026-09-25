import { exhibitionConfig } from '@museumwnf/viewer-layout/dxa'

// The whole declaration of this website: a DXA exhibition, whose pages,
// shell, menu, sponsor strip and legacy redirects are the family's
// (`exhibitionConfig`, @museumwnf/viewer-layout/dxa). What is this
// exhibition's own is below.

// The source-database chip's colour, per project: one of
// @museumwnf/viewer-layout's `mwnf-chip--<name>` classes for every project id
// the package's `manifest.projects` carries.
// A record with no project at all is an Explore record, whose chip the
// family draws itself.
export const projectColors = {
  '0ca36c45-f02c-5743-aa86-fe3cce6e8a36': 'mwnf-chip--EXH', // With Brush and Qalam
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4': 'mwnf-chip--ISLandEPM', // Explore Islamic Art Collections — shares Discover Islamic Art's colour
}

// The projects whose item sheets still carry legacy's Explore-partner notice.
export const noticeProjects = [
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4', // Explore Islamic Art Collections
]

export default exhibitionConfig({
  // The dataset package this website renders. Must match the alias in
  // vite.config.js and the dependency in package.json.
  datasetPackage: '@museumwnf/with-brush-and-qalam-data',

  // The name for a package that predates `manifest.site`.
  siteName: 'With Brush and Qalam',

  // The address this build is deployed at, base path included, read by the
  // source credit: the GitHub Pages address, the same repository segment
  // vite.config.js's `base` puts in the build's base path, so the two change
  // together, and with the domain.
  origin: 'https://museumwithnofrontiers.github.io/with-brush-and-qalam',

  projectColors,
  noticeProjects,

  // The credits page's body.
  creditsBody: 'withBrushAndQalam.credits.body',
})
