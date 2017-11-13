import { projectMapper, projectFilter } from 'util/helper'

let projects = []

let graceshopper = {/* ... */}
let stackathon = {/* ... */}
let capstone = {/* ... */}

projects.push(graceshopper, stackathon, capstone)

projectMapper(projects)
projectFilter(projects)
console.log(projects)

const store = { cohort: '1706-flex' /* ... */ }

UI = render(store)
store.fetchProjects()
UI = render(store)
