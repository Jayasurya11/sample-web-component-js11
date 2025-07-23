import "../components/register-alert";

const version = __PACKAGE_VERSION__;
const name = __PACKAGE_NAME__;
interface PackageInfo {
  version: string;
  name: string;
}
if (typeof window !== "undefined") {
  (window as unknown as { [key: string]: PackageInfo })[
    "sample-web-component-js11"
  ] = {
    version,
    name,
  };
}
