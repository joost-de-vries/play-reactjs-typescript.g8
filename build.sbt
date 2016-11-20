name := """play-reactjs-typescript"""
version := "0.0.1"
lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"
incOptions := incOptions.value.withNameHashing(true)
updateOptions := updateOptions.value.withCachedResolution(cachedResoluton = true)

libraryDependencies ++= {
  Seq(
    cache,

    //react dependencies
    "org.webjars.npm" % "react" % "15.4.0",
    "org.webjars.npm" % "react-addons-test-utils" % "15.4.0",
    "org.webjars.npm" % "react-dom" % "15.4.0",
    "org.webjars.npm" % "react-redux" % "4.4.6",
    "org.webjars.npm" % "react-router" % "3.0.0",
    "org.webjars.npm" % "react-router-redux" % "4.0.7",
    "org.webjars.npm" % "redux" % "3.6.0",
    "org.webjars.npm" % "redux-form" % "6.2.0",
    "org.webjars.npm" % "redux-localstorage" % "0.4.1",
    "org.webjars.npm" % "redux-logger" % "2.7.4",
    "org.webjars.npm" % "redux-thunk" % "2.1.0",
    "org.webjars.npm" % "types__react" % "0.14.49",
    "org.webjars.npm" % "types__react-addons-test-utils" % "0.14.15",
    "org.webjars.npm" % "types__react-dom" % "0.14.18",
    "org.webjars.npm" % "types__react-redux" % "4.4.32",
    "org.webjars.npm" % "types__react-router-redux" % "4.0.34",
    "org.webjars.npm" % "types__react-router" % "2.0.39",
    "org.webjars.npm" % "types__redux-logger" % "2.6.32",
    "org.webjars.npm" % "types__redux-thunk" % "2.1.31",
    "org.webjars.npm" % "types__redux-form" % "4.0.30",
    "org.webjars.npm" % "types__whatwg-fetch" % "0.0.32",

    "org.webjars.npm" % "core-js" % "2.4.1",

    //tslint dependency
    "org.webjars.npm" % "tslint-eslint-rules" % "2.1.0",
    "org.webjars.npm" % "codelyzer" % "0.0.28",
    "org.webjars.npm" % "types__jasmine" % "2.5.38" % "test"
    //test
    //  "org.webjars.npm" % "jasmine-core" % "2.4.1"
  )
}
dependencyOverrides += "org.webjars.npm" % "types__whatwg-streams" % "0.0.1"

// the typescript typing information is by convention in the typings directory
// It provides ES6 implementations. This is required when compiling to ES5.
typingsFile := Some(baseDirectory.value / "typings" / "index.d.ts")

// use the webjars npm directory (target/web/node_modules ) for resolution of module imports of angular2/core etc
resolveFromWebjarsNodeModulesDir := true

// use the combined tslint and eslint rules plus ng2 lint rules
(rulesDirectories in tslint) := Some(List(
  tslintEslintRulesDir.value,
  ng2LintRulesDir.value
))

routesGenerator := InjectedRoutesGenerator
