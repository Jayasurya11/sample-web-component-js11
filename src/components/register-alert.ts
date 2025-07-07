import { registerReactComponentAsWebComponent } from "../webComponents/WebComponent";
import Alert from "./Alert";

registerReactComponentAsWebComponent('alert-component',Alert,{
    title:'title',
    subtitle:'subTitle',
    backgroundcolor:'backgroundColor'
})