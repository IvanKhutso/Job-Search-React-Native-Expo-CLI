export { unstable_settings } from './_layout';
export { default as _layout } from './_layout';
import { Redirect } from "expo-router";

export default function Index() {
    return <Redirect href="/home" />;
}