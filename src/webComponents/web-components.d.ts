import * as React from "react";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "alert-component": React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        title: string;
        subTitle: string;
        backgroundColor: string;
      };
    }
  }
}
