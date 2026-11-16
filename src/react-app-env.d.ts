/// <reference types="react-scripts" />

// Plain stylesheet imports (import "./file.scss"). react-scripts only declares
// the *.module.* variants, and newer TypeScript versions report the rest.
declare module "*.scss";
declare module "*.css";
